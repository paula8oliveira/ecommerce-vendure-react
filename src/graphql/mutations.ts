import { gql } from '@apollo/client'

export const ADD_TO_CART = gql `
mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    ... on Order {
      subTotal
    }
  }
}
`