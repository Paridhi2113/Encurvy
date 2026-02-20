import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import image22 from "../../assets/image22.png"
import image19 from "../../assets/image19.png"
import image4 from "../../assets/image4.png"
import slide from "../../assets/slide.png"
import Group15 from "../../assets/Group15.png"
import image11 from "../../assets/image11.png"
import { useNavigate } from "react-router-dom";



const categories = [
  {
    title: "New Drops",
    subtitle: "Weekly fresh arrivals",
    image: image22,
    link: "/",
  },
  {
    title: "BestSellers",
    subtitle: "What everyone is wearing",
    image: image19,
     link: "/" ,
  },
  {
    title: "Jeans",
    subtitle: "Slim,Straight,Relaxed",
    image: image4,
    link: "/jeans",
  },
  {
    title: "Shirts",
    subtitle: "Formals,Casual,Linens",
    image: slide,
     link: "/shirts",
  },
  {
    title: "Trousers",
    subtitle: "Chinos,Cargos,Joggers",
    image: Group15,
    link: "/trousers",
  },
  {
    title: "T-Shirts",
    subtitle: "Comfortable,Oversized,Minimal",
    image: image11,
    link:  "/tshirts"  ,
  },
];

export default function CategoryDrawer({ open, onClose }) {
   const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link); // navigate to category
    onClose(); // close drawer
  };
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 340,
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={2}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          CATEGORIES
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Shop All */}
      <Box px={3} pb={1}>
        <Typography
          sx={{
            color: "red",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Shop All
        </Typography>
      </Box>

      {/* Category List */}
      <List sx={{ px: 2 }}>
        {categories.map((item, index) => (
          
          <ListItemButton
            key={index}
            sx={{
              borderRadius: 2,
              mb: 1,
              alignItems: "flex-start",
              backgroundColor: "#fff",
            }}
             onClick={() => handleClick(item.link)}
          >
            <ListItemAvatar>
              <Avatar
                variant="square"
                src={item.image}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography fontWeight={600}>{item.title}</Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              }
              sx={{ ml: 1 }}
            />

            <ChevronRightIcon sx={{ color: "#999" }} />
          </ListItemButton>
        ))}
      </List>

     { /* Footer Links 
      <Box px={3} mt={1}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Gift Cards
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Sustainability
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Our Story
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Free Shipping Section 
      <Box display="flex" alignItems="center" px={3} pb={3}>
        <LocalShippingIcon sx={{ mr: 2 }} />
        <Box>
          <Typography fontWeight={600}>Free Shipping</Typography>
          <Typography variant="body2" color="text.secondary">
            On all orders above $200
          </Typography>
        </Box>
      </Box>*/}
    </Drawer>
  );
}
