import React, { useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";

const filterData = {
  "Delivery time": ["Today", "Next 3 Days", "Next 7 Days"],
  Category: ["Jackets", "Shirts", "Trousers"],
  Size: ["S", "M", "L", "XL"],
  Color: ["Black", "White", "Blue", "Red"],
  Pattern: ["Plain", "Textured", "Geometric", "Colourblocked", "Printed", "Abstract", "Embroidered", "Self-design"],
  Fit: ["Regular Fit", "Relaxed Fit", "Oversized Fit", "Slim Fit"],
  Material: ["Polyester", "Cotton", "Leather", "Denim"]
};

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Box
      sx={{
        width: 260,
        height: "calc(100vh - 110px)",
        position: "sticky",
        top: 80,
        overflowY: "auto",
        px: 2,
        borderRight: "1px solid #ddd",
        background: "#ffffff",
      }}
    >
      <Typography fontWeight={600} mb={2} sx={{ textAlign: "left" }}>
        Filters
      </Typography>

      {Object.keys(filterData).map((section, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          {/* Header with plus/minus */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => toggleSection(section)}
          >
            <Typography fontSize={15}>{section}</Typography>
            <Typography fontSize={18}>
              {openSections[section] ? "-" : "+"}
            </Typography>
          </Box>

          <Divider sx={{ mt: 1 }} />

          {/* Collapsible content */}
          {openSections[section] && (
            <Box sx={{ mt: 1, pl: 1 }}>
              {filterData[section].map((item, idx) => (
                <Button
                  key={idx}
                  variant="outlined"
                  size="small"
                  color="#000"
                  sx={{
                    textTransform: "none",
                    mb: 1,
                    mr: 1,
                    fontSize: 13,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default FilterSidebar;