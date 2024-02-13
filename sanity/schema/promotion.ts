export const promotion = {
    name: 'promotion',
    title: 'Promotion',
    type: 'document',
    fields: [{
        name: 'title',
        title: 'Title',
        type: 'string'
    }, {
        name: 'description',
        title: 'Description',
        type: 'text'
    }, 
    {
        name: 'expiryDate',
        title: 'Expiry Date',
        type: 'number'
    },
    {
        name: 'image',
        title: 'Image',
        type: "array",
        of: [{type: "image"}]
    }
],
}