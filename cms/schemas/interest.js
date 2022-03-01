export default {
  name: "interest",
  title: "Interest",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    },
  ],
};
