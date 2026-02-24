import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PosterBanner = ({
  image,
  title,
  subtitle,
  buttonText,
  position = "left",
  link = "/",
  radius = 12,
}) => {
  const navigate = useNavigate();
  const justify =
    position === "right"
      ? "flex-end"
      : position === "center"
      ? "center"
      : "flex-start";

  const textAlign =
    position === "right"
      ? "right"
      : position === "center"
      ? "center"
      : "left";


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
        display: "flex",
        display: "flex",
        alignItems: { xs: "flex-end", md: "center" },
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
        <Box sx={{
    maxWidth: { xs: 260, sm: 320, md: 380 },
    color: "#fff",
  }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 1,
              fontSize: {
                xs: "22px",
                sm: "32px",
                md: "48px",
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
             mb: 1,
              fontSize: {
                xs: "12px",
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
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "12px", sm: "14px" },
              borderRadius: "25px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              borderRadius: "30px",
              mb: 2.5,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#333",
                transform: "scale(1.05)",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
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