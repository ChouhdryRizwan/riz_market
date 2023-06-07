import { type SchemaTypeDefinition } from "sanity";

import prodCategory from "./schemas/prodCategory";
import product from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [prodCategory, product],
};
