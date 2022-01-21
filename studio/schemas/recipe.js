export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Recipe Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            },
        },
        {
            name: 'chef',
            title: 'Chef',
            type: 'reference',
            to: { type: 'chef'},
        },
        {
            name: 'mainImage',
            title: "Recipe Main Image",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ingredient',
            title: 'Ingredient',
            type: 'array',
            of: [
                {
                  type: 'object',
                  fields: [
                      {
                          name: 'ingredient',
                          title: 'Ingredient',
                          type: 'reference',
                          to: [{ type: 'ingredient' }],
                      },
                      {
                        name: 'wholeNumber',
                        title: 'Whole Number',
                        type: 'number',
                      },
                  ], 
                },
            ],
        },
    ],
};