export const footer = {
    name: 'footer', 
    title: 'Header & Footer',  
    type: 'document',
    fields: [
        {
            name:'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: "headerimage",
            title: "Header Image",
            type: "image",
        },
        {
            name: 'headerTitle',
            title: 'Header Title',
            type: 'string',
        },
        {
            name: "headerDescription",
            title: "Header Description",
            type: "string",
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
            name: "footerimage",
            title: "Footer Image",
            type: "image",
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