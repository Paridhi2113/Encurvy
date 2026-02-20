import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, Divider, useMediaQuery,
  useTheme, } from "@mui/material";
import FilterSidebar from "./FilterSidebar";

import { Button, Menu } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import j1 from "../../assets/j1.png";
import j2 from "../../assets/j2.png";
import j3 from "../../assets/j3.png";
import j4 from "../../assets/j4.png";
import j5 from "../../assets/j5.png";
import j6 from "../../assets/j6.png";
import j7 from "../../assets/j7.png";

import j9 from "../../assets/j9.png";
import j10 from "../../assets/j10.png";

const products = Array.from({ length: 10 });

const CategoryJeans = () => {
   const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const productImages = [j1, j2, j3, j4, j5, j6, j7, j9, j10];
  const products = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    src: productImages[index % productImages.length], // loops through images
    title: `Product ${index + 1}`,
  }));

  return (
     <Box sx={{ pt: 8, background: "#fff" }}>
       {/* ================= FIXED SIDEBAR (DESKTOP ONLY) ================= */}
       {!isMobile && (
         <Box
           sx={{
             position: "fixed",
             top: 110, // navbar height
             left: 0,
             width: 260,
             background: "#fff",
             borderRight: "1px solid #eee",
           }}
         >
           <FilterSidebar />
         </Box>
       )}
 
       {/* ================= RIGHT CONTENT ================= */}
       <Box
         sx={{
           ml: { md: "300px" }, // push content right
           px: { xs: 2, md: 3 },
           py: 4,
         }}
       >
         {/* ======= KEEP YOUR HEADING + SORT SECTION EXACTLY SAME HERE ======= */}
         <Box
           sx={{
             display: "flex",
             justifyContent: {
               xs: "flex-start", // mobile → left side
               md: "space-between", // desktop → space between
             },
             alignItems: "center",
             mb: 2,
             padding: 1,
             flexDirection: {
               xs: "column", // mobile → stack
               md: "row",
             },
           }}
         >
           <Typography
             variant="h5"
             sx={{
               display: { xs: "none", md: "block" },
               fontSize: "28px",
               fontWeight: 600,
             }}
           >
             Timeless Fit. Endless Style
           </Typography>
 
           <Button
             onClick={handleClick}
             disableRipple
             disableElevation
             disableFocusRipple
             sx={{
               width: { xs: 120, md: 210 },
               textTransform: "none",
               color: "#000",
               border: "1px solid #ddd",
               backgroundColor: "#fff",
               padding: "8px 14px",
 
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               alignSelf: { xs: "flex-end", md: "auto" }, // move right on mobile
 
               "&:hover": {
                 backgroundColor: "#f5f5f5",
               },
               "&:focus": {
                 outline: "none",
                 boxShadow: "none",
               },
             }}
           >
             <Box sx={{ fontSize: 14 }}>Sort</Box>
             <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
           </Button>
 
           {/* DARK MENU */}
           <Menu
             anchorEl={anchorEl}
             open={open}
             onClose={handleClose}
             transitionDuration={300}
             PaperProps={{
               elevation: 0,
               sx: {
                 backgroundColor: "#0f1a2b",
                 color: "#fff",
                 width: 230,
                 mt: 1.5,
                 borderRadius: 2,
                 boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
                 transform: "translateY(10px)",
                 transition: "all 0.3s ease",
               },
             }}
           >
             {[
               "Popular",
               "NEW",
               "Price: High to low",
               "Price: low to high",
               "Avg. Customer Review",
             ].map((item, index) => (
               <MenuItem
                 key={index}
                 onClick={handleClose}
                 sx={{
                   fontSize: 14,
                   py: 1.2,
                   "&:hover": {
                     backgroundColor: "#1c2a40", // simple dark hover
                   },
                 }}
               >
                 {item}
               </MenuItem>
             ))}
           </Menu>
         </Box>
 
         {/* Do NOT change anything inside it */}
 
         {/* PRODUCT GRID */}
         <Box
           sx={{
             display: "grid",
             gridTemplateColumns: {
               xs: "repeat(2, 1fr)",
               sm: "repeat(3, 1fr)",
               md: "repeat(4, 1fr)",
               lg: "repeat(5, 1fr)",
             },
             gap: "10px",
             columnGap: "10px",
             rowGap: "20px",
           }}
         >
           {products.map((product) => (
             <Box key={product.id}>
               <Box
                 component="img"
                 src={product.src}
                 alt={product.title}
                 sx={{
                   width: "100%",
                   height: 260,
                   objectFit: "cover",
                 }}
               />
               <Typography sx={{ mt: 1.5 }} fontSize={14} fontWeight={500}>
                 {product.title}
               </Typography>
             </Box>
           ))}
         </Box>
       </Box>
     </Box>
   );
};

export default CategoryJeans;
