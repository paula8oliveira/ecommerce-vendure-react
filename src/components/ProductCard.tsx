import { useMutation } from '@apollo/client';
import { ADD_TO_CART } from './../graphql/mutations';
import { GET_ACTIVE_ORDER } from './../graphql/queries';

import { makeStyles } from '@mui/styles';
import { Button, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia}  from '@mui/material';

type CardType = {
    name: string,
    assets: any[],
    description: string,
    variants: any[],
    id: string
};

interface CardProps {
   item: CardType
}

const useStyles = makeStyles({
    media: {
        height: 200,
        width: "100%",
        objectFit: "cover",
        objectPosition: "center center",
        marginTop: 20,
        marginBottom: 20,
        
    },
    price: {
        marginTop: 10,
    }
});

export const ProductCard: React.FC<CardProps> = ({item}): JSX.Element => {

    const classes = useStyles();

    const [ addToOrder ] = useMutation(ADD_TO_CART, {
        refetchQueries: [ { query: GET_ACTIVE_ORDER } ]
    })
    
    const handleClick = () => {
        const productVariantId = item.variants[0].id
        const quantity = 1
        addToOrder({ variables: {productVariantId, quantity} })
    }

    return (
        <Card id={item.id}>
            <CardActionArea>
                <CardContent>
                    <Typography 
                        variant="h5">
                        {item.name}
                    </Typography>
                    <CardMedia
                        className={classes.media}
                        image={item.assets[0].source}
                        title={item.name}
                    />
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        className="description"
                        >
                        {item.description}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h2"
                        className={classes.price}>
                        ${item.variants[0].price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions>
                <Button 
                    onClick={handleClick} 
                    variant='contained'
                    color='primary'>
                        Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}