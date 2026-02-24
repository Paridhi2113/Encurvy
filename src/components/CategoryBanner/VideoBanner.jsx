import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const VideoBanner = ({
  video,
  title,
  subtitle,
  buttonText,
  link,
  position = "left",
  radius = 12,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",   // ✅ important
        width: "100%",
        aspectRatio: {
          xs: "4 / 5",
          sm: "16 / 10",
          md: "16 / 9",
        },
        minHeight: { xs: 320, md: 500 },
        borderRadius: radius,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 🔹 Background Video */}
      <Box
        component="video"
        src={video}
        autoPlay
        muted
        loop
        sx={{
          position: "absolute",   // ✅ important
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

     <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
        }}
      />

      {/* 🔹 Content */}
      <Box
        sx={{
          position: "relative",   // ✅ important
          zIndex: 2,
          width: "100%",
          display: "flex",
         justifyContent: "center",
alignItems: "center",
textAlign: "center",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: 500, color: "#fff" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            
            sx={{ mb: 1,
               fontSize: { xs: "24px", sm: "34px", md: "50px" },
             }}
          >
            {title}
          </Typography>

          <Typography variant="h6" sx={{ mb: 1,
             fontSize: { xs: "14px", sm: "18px" },
             opacity: 0.9,
           }}>
            {subtitle}
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate(link)}
            sx={{
              backgroundColor: "#000",
                px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.5 },
             textTransform: "uppercase",
            letterSpacing: "1px",
              borderRadius: "25px",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoBanner;
