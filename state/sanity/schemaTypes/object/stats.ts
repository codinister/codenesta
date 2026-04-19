import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'stats',
  title: 'Stats',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'sub_title',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'total',
      title: 'Total',
      type: 'number',
    }),
  ],
});
