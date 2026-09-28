import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "fride",
  title: "Fride CMS",
  // Studion är monterad på /studio. Utan basePath läser Sanity första
  // segmentet i adressen som ett verktygsnamn: "Tool not found: studio".
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
  document: {
    unstable_comments: { enabled: false },
  },
});
