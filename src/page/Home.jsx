import React from "react";
import { Box, Container } from "@mui/material";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";
import PosterBanner from "../components/CategoryBanner/CategoryBanner";
import VideoBanner from "../components/CategoryBanner/VideoBanner";
import bn1 from "../assets/bn1.png";
import bn2 from "../assets/bn2.png";
import bn3 from "../assets/bn3.png";
import video from "../assets/video.mp4";

const Home = () => {
  return (
    <>
      {/* ✅ FULL WIDTH HERO */}
      <HeroBanner />

      {/* ✅ FULL WIDTH CATEGORIES (if you want full width) */}
      <FeaturedCategories />

      {/* ✅ CONTENT INSIDE CONTAINER */}
   <Container
  maxWidth={false}
  sx={{
    maxWidth: "2500px",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 4, lg: 4, xl: 6 },
    mt: 6,
    mb: 6,
  }}
>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <PosterBanner
            image={bn1}
            title="Casual Shirts"
            subtitle="Effortless everyday style."
            buttonText="Shop Now"
            radius={8}
            link="/shirts"
          />

          <PosterBanner
            image={bn3}
            title="Denim Collection"
            subtitle="Find your perfect fit."
            buttonText="Explore Now"
            position="right"
            radius={5}
            link="/jeans"
          />

          <PosterBanner
            image={bn2}
            title="New T-Shirt Collection"
            subtitle="Premium quality."
            buttonText="Shop Now"
            radius={5}
            link="/tshirts"
          />

          <VideoBanner
            video={video}
            title="Modern Fit Trousers"
            subtitle="Comfort. Style. Perfect Fit."
            buttonText="Shop Now"
            radius={5}
            link="/trousers"
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;