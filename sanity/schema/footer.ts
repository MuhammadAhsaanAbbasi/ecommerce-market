export const footer = {
    name: 'footer', 
    title: 'Footer',  
    type: 'document',
    fields: [
        {
            name:'title',
            title: 'Title',
            type: 'string',
        },
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
                            name: 'inclusionicon',
                            title: 'Icon',
                            type: 'image',
                        },
                    ],
                },
            ],
        },
        {
            name:"footerLine",
            title:"Footer Line",
            type:"string",
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
                                    type: 'url',
                                },
                                {
                                    name: 'navicon',
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