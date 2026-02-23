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

      {/* 🔹 Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
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
            sx={{ mb: 2 }}
          >
            {title}
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            {subtitle}
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate(link)}
            sx={{
              backgroundColor: "#000",
              borderRadius: "30px",
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
