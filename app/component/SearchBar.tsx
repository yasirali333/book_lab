 'use client'

 import React, { useState , useEffect} from "react";
 import { toast } from "react-toastify";
 import { handlefilteredBooks, handleRemovefilteredBooks, Book } from "@/redux/features/counterSlice";
 import { useAppDispatch, useAppSelector } from "@/redux/hooks";
 import SearchIcon from "@mui/icons-material/Search";
 import { useGetUsersQuery } from "@/redux/services/userApi";
 import { useTheme , createTheme , ThemeProvider  } from '@mui/material/styles';
 import { Box , Button } from "@mui/material"

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
 const SearchBar = () => {
   const [search, setSearch] = useState<string>("");
  //  const { data } = useAppSelector((state) => state.counter);
   const { data, isFetching , error , isLoading } = useGetUsersQuery('/books');
   console.log("search", data);
   const dispatch = useAppDispatch();
   
 
   const handleClick = (e: React.FormEvent) => {
     e.preventDefault();
     console.log('data is not in an array form');
     
     const searchedItem: Book[] = data.data.filter((book: Book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
     if (searchedItem.length > 0) {
      console.log('searhed');
       dispatch(handlefilteredBooks(searchedItem));
       console.log(searchedItem);
     }

    
   };
  
   const clearSearch = () => {
     setSearch("");
     dispatch(handleRemovefilteredBooks());
   };
 
   return (
    <ThemeProvider theme={theme}>
     <Box sx={{backgroundColor:'#EFEFEF' ,width:'900px' ,
      height:'60px' ,gap:'15',borderRadius:'100px', display: 'flex',
      alignItems: 'center', flexShrink:'0'
    }} className='srcBar'>
     <Button  onClick={handleClick}  sx={{borderRadius:'100%' , color:'black'}}>
        <SearchIcon sx={{py:'7px' , pl:'7px' , width:'35px' ,height:'35px' , gap:'10px' }}/>
        </Button>
         
         <input type='text' placeholder='Search..' value={search} width={20} height={20} 
         style={{backgroundColor:'#EFEFEF', border:'none', paddingBottom:'4px'}}
         onChange={(e) => setSearch(e.target.value)} />
         {search.length > 0 ? <button onClick={clearSearch}>X</button> : ""}
           </Box>
     </ThemeProvider>
     
   );
 };
 
 export default SearchBar;


//  <header className="flex justify-evenly items-center pt-[9.349px] pb-[10.228px] gap-[10px] sm:gap-[75px]">
//        <div className="flex items-center w-[245px] sm:w-[475px] lg:w-[633px] h-[50px] pr-4 pl-4 py-[14px] gap-[15px] flex-shrink-0 rounded-[100px] bg-[#EFEFEF]">
//          <form handleClick={handleClick} className="flex items-center gap-[15px] w-full">
//            <button type="submit">
//              <SearchIcon />
//            </button>
//            <input
//              type="text"
//              value={search}
//              placeholder="search by title"
//              className="outline-none bg-[#EFEFEF] w-full"
//              onChange={(e) => setSearch(e.target.value)}
//            />
//          </form>
//          {search.length > 0 ? <button onClick={clearSearch}>X</button> : ""}
//        </div>
//      </header>
 
//  'use client'
//  import { Box , Button } from "@mui/material"
//  import SearchIcon from '@mui/icons-material/Search';
//  import { useTheme , createTheme , ThemeProvider  } from '@mui/material/styles';
//  import { useState } from "react";
 
//  const theme = createTheme({
   
//    typography:{
    
//     // fontSize:20,
//         myVariant3:{
//           color: '#000000',
//           fontSize: '18px',
//          fontFamily: 'Sans-Serif',
//          fontStyle: 'normal',
//          fontWeight: '400',
//          lineHeight: '27px',
        
         
          
//         },
//         myVariant2:{
//           color: '#FFF',
//           fontSize: '26px',
//          fontFamily: 'Sans-Serif',
//          fontStyle: 'normal',
//          fontWeight: '400',
//          lineHeight: '39px',
//          textTransform: 'capitalize',
          
//         },
  
//       },
//     });
//  export default function SearchBar() {
   
  
//    return (
     
//      <ThemeProvider theme={theme}>
//      <Box sx={{backgroundColor:'#EFEFEF' ,width:'900px' ,
//       height:'60px' ,gap:'15',borderRadius:'100px', display: 'flex',
//       alignItems: 'center', flexShrink:'0'
//     }} className='srcBar'>
//      <Button >
//         <SearchIcon sx={{py:'7px' , pl:'7px' , width:'35px' ,height:'35px' , gap:'10px' }}/>
//         </Button>
         
//          <input type='text' placeholder='Search..'  width={20} height={20} 
//          style={{backgroundColor:'#EFEFEF', border:'none', paddingBottom:'4px'}}
//          />
           
         
//      </Box>
//      </ThemeProvider>
//    )
//  }
 
