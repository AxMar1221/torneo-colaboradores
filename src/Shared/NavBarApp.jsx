import { AppBar, Container, MenuItem, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavBarApp = () => {
  return (
    <div className='container mb-5'>
      <AppBar color='error'>
        <Container>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                to="/home"
                style={{ textDecoration: 'none', color: 'white' }}
                activeClassName="active"
              >
                <Typography variant='h6'>Inicio</Typography>
              </NavLink>
            </MenuItem>

            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                to="/tabla"
                style={{ textDecoration: 'none', color: 'white' }}
                activeClassName="active"
              >
                <Typography variant='h6'>Tabla general</Typography>
              </NavLink>
            </MenuItem>

            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                to="/estadisticas"
                style={{ textDecoration: 'none', color: 'white' }}
                activeClassName="active"
              >
                <Typography variant='h6'>Estadísticas</Typography>
              </NavLink>
            </MenuItem>

            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                to="/estadisticas-partido"
                style={{ textDecoration: 'none', color: 'white' }}
                activeClassName="active"
              >
                <Typography variant='h6'>Estadísticas por partido</Typography>
              </NavLink>
            </MenuItem>

            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                to="/en-vivo"
                style={{ textDecoration: 'none', color: 'white' }}
                activeClassName="active"
              >
                <Typography variant='h6'>En Vivo</Typography>
              </NavLink>
            </MenuItem>
          </Toolbar>
        </Container>

      </AppBar>
    </div>
  )
}
