"use clinet";
import { Box, Typography, Button, Rating, colors } from "@mui/material";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
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
  typography: {
    // fontSize:20,
    myVariant5: {
      color: "black",
      fontSize: "24px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "39px",
      textTransform: "capitalize",
    },
    myVariant6: {
      color: "black",
      fontSize: "18px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "30px",
      textTransform: "capitalize",
    },

    myVariant7: {
      color: "black",
      fontSize: "24px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "24px",
    },
    myVariant8: {
      color: "#000000",
      fontSize: "14px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
    },
    myVariant9: {
      color: " #B2B2B2",
      fontSize: "11px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
    },
    myVariant10: {
      color: "white",
      fontSize: "13px",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "24px",
      textTransform: "capitalize",
    },
  },
});

const Popup: React.FC<PopupProps> = ({ selectBook, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const popupBox = document.querySelector(".popup-box");
      if (popupBox && !popupBox.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

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

  if (!selectBook) return null;
  const handleLinkWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "absolute",
          height: { sm: "60000px", lg: "40500px" },
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "rgba(19, 18, 18, 0.563)",
          color: "rgba(19, 18, 18, 0.563)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "9911",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            width: "670px",
            height: "520px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            bgcolor: "white",
            borderRadius: "15px",
            m: "0px",
            zIndex: "9999",
            display: "flex",
            flexDirection: "row",
          }}
          className="popup-box"
        >
          <Box
            sx={{
              width: { sm: "180px", lg: "360px" },
              height: { sm: "260px", lg: "520px" },
            }}
          >
            <img
              src={selectBook.imageLink}
              alt={selectBook.title}
              width={360}
              height={520}
              style={{
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              className="popup-img"
            />
          </Box>
          <Box
            sx={{
              width: { sm: "155px", lg: "310px" },
              height: { sm: "260px", lg: "520px" },
            }}
            className="popup-detail"
          >
            <Box
              sx={{
                mt: { sm: "15px", md: "15px", lg: "30px" },
                ml: { sm: "20px", md: "200px", lg: "20px" },
              }}
            >
              <Typography
                variant="myVariant5"
                sx={{ fontSize: { sm: "16px", md: "16px", lg: "24px" } }}
              >
                {selectBook.title}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: { sm: "0px", md: "0px", lg: "15px" },
                ml: { sm: "25px", md: "200px", lg: "25px" },
                display: "flex",
                flexDirection: "row",
                gap: { sm: "16px", md: "16px", lg: "45px" },
              }}
            >
              <Box
                sx={{
                  width: { sm: "40px", md: "40px", lg: "58px" },
                  height: { sm: "7px", md: "7px", lg: "12px" },
                }}
              >
                <Typography
                  variant="myVariant6"
                  sx={{ fontSize: { sm: "14px", md: "14px", lg: "18px" } }}
                >
                  Rating
                </Typography>
                <br />
                <Rating
                  name="simple-controlled"
                  sx={{ fontSize: { sm: "8px", md: "8px", lg: "10px" } }}
                  value={selectBook.rating}
                  precision={0.5}
                />
              </Box>
              <Box>
                <Typography
                  variant="myVariant6"
                  sx={{ fontSize: { sm: "14px", md: "14px", lg: "18px" } }}
                >
                  Reviews
                </Typography>
                <br />
                <Typography
                  variant="myVariant9"
                  sx={{
                    ml: { sm: "11px", md: "11px", lg: "19px" },
                    fontSize: { sm: "9px", md: "9px", lg: "11px" },
                  }}
                >
                  ({selectBook.reviews})
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant6"
                  sx={{ fontSize: { sm: "14px", md: "14px", lg: "18px" } }}
                >
                  Price
                </Typography>
                <br />
                <Typography
                  variant="myVariant9"
                  sx={{
                    ml: { sm: "7px", md: "7px", lg: "13px" },
                    fontSize: { sm: "9px", md: "9px", lg: "11px" },
                  }}
                >
                  ${selectBook.price}{" "}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: { sm: "210px", md: "210px", lg: "280px" },
                height: { sm: "109px", md: "109px", lg: "146px" },
                mt: { sm: "0px", md: "0px", lg: "12px" },
                ml: { sm: "20px", md: "200px", lg: "20px" },
                gap: "5px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "12px", md: "12px", lg: "18px" },
                  }}
                >
                  Athure:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "11px", md: "11px", lg: "16px" },
                  }}
                >
                  {selectBook.author}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "12px", md: "12px", lg: "18px" },
                  }}
                >
                  Country:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "11px", md: "11px", lg: "16px" },
                  }}
                >
                  {selectBook.country}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "12px", md: "12px", lg: "18px" },
                  }}
                >
                  Language:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "11px", md: "11px", lg: "16px" },
                  }}
                >
                  {selectBook.language}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "12px", md: "12px", lg: "16px" },
                  }}
                >
                  Year:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "11px", md: "11px", lg: "18px" },
                  }}
                >
                  {selectBook.year}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "12px", md: "12px", lg: "16px" },
                  }}
                >
                  Pages:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "16px", md: "16px", lg: "24px" },
                    fontSize: { sm: "11px", md: "11px", lg: "18px" },
                  }}
                >
                  {selectBook.pages}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ ml: { sm: "20px", md: "200px", lg: "20px" }, mt: "13px" }}
              onClick={handleLinkWrapperClick}
            >
              <Link href={selectBook.link}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#004D6D",
                    width: { sm: "175px", md: "175px", lg: "270px" },
                    height: { sm: "30px", md: "30px", lg: "35px" },
                    color: "white",
                  }}
                  endIcon={<OpenInNewRoundedIcon />}
                >
                  <Typography variant="myVariant10">View Detail</Typography>
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
