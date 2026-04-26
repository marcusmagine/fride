import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Produkt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Aktiv", value: "active" },
          { title: "Kommer snart", value: "coming_soon" },
        ],
      },
      initialValue: "active",
    }),
    defineField({
      name: "price",
      title: "Pris (kr)",
      type: "number",
    }),
    defineField({
      name: "appUrl",
      title: "Länk till app (app.fride.se/...)",
      type: "url",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero-rubrik",
      type: "string",
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero-undertext",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Hero-bild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "trustPoints",
      title: "Förtroendeindikationer (3 punkter)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "description",
      title: "Vad är det?-text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "processSteps",
      title: "Så funkar det (steg)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Rubrik", type: "string" },
            { name: "description", title: "Beskrivning", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "Vanliga frågor",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Fråga", type: "string" },
            { name: "answer", title: "Svar", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO-titel",
      type: "string",
      description: "Syns i Google. Max 60 tecken.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO-beskrivning",
      type: "text",
      rows: 2,
      description: "Syns under länken i Google. Max 160 tecken.",
    }),
  ],
});
