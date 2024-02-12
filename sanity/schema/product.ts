import { title } from "process";

export const product = {
    name: "product",
    title: "Product",
    type: "document",
    _fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 200,
                slugify: (input: any) => input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .slice(0, 200),
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }]
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
    ],
    get fields() {
        return this._fields;
    },
    set fields(value) {
        this._fields = value;
    },
};