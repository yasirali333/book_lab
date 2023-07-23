'use client'

import Box from "@mui/material/Box/Box"
// import Image from "next/image";
import {  Typography,Card,CardActions,CardMedia ,
          CardContent ,  Rating , Stack  , CircularProgress , Button } from "@mui/material"
import { useTheme , createTheme , ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
//redux
import { useGetUsersQuery } from "@/redux/services/userApi"
import BooksDetail from './BooksDetail';

const theme = createTheme({
  
  typography:{
   
   // fontSize:20,
       myVariant3:{
         color: '#000000',
         fontSize: '22px',
        fontFamily: 'Sans-Serif',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '33px',
       
        
         
       },
       myVariant4:{
        color: '#000000',
        fontSize: '18px',
       fontFamily: 'Sans-Serif',
       fontStyle: 'normal',
       fontWeight: '500',
       lineHeight: '27px',
      
       
        
      },
   
     },
   });


export default function List() {
  // const [value, setValue] = useState<number | null>(null);
  const [isOpen ,setIsOpen] = useState(false);
  

    const { data, isFetching , error , isLoading} = useGetUsersQuery('/books');

    if (isFetching || isLoading) return( 
    <Box sx={{width:'100px' , height:'100px' , pt:'80px' , pl:'640px'}}>
      <CircularProgress/>
    </Box> );
    if (error) return 'Error occurred while fetching data';
   const book = data?.data?.stats;
   console.log(data);
   console.log(data.data[0].title);

   
  return (
    <ThemeProvider theme={theme}>
      <Box>
      
     <BooksDetail isOpen={isOpen} 
      closeModel={()=>setIsOpen(false)} />
    
      </Box>
    <Box sx={{width:'full' , height:'full',display:'flex' ,  flexWrap:'wrap'}}> 
    {/* <h3>{data.data[0].title}</h3> */}
     
    
   { data.data.map((book:any) => (
        <div
        key={book.title}>
          {/* <h4>{book.title}</h4> */}
          <Box  sx={{width:'300px' , pt:'50px' , pl:'105px' , gap:'60px', 
            }}>
      
         <Card sx={{width:'300px' ,height:'550px' , border:'0px' , boxShadow:'none'   }}>
        <CardMedia >
          
            <img src={book.imageLink} alt={book.title} width={300} height={390}
            style={{ borderRadius: '15px' }}/>
           
        </CardMedia>
        <CardContent sx={{pl:'2px'}}>
          <Typography gutterBottom variant='myVariant3'  >
           {book.title}
          </Typography>
          <Stack>
          <Rating
           name="simple-controlled"
           value={book.rating}
   precision={0.5}
   size='large'
/>
          </Stack>
          
        <Typography variant='myVariant4' >
              
               ${book.price}
               </Typography>
        </CardContent>
        <CardActions>
       <Button onClick={() => setIsOpen(true)}>More</Button>
        </CardActions>
      </Card>
      </Box>
      {/* </Box> */}
        
        </div>
      ))
     
   }
   
     {/* <h4>{JSON.stringify(data)}</h4> */}
    </Box>
  
    </ThemeProvider>
  )
}
