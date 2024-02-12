import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { footer } from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,footer],
}
