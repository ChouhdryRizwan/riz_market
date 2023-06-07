import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product_category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'cat_name',
      title: 'Category',
      type: 'string',
    }),
  ],
})
