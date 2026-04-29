import { createClient } from "@sanity/client";
import { readFileSync } from "fs";

const client = createClient({
  projectId: "laupbakh",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Simple CSV parser that handles quoted fields with commas and newlines
function parseCsv(content) {
  const rows = [];
  let i = 0;
  let headers = null;

  while (i < content.length) {
    const row = [];
    while (i < content.length && content[i] !== "\n") {
      if (content[i] === '"') {
        // Quoted field
        i++; // skip opening quote
        let field = "";
        while (i < content.length) {
          if (content[i] === '"' && content[i + 1] === '"') {
            field += '"';
            i += 2;
          } else if (content[i] === '"') {
            i++; // skip closing quote
            break;
          } else {
            field += content[i++];
          }
        }
        row.push(field);
        if (content[i] === ",") i++;
      } else {
        // Unquoted field
        let field = "";
        while (i < content.length && content[i] !== "," && content[i] !== "\n") {
          field += content[i++];
        }
        row.push(field.trim());
        if (content[i] === ",") i++;
      }
    }
    if (content[i] === "\n") i++;

    if (row.length > 1 || (row.length === 1 && row[0])) {
      if (!headers) {
        headers = row;
      } else {
        const obj = {};
        headers.forEach((h, idx) => (obj[h] = row[idx] ?? ""));
        rows.push(obj);
      }
    }
  }
  return rows;
}

function parseDate(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toISOString().split("T")[0];
  } catch {
    return null;
  }
}

async function run() {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error("Usage: node scripts/import-articles.mjs <path-to-csv>");
    process.exit(1);
  }

  const content = readFileSync(csvPath, "utf-8");
  const rows = parseCsv(content);

  console.log(`Hittade ${rows.length} artiklar att importera...\n`);

  let success = 0;
  let failed = 0;

  for (const row of rows) {
    const slug = row["Slug"]?.trim();
    const title = row["Name"]?.trim();

    if (!slug || !title) {
      console.log(`⚠️  Hoppar över rad utan slug/titel`);
      continue;
    }

    const doc = {
      _type: "article",
      _id: `article-${slug}`,
      title,
      slug: { _type: "slug", current: slug },
      excerpt: row["Short description"]?.trim() || "",
      rawHtml: row["Main content"]?.trim() || "",
      category: row["Kategori"]?.trim() || "",
      coverImageUrl: row["Main image"]?.trim() || "",
      publishedAt: parseDate(row["Published On"]),
      seoTitle: title.slice(0, 60),
      seoDescription: (row["Short description"]?.trim() || "").slice(0, 160),
    };

    try {
      await client.createOrReplace(doc);
      console.log(`✓ ${title}`);
      success++;
    } catch (err) {
      console.error(`✗ ${title}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nKlart! ${success} importerade, ${failed} misslyckades.`);
}

run();
