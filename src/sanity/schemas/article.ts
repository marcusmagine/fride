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
