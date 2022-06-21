import { useQuery } from '@apollo/client';
import { GET_ACTIVE_ORDER } from './../graphql/queries';

import { useEffect } from 'react';
import { useState } from "react";

import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, Typography } from '@mui/material';


const useStyles = makeStyles({
  header: {
    background: "black",
    padding: "5px 0px;",
    marginBottom: 60,
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  logo: {
      width: 92,
      height: 20
  },
  cart: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export function Header() {
  const [order, setOrder] = useState('0')
  const {data} = useQuery(GET_ACTIVE_ORDER)

  useEffect(() => {
    if(data) {
      setOrder(data?.activeOrder?.subTotal)
    }
  }, [data, setOrder])

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container maxWidth="lg">
        <div className={classes.headerContent}>
          <img
              src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
              alt="logo"
              className={classes.logo}
            />
            <div className={classes.cart}>
              <ShoppingCartIcon sx={{ color: 'white' }} fontSize="small"></ShoppingCartIcon>
              <Typography
                  variant='body1'
                  component='p'
                  className="description"
                  >
                    
                  $ {order || "0"}
              </Typography>
            </div>
        </div>
      </Container>
    </header>
  );
}
