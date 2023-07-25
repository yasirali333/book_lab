'use client'
import { Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useTheme , createTheme , ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  
  typography:{
   
   // fontSize:20,
       myVariant3:{
         color: '#000000',
         fontSize: '18px',
        fontFamily: 'Sans-Serif',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '27px',
       
        
         
       },
      //  myVariant2:{
      //    color: '#FFF',
      //    fontSize: '26px',
      //   fontFamily: 'Sans-Serif',
      //   fontStyle: 'normal',
      //   fontWeight: '400',
      //   lineHeight: '39px',
      //   textTransform: 'capitalize',
         
      //  },
 
     },
   });
export default function SearchBar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{backgroundColor:'#EFEFEF' ,width:'900px' ,
     height:'60px' ,gap:'15',borderRadius:'100px', display: 'flex',
     alignItems: 'center', flexShrink:'0'
   }} className='srcBar'>
       <SearchIcon sx={{py:'7px' , pl:'7px' , width:'35px' ,height:'35px' , gap:'10px' }}/>
         {/* <Box sx={{
            color: '#555',
            display: 'flex',
            padding: '10px',
            border:' 1px solid currentColor',
            borderRadius:' 15px',
            }}></Box> */}
        <input type='text' placeholder='Search..'  width={20} height={20} 
        style={{backgroundColor:'#EFEFEF', border:'none', paddingBottom:'4px'}}/>
          
        
    </Box>
    </ThemeProvider>
  )
}
