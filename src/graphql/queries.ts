import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query {
        products {
            items {
                id
                name
                description
                assets {
                    source
                }
                variants {
                    id
                    price
                }
            }
        }
    }
`;

export const GET_ACTIVE_ORDER = gql`
    query {
        activeOrder {
            subTotal
        }
    }
`;