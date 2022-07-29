import { Grid } from "@mui/material";
import { Product } from "../../Interface/IProduct";
import ProductCard from "./productCard";

interface Props {
  products: Product[];
}
export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={3}>
      {products.map(products => (
        <Grid item xs={3} key={products.id}>
          <ProductCard products={products} />
        </Grid>
      ))}
    </Grid>
  )
}