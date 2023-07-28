'use client'
import React, { useState } from "react";
import { toast } from "react-toastify";
import { handleSearchedBooks, handleRemoveSearchedBooks, Book } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const { books, searchedBook } = useAppSelector((state) => state.counter); // Add searchedBook to the selector
  const dispatch = useAppDispatch();

  console.log("All Books:", books);
  console.log("Searched Books:", searchedBook);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchedItem: Book[] = books.filter((book: Book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    if (searchedItem.length > 0) {
      dispatch(handleSearchedBooks(searchedItem));
    } else {
      toast.error("Incorrect Title, please enter a valid title.");
    }
  };

  const clearSearch = () => {
    setSearch("");
    dispatch(handleRemoveSearchedBooks());
  };

  return (
    <header className="flex justify-evenly items-center pt-[9.349px] pb-[10.228px] gap-[10px] sm:gap-[75px]">
      <div className="flex items-center w-[245px] sm:w-[475px] lg:w-[633px] h-[50px] pr-4 pl-4 py-[14px] gap-[15px] flex-shrink-0 rounded-[100px] bg-[#EFEFEF]">
        <form onSubmit={onSubmit} className="flex items-center gap-[15px] w-full">
          <button type="submit" >
            <SearchIcon />
          </button>
          <input
            type="text"
            value={search}
            placeholder="search by title"
            className="outline-none bg-[#EFEFEF] w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {search.length > 0 ? <button onClick={clearSearch}>X</button> : ""}
      </div>
    </header>
  );
};

export default SearchBar;


// 'use client'
// // SearchBar.tsx
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { handleSearchedBooks, handleRemoveSearchedBooks, Book } from "@/redux/features/counterSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import SearchIcon from "@mui/icons-material/Search";

// const SearchBar = () => {
//   const [search, setSearch] = useState<string>("");
//   const { books } = useAppSelector((state) => state.counter);
//   const dispatch = useAppDispatch();

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const searchedItem: Book[] = books.filter((book:any) =>
//       book?.title?.toLowerCase().includes(search.toLowerCase())
//     );
//     if (searchedItem.length > 0) {
//       dispatch(handleSearchedBooks(searchedItem));
//     } else {
//       toast.error("Incorrect Title please enter valid title");
//     }
//   };

//   const clearSearch = () => {
//     setSearch("");
//     dispatch(handleRemoveSearchedBooks());
//   };

//   return (
//     <header className="flex justify-evenly items-center pt-[9.349px] pb-[10.228px] gap-[10px] sm:gap-[75px]">
//       <div className="flex items-center w-[245px] sm:w-[475px] lg:w-[633px] h-[50px] pr-4 pl-4 py-[14px] gap-[15px] flex-shrink-0 rounded-[100px] bg-[#EFEFEF]">
//         <form onSubmit={onSubmit} className="flex items-center gap-[15px] w-full">
//           <button type="submit" >
//             <SearchIcon />
//           </button>
//           <input
//             type="text"
//             value={search}
//             placeholder="search by title"
//             className="outline-none bg-[#EFEFEF] w-full"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </form>
//         {search.length > 0 ? <button onClick={clearSearch}>X</button> : ""}
//       </div>
//     </header>
//   );
// };

// export default SearchBar;






// 'use client'
// import { useState } from "react";
// import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
// import { Box , Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// const theme = createTheme({
  
//   typography:{
   
//    // fontSize:20,
//        myVariant3:{
//          color: '#000000',
//          fontSize: '18px',
//         fontFamily: 'Sans-Serif',
//         fontStyle: 'normal',
//         fontWeight: '400',
//         lineHeight: '27px',
       
        
         
//        },
//        myVariant2:{
//          color: '#FFF',
//          fontSize: '26px',
//         fontFamily: 'Sans-Serif',
//         fontStyle: 'normal',
//         fontWeight: '400',
//         lineHeight: '39px',
//         textTransform: 'capitalize',
         
//        },
 
//      },
//    });
// export default function SearchBar() {
//   const [term , setTerm] = useState('');

//   const submitHandler = (e:any) => {
//     e.preventDefault();
//     console.log(term);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//     <Box sx={{backgroundColor:'#EFEFEF' ,width:'900px' ,
//      height:'60px' ,gap:'15',borderRadius:'100px', display: 'flex',
//      alignItems: 'center', flexShrink:'0'
//    }} className='srcBar'>
//     <Button onClick={submitHandler}>
//     <SearchIcon sx={{py:'7px' , pl:'7px' , width:'35px' ,height:'35px' , gap:'10px' }}
//        />
//     </Button>
       
         
//         <input type='text' placeholder='Search..'  width={20} height={20} 
//         style={{backgroundColor:'#EFEFEF', border:'none', paddingBottom:'4px'}}
//         onChange={(e)=>setTerm(e.target.value)}/>
          
        
//     </Box>
//     </ThemeProvider>
//   )
// }
