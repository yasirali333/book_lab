"use client";
import NavBar from "./component/NavBar";
import {Box} from "@mui/material";
import Image from "next/image";
import {  createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import List from "./component/List";

const theme = createTheme({
  typography: {
    myVariant1: {
      color: "#FFF",
      fontSize: "2.5rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "{sx:7 , sm:12 , md:21 , lg:33 , xl:45}",
      textTransform: "capitalize",
    },
    myVariant2: {
      color: "#FFF",
      fontSize: "2.5rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "300",
      lineHeight: "{sx:7 , sm:13 , md:22 , lg:30 , xl:39}",
      textTransform: "capitalize",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ m: "0px", p: "0px" }}>
        <div>
          <NavBar />
        </div>
        <Box sx={{ display: "flex", flexDirection: 'row', pt: "8px" , width:'100%' , height:'28.1rem' }} className='conatainer'>
          <Box
            sx={{ backgroundColor: "#004D6D", width: "50%", height: "28.1rem" }}
            className="text-box"
          >
           
            <Box
              sx={{
                width: "70%",
                height: "28.1",
                flexShrink: "0px",
                marginLeft: "8%",
                marginTop: "7%",
              }}
            
            >
              <Typography variant="myVariant1"  className="text1">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </Box>

            <Box
              sx={{
                width: "65%",
                height: "30%",
                flexShrink: "0",
                marginLeft: "9%",
                marginTop: "7%",
                
              }}
              
            >
              <Typography variant="myVariant2"  className="text1">
                Lorem ipsum dolor sit amet consectetur. Viverr Scelerisqu.
              </Typography>
            </Box>
       
          </Box>
          <Box >
            <Image
              className="img1"
              src={"/img1.png"}
              alt="img1"
              width={944}
              height={450}
            />
          </Box>
        </Box>

        <List />
      </Box>
    </ThemeProvider>
  );
}
