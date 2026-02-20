import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const VideoBanner = ({
  video,
  title,
  subtitle,
  buttonText,
  link ,
}) => {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 400, md: 600 },
        overflow: "hidden",
          borderRadius: 4,
      }}
    >
      {/* Video */}
      <Box
        component="video"
        src={video}
        autoPlay
        muted
        loop
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Center Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
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
            backgroundColor: "#fff",
            color: "#000",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#ddd",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default VideoBanner;
