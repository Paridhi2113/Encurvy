import React from "react";
import { Box, Typography, Container } from "@mui/material";
import im1 from "../../assets/im1.png";
import im2 from "../../assets/im2.png";
import img3 from "../../assets/img3.png";
import im4 from "../../assets/im4.png";
import im5 from "../../assets/im5.png";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    //title: "DINNER",
    //highlight: "Date",
    img: im1,
    link: "/shirts",

  },
  {
   // title: "WKND",
   // highlight: "GETAWAY",
    img: im2,
    link: "/jeans",
  },
  {
    //title: "SINGLES",
    //highlight: "Club",
    img: img3,
     link: "/tshirts",
  },
  {
    //title: "BRUNCH",
    //highlight: "Date",
    img: im4,
    link: "/trousers",
  },
  {
    //title: "MOVIE",
    //highlight: "Date",
    img: im5,
    link: "/shirts",
  },
];

const FeaturedCategories = () => {
    const navigate = useNavigate();
  return (
<Container
  maxWidth={false}
  sx={{
    maxWidth: "2500px",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 4, lg: 4, xl: 6 },
  }}
>

      <Typography
        variant="h6"
        sx={{ fontWeight: 600, mb: 3, textAlign: "center" ,mt:3}}
      >
        Featured Categories
      </Typography>

      <Box
  sx={{
    display: "flex",
    gap: {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 2,
      xl: 3, // slightly more gap on 4K
    },
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }}
>
        {categories.map((item, index) => (
       <Box
  key={index}
  onClick={() => navigate(item.link)}
  sx={{
    flex: "0 0 auto",
   width: {
  xs: "70%",
  sm: "45%",
  md: "30%",
  lg: "calc((100% - 64px) / 5)",   // Perfect 5 cards at 1440px+
  xl: "calc((100% - 80px) / 5)",   // Perfect spacing for 4K
},
    aspectRatio: "2 / 3",   // keeps same design ratio instead of fixed height
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  }}
>
            {/* Dark Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                borderRadius: "12px",
              }}
            />

            {/* Text */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography variant="h6" sx={{ lineHeight: 1 }}>
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "red", fontWeight: 700 }}
              >
                {item.highlight}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default FeaturedCategories;
