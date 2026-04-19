import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'link',
  title: 'Links',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
  ],
});
