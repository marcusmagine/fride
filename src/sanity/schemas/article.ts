import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Kunskapsartikel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Rubrik",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL-slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publiceringsdatum",
      type: "date",
    }),
    defineField({
      name: "coverImage",
      title: "Omslagsbild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "excerpt",
      title: "Ingress",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Brödtext",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "category",
      title: "Kategori (legacy)",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "categories",
      title: "Kategorier",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Framtidsfullmakt", value: "Framtidsfullmakt" },
          { title: "Testamente", value: "Testamente" },
          { title: "Gåvor och arv", value: "Gåvor och arv" },
          { title: "Skulder och lån", value: "Skulder och lån" },
          { title: "Sambor", value: "Sambor" },
          { title: "Bouppteckning", value: "Bouppteckning" },
          { title: "Dödsbohantering", value: "Dödsbohantering" },
        ],
      },
    }),
    defineField({
      name: "coverImageUrl",
      title: "Omslagsbild URL",
      type: "url",
      description: "Extern bild-URL (från Webflow CDN)",
    }),
    defineField({
      name: "rawHtml",
      title: "Brödtext (HTML)",
      type: "text",
      description: "Artikelinnehåll i HTML-format",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO-titel",
      type: "string",
      description: "Max 60 tecken.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO-beskrivning",
      type: "text",
      rows: 2,
      description: "Max 160 tecken.",
    }),
  ],
});
