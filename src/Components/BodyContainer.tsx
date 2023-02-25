
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function BodySecondContainer() {
  const TypographyS = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    color: "white",
    fontWeight: 600,
  }));

  const styles = {
    box: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "auto",
      width: "100%",
    },
    label: {
    fontSize:"21px",
    color:'white'
    },
 
  };
  return (
    <Box sx={styles.box}>
      <Grid
        sx={{ mx: 10 }}
        container
      >
          <Grid  item xs={6}>
          <TypographyS>Disfruta en tu TV</TypographyS>
          <Typography sx={styles.label}>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</Typography>
       
          </Grid>
      </Grid>
    </Box>
  );
}
export default BodySecondContainer;
