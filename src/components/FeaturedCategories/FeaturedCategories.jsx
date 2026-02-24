import React from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import im1 from "../../assets/im1.png";
import im2 from "../../assets/im2.png";
import img3 from "../../assets/img3.png";
import im4 from "../../assets/im4.png";
import im5 from "../../assets/im5.png";

const categories = [
  { img: im1, link: "/shirts" },
  { img: im2, link: "/jeans" },
  { img: img3, link: "/tshirts" },
  { img: im4, link: "/trousers" },
  { img: im5, link: "/shirts" },
];

const FeaturedCategories = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        sx={{ fontWeight: 600, mb: 3, textAlign: "center", mt: 3 }}
      >
        Featured Categories
      </Typography>

      {/* 🔥 MOBILE AUTO CONTINUOUS SCROLL */}
      {isMobile ? (
      <Swiper
  modules={[Autoplay]}
  slidesPerView={1.4}
  spaceBetween={16}
  loop={true}
  freeMode={true}
  speed={5000} 
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  allowTouchMove={false}
>
  {[...categories, ...categories].map((item, index) => (
    <SwiperSlide key={index}>
      <Box
        onClick={() => navigate(item.link)}
        sx={{
          aspectRatio: "2 / 3",
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
          cursor: "pointer",
        }}
      />
    </SwiperSlide>
  ))}
</Swiper>
      ) : (
        
        <Box
          sx={{
            display: "flex",
            gap: {
              xs: 2,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 3,
            },
          }}
        >
          {categories.map((item, index) => (
            <Box
              key={index}
              onClick={() => navigate(item.link)}
              sx={{
                flex: 1,
                aspectRatio: "2 / 3",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default FeaturedCategories;