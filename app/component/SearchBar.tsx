"use client";

import React, { useState} from "react";
import {
  handlefilteredBooks,
  handleRemovefilteredBooks,
  Book,
} from "@/redux/features/counterSlice";
import { useAppDispatch } from "@/redux/hooks";
import SearchIcon from "@mui/icons-material/Search";
import { useGetUsersQuery } from "@/redux/services/userApi";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

const theme = createTheme({
  typography: {
    myVariant3: {
      color: "#000000",
      fontSize: "18px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "27px",
    },
    myVariant2: {
      color: "#FFF",
      fontSize: "26px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "39px",
      textTransform: "capitalize",
    },
  },
});
const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const { data } = useGetUsersQuery("/books");
  console.log("search", data);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("data is not in an array form");

    const searchedItem: Book[] = data.data.filter((book: Book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    if (searchedItem.length > 0) {
      console.log("searhed");
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
      <Box
        sx={{
          backgroundColor: "#EFEFEF",
          width: "900px",
          height: "60px",
          gap: "15",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          flexShrink: "0",
        }}
        className="srcBar"
      >
        <Button
          onClick={handleClick}
          sx={{ borderRadius: "100%", color: "black" }}
        >
          <SearchIcon
            sx={{
              py: "7px",
              pl: "7px",
              width: "35px",
              height: "35px",
              gap: "10px",
            }}
          />
        </Button>

        <input
          type="text"
          placeholder="Search.."
          value={search}
          width={20}
          height={20}
          style={{
            backgroundColor: "#EFEFEF",
            border: "none",
            paddingBottom: "4px",
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 0 ? <button onClick={clearSearch}>X</button> : ""}
      </Box>
    </ThemeProvider>
  );
};

export default SearchBar;
