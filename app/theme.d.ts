
import { TypographyOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {   
  
    interface TypographyVariants {
        myVariant1: React.CSSProperties;
        myVariant2: React.CSSProperties;
        myVariant3: React.CSSProperties;
        myVariant4: React.CSSProperties;
      }
    
      // allow configuration using `createTheme`
      interface TypographyVariantsOptions {
        myVariant1?: React.CSSProperties;
        myVariant2?: React.CSSProperties;
        myVariant3?: React.CSSProperties;
        myVariant4?: React.CSSProperties;
      }
  }
  

  // Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      myVariant1: true;
      myVariant2: true;
      myVariant3: true;
      myVariant4: true;
    }
  }
