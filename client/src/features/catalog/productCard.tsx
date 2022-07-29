import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../Interface/IProduct";

interface Props {
    products: Product;
}

export default function ProductCard({ products }: Props) {
    return (
        <>
            <Card>
                <CardHeader avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {products.name.charAt(0).toUpperCase()}
                    </Avatar>}
                    title={products.name}
                    titleTypographyProps={{
                        sx: { fontWeight: 'bold', color: 'primary.main' },
                    }}
                />
                <CardMedia
                    sx={{ height: 140, backgroundsSize: 'contain', bgcolor:'primary.light' }}
                    image={products.pictureUrl}
                    title={products.name}
                />
                <CardContent>
                    <Typography gutterBottom color="secondary" variant="h5">
                        ${Number(products.price).toFixed(2)} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {products.brand} / {products.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </>
    )
}