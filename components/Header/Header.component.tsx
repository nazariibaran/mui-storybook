import * as React from 'react';

import { HeaderProps } from './Header.props';
import { Search } from '../Search';
import { PageCaption } from '../PageCaption';
import { NavBar } from '../NavBar';
import { Grid } from '../Grid';

/**
 * Renders Header Component
 */
const Header: React.FC<HeaderProps> = ({ pageTitle, navLinks }) => {
  return (
    <Grid
      container
      alignItems='center'
      sx={{
        px: 4,
        py: 2,
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1);'
      }}
    >
      <Grid item xs={4}>
        <PageCaption title={pageTitle} />
      </Grid>
      <Grid item xs={4} sx={{ px: 1 }}>
        <Search size='small' />
      </Grid>
      <Grid item xs={4}>
        <NavBar direction='row' justifyContent='flex-end' spacing={5} links={navLinks || []} />
      </Grid>
    </Grid>
  );
};

export { Header };
