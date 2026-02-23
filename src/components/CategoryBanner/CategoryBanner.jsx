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
        aspectRatio: {
          xs: "4 / 5",
          sm: "16 / 10",
          md: "16 / 9",
        },
        minHeight: { xs: 320, md: 500 },
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
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: 500, color: "#fff" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: {
                xs: "28px",
                sm: "36px",
                md: "48px",
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },
            }}
          >
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