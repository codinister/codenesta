import { defineField, defineType } from 'sanity';
import textCard from '../object/textCard';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),

    defineField({
      name: 'desc',
      title: 'About Me',
      type: 'text',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),

    defineField({
      name: 'social',
      title: 'Social Media Handles',
      type: 'array',
      of: [
        {
          type: 'link',
        },
      ],
    }),

    defineField({
      name: 'stat',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'stats',
        },
      ],
    }),
  ],
});
