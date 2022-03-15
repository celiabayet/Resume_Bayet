import * as React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Link } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const nav = ['Accueil', 'Qui suis-je ?', 'Compétences', 'Projets', 'Contact'];

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <LinkRouter
            to='/'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            style={{ textDecoration: 'none' }}
          >
            <Link sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              <img
                src="./images/egdo_logo.png"
                className="img-fluid"
                alt="Logo."
                style={{display: {xs:'none'}}}
              />
            </Link>
          </LinkRouter> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {nav.map((navItem) => (
                <LinkRouter
                    to="/"
                    ml={2}
                    style={{ textDecoration: 'none' }}
                >
                  <MenuItem key={navItem} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{navItem}</Typography>
                  </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            mr={7}
          >
            <LinkRouter
              to="/"
              ml={2}
              style={{ textDecoration: 'none' }}>
              <img
                src="./images/egdo_logo.png"
                className="img-fluid"
                alt="Logo."
              />
            </LinkRouter>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }} >
            {nav.map((navItem) => (
              <Link
                href={`#${navItem}`}
                key={navItem}
                underline='none'
                onClick={handleCloseNavMenu}
                mr={8}
                className='underline'
              >
                {navItem}
              </Link>
            ))}
            <LinkRouter
              key='act'
              to='/blog'
              underline='none'
              style={{ textDecoration: 'none' }}
              //ml={5}
              >
              <Link underline='none' mr={6}>
                Blog
              </Link>
            </LinkRouter>
            <LinkRouter
              key='act'
              to='/j-agis'
              underline='none'
              style={{ textDecoration: 'none' }}
              ml={4}>
              <Button color='secondary' variant='contained'>
                J'agis
              </Button>
            </LinkRouter>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;