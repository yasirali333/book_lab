"use clinet"
import { Box, Typography, Button , Rating, colors} from "@mui/material";
import { useEffect } from "react"; 
import { useTheme , createTheme , ThemeProvider } from '@mui/material/styles';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import Link from "next/link";
interface Book {
  title: string;
  imageLink: string;
  rating: number;
  price: number;
  year: number;
  author: string;
  country: string;
  language: string;
  pages: number;
  reviews: number;
  link: string;

}
interface PopupProps {
  selectBook: Book;
  onClose: () => void;
}

const theme = createTheme({
  
  typography:{
   
   // fontSize:20,
   myVariant5:{
    color: 'black',
    fontSize:'24px',
    fontFamily: 'Sans-Serif',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '39px',
    textTransform: 'capitalize',
  
     
   },
   myVariant6:{
     color: 'black',
     fontSize: '18px',
    fontFamily: 'Sans-Serif',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '30px',
    textTransform: 'capitalize',
     
   },

       myVariant7:{
         color: 'black',
         fontSize: '14px',
        fontFamily: 'Sans-Serif',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px',
       
        
         
       },
       myVariant8:{
        color: '#000000',
        fontSize: '14px',
       fontFamily: 'Sans-Serif',
       fontStyle: 'normal',
       fontWeight: '400',
       lineHeight: '24px',
      
       
        
      },
      myVariant9:{
        color: ' #B2B2B2',
        fontSize: '11px',
       fontFamily: 'Sans-Serif',
       fontStyle: 'normal',
       fontWeight: '400',
       lineHeight: '24px',
   
      },
      myVariant10:{
        color: 'white',
         fontSize: '13px',
        fontFamily: 'Sans-Serif',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px',
        textTransform: 'capitalize',
     
       
      },

    
   
     },
   });

const Popup: React.FC<PopupProps> = ({ selectBook, onClose }) => {
    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        const popupBox = document.querySelector('.popup-box');
        if (popupBox && !popupBox.contains(event.target as Node)) {
          onClose();
        }
      };
      
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        // Clean up the event listener on unmount
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, [onClose]);
    
      useEffect(() => {
       
        const originalOverflow = window.getComputedStyle(document.body).overflow;
    
       
        document.body.style.overflow = "hidden";
    
        
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }, []);
    
      // Return null if there is no selected book
      if (!selectBook) return null;
      const handleLinkWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
      };
  return (
     
    <ThemeProvider theme={theme}>
    <Box
      sx={{ 
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(19, 18, 18, 0.563)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} 
    >
      <Box
        sx={{ 
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
          color: "black",
          bgcolor: "white",borderRadius:'15px',
          m:'0px',
          zIndex: 9999, display: 'flex',flexDirection:'row'
        }} className='popup-box'
      >
        <Box sx={{width:'360px' , height:'520px'  }}>
            
        <img src={selectBook.imageLink} alt={selectBook.title} width={360} height={520}
            style={{ borderTopLeftRadius: '15px' , borderBottomLeftRadius:'15px' }}/>
        </Box>
        <Box sx={{width:'310px' , height:'520px' }}>
          <Box sx={{mt:'30px' , ml:'20px',}}>
          <Typography variant="myVariant5"> {selectBook.title}</Typography>
          </Box>
      <Box sx={{mt:'15px' , ml:'25px',display:'flex' , flexDirection:'row' , gap:'45px'}}>
       <Box sx={{width:'58px' , height:'12px'}}>
        <Typography variant="myVariant6">Rating</Typography><br/>
        <Rating name="simple-controlled" sx={{fontSize:'10px'}}
                value={selectBook.rating} precision={0.5} />
        </Box> 
       <Box>
        <Typography variant="myVariant6">Reviews</Typography><br/>
       <Typography variant="myVariant9" sx={{ml:'19px'}}>({selectBook.reviews})</Typography>
       </Box>
        <Box><Typography variant="myVariant6">Price</Typography ><br/>
        <Typography variant="myVariant9" sx={{ml:'13px'}}> ${selectBook.price} </Typography>
        </Box>
       </Box>
        <Box sx={{width:'280px' ,height:'146px' ,mt:'12px',ml:'20px', gap:'5px' ,display:'flex' , flexDirection:'column'}}>
         <Box><Typography variant="myVariant7">Athure:</Typography> <Typography variant="myVariant8">{selectBook.author}</Typography></Box>
         <Box><Typography variant="myVariant7">Country:</Typography><Typography variant="myVariant8">{selectBook.country}</Typography></Box>
         <Box><Typography variant="myVariant7">Language:</Typography><Typography variant="myVariant8">{selectBook.language}</Typography></Box>
         <Box><Typography variant="myVariant7">Year:</Typography><Typography variant="myVariant8">{selectBook.year}</Typography></Box>
         <Box><Typography variant="myVariant7">Pages:</Typography><Typography variant="myVariant8">{selectBook.pages}</Typography></Box>
       </Box>
       <Box sx={{ml:'20px' }} onClick={handleLinkWrapperClick}>
       <Link href={selectBook.link} >
       <Button variant="contained"  sx={{backgroundColor: '#004D6D',width:'270px',height:'35px',color:'white',}}
        endIcon={<OpenInNewRoundedIcon/>}><Typography variant="myVariant10">View Detail</Typography>
        </Button>
          </Link>
        
       </Box>
       </Box>
       
   
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Popup;