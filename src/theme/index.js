import { createTheme } from '@mui/material/styles';

// Or Create your Own theme:
const theme = createTheme({
    palette: {
      primary: {
        main: '#09915A'
      }
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'space-40', color: 'primary' },
            style: {
              paddingLeft: '40px',
              paddingRight: '40px'
            },
          },
        ],
      },
    },
  });

  export default theme;