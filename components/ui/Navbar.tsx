import { useContext } from 'react';
import { Router, useRouter } from 'next/router';
import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { UiContext } from '../../context';


export const Navbar = () => {



  //cambiar de primary a info en los botones
  const { asPath } = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  const activeLink = (href: string) => href === asPath ? 'primary' : 'info';


  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref >
          <Link display='flex' alignItems='center' >
            <Typography variant='h6' >Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }} >Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block', } }} >
          <NextLink href='/category/men' passHref>
            <Link>
              <Button variant='contained' color={activeLink('/category/men')}>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Link>
              <Button color={activeLink('/category/women')}>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kid' passHref>
            <Link>
              <Button color={activeLink('/category/kid')}>Niños</Button>
            </Link>
          </NextLink>
        </Box>



        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary" >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button onClick={toggleSideMenu} >
          Menu
        </Button>

      </Toolbar>
    </AppBar>
  )
}
function activeLink(arg0: string) {
  throw new Error('Function not implemented.');
}

