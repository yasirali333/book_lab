'use client'
import SearchBar from "./SearchBar"
import Image from "next/image"
import { Box } from "@mui/material"
export default function NavBar() {
  return (
    <Box sx={{backgroundColor:'#FFF' , display:'flex' , width:'1200px' ,
      paddingLeft:'65px',justifyContent:'center' ,
    alignItems:'center' , gap:'90px'}} className='navBar' >
      <div>
        <Image src={'/logo1.gif'} alt="logo" width={60} height={60}/>
      </div>
      <div><SearchBar/></div>
      <div><Image src={'/dp.gif'} alt="dp" width={60} height={60}/></div>
    </Box>
  )
}
