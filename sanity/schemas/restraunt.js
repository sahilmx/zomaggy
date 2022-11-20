export default {
  name: "restraunt",
  title: "Restraunt",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restraunt Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of the restraunt",
      type: "image",
    },

    {
      name: "lat",
      title: "Latitude of the Restraunt ",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude of the Restraunt ",
      type: "number",
    },
    {
      name: "address",
      title: "Restraunt Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Restraunt Rating (1-5)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("please enter a value between 1 to 5 "),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
