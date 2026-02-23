import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p5 from "../../assets/p3.jpg";

const HeroBanner = () => {
  const images = [p1, p2, p5];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ======================
  // 📱 MOBILE VIEW (Swiper)
  // ======================
  if (isMobile) {
    return (
      <Box sx={{ width: "100%" }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          style={{ width: "100%" }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={img}
                alt={`banner-${index}`}
                sx={{
                  width: "100%",
                  height: "100vh", // Full screen hero
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  // ======================
  // 💻 DESKTOP VIEW (3 Images)
  // ======================
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh", // responsive height
      }}
    >
      {images.map((img, index) => (
        <Box
          key={index}
          component="img"
          src={img}
          alt={`banner-${index}`}
          sx={{
            flex: 1,
            width: "33.33%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
  );
};

export default HeroBanner;