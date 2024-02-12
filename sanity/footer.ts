export const footer = {
    name: 'footer', 
    title: 'Footer',  
    type: 'document',
    fields: [
        {
            name: 'inclusions',
            title: 'Inclusions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                        },
                    ],
                },
            ],
        },
        {
            name: 'navItems',
            title: 'Nav Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'object',
                            fields: [
                                {
                                    name: 'label',
                                    title: 'Label',
                                    type: 'string',
                                },
                                {
                                    name: 'url',
                                    title: 'Url',
                                    type: 'string',
                                },
                                {
                                    name: 'icon',
                                    title: 'Icon',
                                    type: 'image',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}