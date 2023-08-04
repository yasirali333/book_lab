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
      fontSize: "1.8rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "1.2rem",
      textTransform: "capitalize",
    },
    myVariant6: {
      color: "black",
      fontSize: "1.2rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "1.9rem",
      textTransform: "capitalize",
    },

    myVariant7: {
      color: "black",
      fontSize: "1.8rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "1.8rem",
    },
    myVariant8: {
      color: "#000000",
      fontSize: ".9rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "1.8rem",
    },
    myVariant9: {
      color: " #B2B2B2",
      fontSize: ".7rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "1.8rem",
    },
    myVariant10: {
      color: "white",
      fontSize: ".8rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "1.8rem",
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
          height: { sm: "3750rem", lg: "2531rem" },
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
            width: "41.86rem",
            height: "32.5rem",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            bgcolor: "white",
            borderRadius: ".93rem",
            m: "0re",
            zIndex: "9999",
            display: "flex",
            flexDirection: "row",
          }}
          className="popup-box"
        >
          <Box
            sx={{
              width: { sm: "11.25rem", lg: "22.25rem" },
              height: { sm: "16.25rem", lg: "32.5rem" },
            }}
          >
            <img
              src={selectBook.imageLink}
              alt={selectBook.title}
              width={360}
              height={520}
              style={{
                borderTopLeftRadius: ".93rem",
                borderBottomLeftRadius: ".93rem",
              }}
              className="popup-img"
            />
          </Box>
          <Box
            sx={{
              width: { sm: "8.68rem", lg: "19.37rem" },
              height: { sm: "16.25rem", lg: "32.5rem" },
            }}
            className="popup-detail"
          >
            <Box
              sx={{
                mt: { sm: ".93rem", md: ".93rem", lg: "1.9rem" },
                ml: { sm: "0rem", md: "6.5rem", lg: "1.25rem" },
              }}
              className="only-popup"
            >
              <Typography
                variant="myVariant5"
                sx={{ fontSize: { sm: "1rem", md: "1.3rem", lg: "1.8rem" } }}
              >
                {selectBook.title}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: { sm: "0rem", md: "0rem", lg: ".93rem" },
                ml: { sm: "1.56rem", md: "6.5rem", lg: "1.56rem" },
                display: "flex",
                flexDirection: "row",
                gap: { sm: "1rem", md: "1rem", lg: "2.8rem" },
              }}className="only-popup"
            >
              <Box
                sx={{
                  width: { sm: "2.5rem", md: "2.5rem", lg: "3.62rem" },
                  height: { sm: ".6rem", md: ".6rem", lg: ".75rem" },
                }}
              >
                <Typography
                  variant="myVariant6"
                  sx={{ fontSize: { sm: ".9rem", md: ".9rem", lg: "1.2rem" } }}
                >
                  Rating
                </Typography>
                <br />
                <Rating
                  name="simple-controlled"
                  sx={{ fontSize: { sm: ".5rem", md: ".5rem", lg: ".65rem" } }}
                  value={selectBook.rating}
                  precision={0.5}
                />
              </Box>
              <Box>
                <Typography
                  variant="myVariant6"
                  sx={{ fontSize: { sm: ".9rem", md: ".9rem", lg: "1.2rem" } }}
                >
                  Reviews
                </Typography>
                <br />
                <Typography
                  variant="myVariant9"
                  sx={{
                    ml: { sm: ".7rem", md: ".7rem", lg: "1.18rem" },
                    fontSize: { sm: ".56rem", md: ".56rem", lg: ".7rem" },
                  }}
                >
                  ({selectBook.reviews})
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant6"
                  sx={{ fontSize: { sm: ".9rem", md: ".9rem", lg: "1.2rem" } }}
                >
                  Price
                </Typography>
                <br />
                <Typography
                  variant="myVariant9"
                  sx={{
                    ml: { sm: ".43rem", md: ".43rem", lg: ".9rem" },
                    fontSize: { sm: ".56rem", md: ".56rem", lg: ".7rem" },
                  }}
                >
                  ${selectBook.price}{" "}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: { sm: "13.12rem", md: "13.12rem", lg: "17.5rem" },
                height: { sm: "6.8rem", md: "6.8rem", lg: "9.12rem" },
                mt: { sm: "0rem", md: "0rem", lg: ".75rem" },
                ml: { sm: "1.25rem", md: "6.5rem", lg: "1.25rem" },
                gap: ".31rem",
                display: "flex",
                flexDirection: "column",
              }}className="only-popup"
            >
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".75rem", md: ".75rem", lg: "1.2rem" },
                  }}
                >
                  Athure:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".7rem", md: ".7rem", lg: "1rem" },
                  }}
                >
                  {selectBook.author}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".75rem", md: ".75rem", lg: "1.2rem" },
                  }}
                >
                  Country:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".7rem", md: ".7rem", lg: "1rem" },
                  }}
                >
                  {selectBook.country}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".75rem", md: ".75rem", lg: "1.2rem" },
                  }}
                >
                  Language:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".7rem", md: ".7rem", lg: "1rem" },
                  }}
                >
                  {selectBook.language}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".75rem", md: ".75rem", lg: "1rem" },
                  }}
                >
                  Year:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".7rem", md: ".7rem", lg: "1.2rem" },
                  }}
                >
                  {selectBook.year}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="myVariant7"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".75rem", md: ".75rem", lg: "1rem" },
                  }}
                >
                  Pages:
                </Typography>
                <Typography
                  variant="myVariant8"
                  sx={{
                    lineHeight: { sm: "1rem", md: "1rem", lg: "1.8rem" },
                    fontSize: { sm: ".7rem", md: ".7rem", lg: "1.2rem" },
                  }}
                >
                  {selectBook.pages}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ ml: { sm: "1.8rem", md: "6.5rem", lg: "1.4rem" }, mt: "2rem" }}
              onClick={handleLinkWrapperClick} className="only-popup"
            >
              <Link href={selectBook.link}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#004D6D",
                    width: { sm: "10.9rem", md: "10.9rem", lg: "16.8rem" },
                    height: { sm: "1.9rem", md: "1.9rem", lg: "2.3rem" },
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
