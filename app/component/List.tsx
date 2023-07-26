'use client'

import Box from "@mui/material/Box/Box"
import Image from "next/image";
import {  Typography,Card,CardActions,CardMedia ,
          CardContent ,  Rating , Stack  , CircularProgress , Button } from "@mui/material"
import { useTheme , createTheme , ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
//redux
import { useGetUsersQuery } from "@/redux/services/userApi"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Loading from "../Loading";
import Popup from "./Popup";
import './list.css'

interface Book {
  title: string;
  imageLink: string;
  rating: number;
  price: number;
  // Add more properties if needed
}

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
       width:'22px',
       height:'27px',
      
       
        
      },
   
     },
   });


export default function List() {

  const [selectBook , setSelectBook] = useState<Book | null>(null);
  const changeData = (book: Book) => {
    setSelectBook(book);
  };
  // const handleBookClick = (book: Book) => {
  //   setSelectBook(book);
  //   document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  // };

  // const handleClosePopup = () => {
  //   setSelectBook(null);
  //   document.body.style.overflow = 'auto'; // Restore scrolling when popup is closed
  // };
 
 
    const { data, isFetching , error , isLoading} = useGetUsersQuery('/books');

    if (isFetching || isLoading) return( 
    <Box sx={{width:'100px' , height:'100px' , pt:'80px' , pl:'640px'}}>
      {/* <CircularProgress/> */}
      <Loading/>
    </Box> );
    if (error) return 'Error occurred while fetching data';
   const book = data?.data?.stats;
 

   
  return (
    <>
    
    <ThemeProvider theme={theme}>
    <Box>
        {selectBook && <Popup selectBook={selectBook} onClose={() => setSelectBook(null)} />}


     
    <Box sx={{width:'full' , height:'full',display:'flex' ,position:'relative',
      flexWrap:'wrap'}} > 
    {/* <h3>{data.data[0].title}</h3> */}
     
    
   { data.data.map((book:any) => (
        <div
        key={book.title}>  
          {/* <h4>{book.title}</h4> */}
          <Box  sx={{width:'300px' , pt:'50px' , pl:'105px' , gap:'60px', 
            }} onClick={() => changeData(book)} >
 

         <Card sx={{width:'300px' ,height:'550px' , border:'0px' , boxShadow:'none'  }}>
        <CardMedia >
        
            <div className="image-container">
          
            <img src={book.imageLink} alt={book.title} width={300} height={390}
            style={{ borderRadius: '15px' }}/>
             <div className="icon" >
              <div className='is_liked'>
             {book.is_liked ? <FavoriteIcon sx={{mt:'9px',ml:'7px', color:'red' , width:'32px' , height:'28px'}}/> : <FavoriteBorderIcon sx={{mt:'9px',ml:'7px', color:'red' , width:'32px' , height:'28px'}}/>}
             </div>
            </div>
            </div>
   
        </CardMedia>
        <CardContent sx={{pl:'2px'}}>
          <Typography gutterBottom variant='myVariant3'  >
           {book.title}
          </Typography>
          <Stack>
          <Rating sx={{mt:'10px' , mb:'10px'}}
           name="simple-controlled"
           value={book.rating}
   precision={0.5}
   size='large'
/>
          </Stack>
          
        <Typography variant='myVariant4'>
              
               ${book.price}
              
               </Typography>
        </CardContent>
        <CardActions>
      
        </CardActions>
      </Card>
      
      
      </Box>
      {/* </Box> */}
      
        
        </div>
      ))
     
   }
   
     {/* <h4>{JSON.stringify(data)}</h4> */}
    </Box>
    </Box>
  
    </ThemeProvider>
    </>
  )
}








// 'use client'

// import Box from "@mui/material/Box/Box"
// import Image from "next/image";
// import {  Typography,Card,CardActions,CardMedia ,
//           CardContent ,  Rating , Stack  , CircularProgress , Button } from "@mui/material"
// import { useTheme , createTheme , ThemeProvider } from '@mui/material/styles';
// import { useState } from "react";
// //redux
// import { useGetUsersQuery } from "@/redux/services/userApi"

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Loading from "../Loading";
// import './list.css'

// interface Book {
//   title: string;
//   imageLink: string;
//   rating: number;
//   price: number;
//   // Add more properties if needed
// }

// const theme = createTheme({
  
//   typography:{
   
//    // fontSize:20,
//        myVariant3:{
//          color: '#000000',
//          fontSize: '22px',
//         fontFamily: 'Sans-Serif',
//         fontStyle: 'normal',
//         fontWeight: '600',
//         lineHeight: '33px',
       
        
         
//        },
//        myVariant4:{
//         color: '#000000',
//         fontSize: '18px',
//        fontFamily: 'Sans-Serif',
//        fontStyle: 'normal',
//        fontWeight: '500',
//        lineHeight: '27px',
//        width:'22px',
//        height:'27px',
      
       
        
//       },
   
//      },
//    });


// export default function List() {

//   const [selectBook , setSelectBook] = useState<Book | null>(null);
//   const handleBookClick = (book: Book) => {
//     setSelectBook(book);
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
//   };

//   const handleClosePopup = () => {
//     setSelectBook(null);
//     document.body.style.overflow = 'auto'; // Restore scrolling when popup is closed
//   };
 
 
//     const { data, isFetching , error , isLoading} = useGetUsersQuery('/books');

//     if (isFetching || isLoading) return( 
//     <Box sx={{width:'100px' , height:'100px' , pt:'80px' , pl:'640px'}}>
//       {/* <CircularProgress/> */}
//       <Loading/>
//     </Box> );
//     if (error) return 'Error occurred while fetching data';
//    const book = data?.data?.stats;
 

   
//   return (
//     <>
   
    
//     <ThemeProvider theme={theme}>
     
//     <Box sx={{width:'full' , height:'full',display:'flex' ,
//       flexWrap:'wrap'}} > 
//     {/* <h3>{data.data[0].title}</h3> */}
     
    
//    { data.data.map((book:any) => (
//         <div
//         key={book.title}>  
//           {/* <h4>{book.title}</h4> */}
//           <Box  sx={{width:'300px' , pt:'50px' , pl:'105px' , gap:'60px', 
//             }} onClick={()=>handleBookClick(book)}>
 

//          <Card sx={{width:'300px' ,height:'550px' , border:'0px' , boxShadow:'none'  }}>
//         <CardMedia >
        
//             <div className="image-container">
          
//             <img src={book.imageLink} alt={book.title} width={300} height={390}
//             style={{ borderRadius: '15px' }}/>
//              <div className="icon" >
//               <div className='is_liked'>
//              {book.is_liked ? <FavoriteIcon sx={{mt:'9px',ml:'7px', color:'red' , width:'32px' , height:'28px'}}/> : <FavoriteBorderIcon sx={{mt:'9px',ml:'7px', color:'red' , width:'32px' , height:'28px'}}/>}
//              </div>
//             </div>
//             </div>
   
//         </CardMedia>
//         <CardContent sx={{pl:'2px'}}>
//           <Typography gutterBottom variant='myVariant3'  >
//            {book.title}
//           </Typography>
//           <Stack>
//           <Rating sx={{mt:'10px' , mb:'10px'}}
//            name="simple-controlled"
//            value={book.rating}
//    precision={0.5}
//    size='large'
// />
//           </Stack>
          
//         <Typography variant='myVariant4'>
              
//                ${book.price}
              
//                </Typography>
//         </CardContent>
//         <CardActions>
      
//         </CardActions>
//       </Card>
//       {selectBook && selectBook.title === book.title && (
//                 <div
//                   className="popup"
//                   onClick={() => setSelectBook(null)}
//                   style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(19, 18, 18, 0.563)' }}
//                 >
//                   <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', bgcolor: 'gray' }}>
//                     {/* Display book details here using the selectBook state */}
//                     <Typography variant="myVariant3">{selectBook.title}</Typography>
//                     <Typography variant="myVariant4">${selectBook.price}</Typography>
//                     {/* Add other book details here */}
//                   </Box>
//                 </div>
//               )}
      
//       </Box>
//       {/* </Box> */}
      
        
//         </div>
//       ))
     
//    }
   
//      {/* <h4>{JSON.stringify(data)}</h4> */}
//     </Box>
    
  
//     </ThemeProvider>
//     </>
//   )
// }