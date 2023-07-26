"use clinet"
import { Box, Typography, Button } from "@mui/material";
import { useEffect } from "react"; 

interface Book {
  title: string;
  imageLink: string;
  rating: number;
  price: number;

}
interface PopupProps {
  selectBook: Book;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ selectBook, onClose }) => {
    useEffect(() => {
        const handleOutsideClick = (event:any) => {
        
          if (!event.target.classList.contains("popup")) {
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
  return (
    <Box
      sx={{ 
        position: "fixed",
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
        sx={{ m:'260',
          width: "1080px",
          height: "450px",
          color: "black",
          bgcolor: "white",
          zIndex: 9999, 
        }}
      >
        <Box>
            
        <img src={selectBook.imageLink} alt={selectBook.title} width={531} height={450} className="popup-img"
            style={{ borderRadius: '15px' }}/>
        </Box>
        <Box>

        </Box>
        {/* <Typography variant="myVariant3">{selectBook.title}</Typography>
        <Typography variant="myVariant4">${selectBook.price}</Typography>
    */}
   
      </Box>
    </Box>
  );
};

export default Popup;