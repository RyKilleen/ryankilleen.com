export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    { name: "url", title: "Website", type: "url" },
    {
      name: "twitter",
      title: "Twitter",
      type: "object",
      fields: [
        {
          name: "username",
          title: "Username",
          type: "string",
        },
        { name: "url", title: "URL", type: "url" },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
