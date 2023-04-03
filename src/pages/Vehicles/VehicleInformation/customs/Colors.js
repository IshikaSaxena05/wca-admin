import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));
const Colors = () => {
  return (
    <Grid columnGap={"10px"} container>
      <Grid
        flex={"1 1 auto"}
        sx={{
          borderRight: "2px solid #ECECEC",
          mt: "10px",
        }}
        item>
        <Item
          sx={{
            p: "0px 20px 0px 0px",
            fontSize: "14px",
            color: "#000",
            boxShadow: "none",
            textAlign: "left",
            borderRadius: "0px",
          }}>
          Colors
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "75%", mt: "10px" }}>
            <Box sx={{ p: "10px", bgcolor: "whitesmoke", borderRadius: "5px", border: "1px solid #ECECEC" }}></Box>
            <Typography>Exterior</Typography>
            <Box sx={{ p: "10px", bgcolor: "black", borderRadius: "5px" }}></Box>
            <Typography>Black</Typography>
          </Box>
        </Item>
      </Grid>
      <Grid
        flex={"1 1 auto"}
        sx={{
          pt: "15px",
          ml: "30px",
        }}
        item>
        <Item
          sx={{
            p: "0px",
            fontSize: "14px",
            color: "#000",
            boxShadow: "none",
            textAlign: "left",
          }}>
          Keys
          <Typography sx={{ display: "flex", justifyContent: "space-between", width: "70%", mt: "10px" }}>
            {[0, 1, 2, "+3"].map((item) => (
              <Typography sx={{ fontSize: "16px", color: "#000", mb: "20px", border: "2px solid #ECECEC", p: "0px 10px 0px 10px" }}>
                {item}
              </Typography>
            ))}
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Colors;