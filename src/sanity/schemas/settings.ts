import { defineType, defineField } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Sajt-inställningar",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Sajtnamn",
      type: "string",
    }),
    defineField({
      name: "defaultSeoTitle",
      title: "Standard SEO-titel",
      type: "string",
    }),
    defineField({
      name: "defaultSeoDescription",
      title: "Standard SEO-beskrivning",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "contactEmail",
      title: "Kontakt-e-post",
      type: "string",
    }),
  ],
});
