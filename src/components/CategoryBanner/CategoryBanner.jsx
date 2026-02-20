import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PosterBanner = ({
  image,
  title,
  subtitle,
  buttonText,
  position = "left",
  link = "/",
  radius = 4,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
       height: { xs: 350, md: 720 },
      
        borderRadius: radius,
        overflow: "hidden",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent:
            position === "right"
              ? "flex-end"
              : position === "center"
              ? "center"
              : "flex-start",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: 500, color: "#fff" }}>
          <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
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
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#333",
                transform: "scale(1.05)",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
              },
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PosterBanner;
