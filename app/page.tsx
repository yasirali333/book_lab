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
      fontSize: "20px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "{sx:7 , sm:12 , md:21 , lg:33 , xl:45}",
      textTransform: "capitalize",
    },
    myVariant2: {
      color: "#FFF",
      fontSize: "20px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "400",
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
        <Box sx={{ display: "flex", flexDirection: "row", pt: "8px" }}>
          <Box
            sx={{ backgroundColor: "#004D6D", width: "692px", height: "360px" }}
            className="text-box"
          >
            <Box
              sx={{
                width: "380px",
                height: "92px",
                flexShrink: "0px",
                pt: "90px",
                pr: "50px",
                pl: "80px",
              }}
              className="text1"
            >
              <Typography variant="myVariant1" className="font">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </Box>

            <Box
              sx={{
                width: "217px",
                height: "86px",
                flexShrink: "0",
                pb: "40px",
                pr: "50px",
                pl: "80px",
                pt: "15px",
              }}
              className="text2"
            >
              <Typography variant="myVariant2" className="font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Image
              className="img1"
              src={"/img1.png"}
              alt="img1"
              width={690}
              height={360}

            />
          </Box>
        </Box>

        <List />
      </Box>
    </ThemeProvider>
  );
}
