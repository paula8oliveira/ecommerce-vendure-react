import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import { ProductCard } from "./ProductCard";
import { Grid } from '@mui/material';


export function ProductList() {
  const {data} = useQuery(GET_PRODUCTS)

  return (
    <Grid container spacing={2}>
      {data?.products.items.map((item:any)=>(
        <Grid item xs={4} key={item.id}>
          <ProductCard item={item}></ProductCard>
        </Grid>
      ))}
    </Grid>
);
}
