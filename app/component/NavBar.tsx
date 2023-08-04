
import SearchBar from "./SearchBar";
import Image from "next/image";
import { Box } from "@mui/material";
export default function NavBar() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        display: "flex",
        width: "100%",
        paddingLeft: ".1rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "7%",
      }}
      className="navBar"
    >
      <div>
        <Image src={"/logo1.GIF"} alt="logo" width={60} height={60} />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Image src={"/dp.GIF"} alt="dp" width={60} height={60} />
      </div>
    </Box>
  );
}
