'use client'
import NavBar from "./component/NavBar"

import Box from "@mui/material/Box/Box"
import Image from "next/image"
import { useTheme , createTheme , ThemeProvider } from '@mui/material/styles';
import {  Typography } from "@mui/material"
//redux
// import { useGetUsersQuery } from "@/redux/services/userApi"
import List from "./component/List"



//end
const theme = createTheme({
  
   typography:{
    
    // fontSize:20,
        myVariant1:{
          color: '#FFF',
          fontSize: '30px',
         fontFamily: 'Sans-Serif',
         fontStyle: 'normal',
         fontWeight: '600',
         lineHeight: '45px',
         textTransform: 'capitalize',
          
        },
        myVariant2:{
          color: '#FFF',
          fontSize: '26px',
         fontFamily: 'Sans-Serif',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: '39px',
         textTransform: 'capitalize',
          
        },
    
          
        
      },
    });


export default function Home() {
 
  return (
    <ThemeProvider theme={theme}>
   
   <Box sx={{m:'0px' , p:'0px'}}>
    <div><NavBar/></div>
    <Box sx={{display:'flex' ,flexDirection:'row' ,pt:'8px'}}>
    <Box sx={{backgroundColor:'#004D6D' , width:'690px' ,
     height:'360px'}}>
      <Box sx={{ width: '439px',height: '92px',flexShrink: '0px' , 
      pt:'90px',pr:'50px',pl:'80px'}}>
         <Typography  variant="myVariant1" >
           Lorem ipsum dolor sit amet consectetur.
         </Typography>
     </Box>

      <Box sx={{ width: '450px',height: '86px',flexShrink: '0',
      pb:'40px',pr:'50px',pl:'80px',pt:'15px'}}>
     <Typography  variant="myVariant2" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </Box>
    </Box>
    <Box>
       <Image src={'/img1.png'} alt="img1" width={690} height={360}  />
    </Box>
    </Box>
    {/* redux */}
      <List/>
    {/* end */}
    
   </Box>
   </ThemeProvider>
  )
}
