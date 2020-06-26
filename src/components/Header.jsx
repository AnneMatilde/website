/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';

const Header = () => {
  return (
    <Box sx={{ bg: 'primary'}}>
      <Container variant='containers.normal' sx={{textAlign: 'center', bg:'primary'}}>
        <img sx={{ height: '70px'}} src="/images/am_logo_white.png" alt="" />
      </Container>
    </Box>
  );
};

export default Header;
