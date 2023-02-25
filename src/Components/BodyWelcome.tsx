import Button from "@mui/material/Button";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { history } from "../Utils/constants";

function BodyWelcome() {
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
  const GridS = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
     width:'650px'
    },
    [theme.breakpoints.down("md")]: {
    
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column'
    },

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
    containerInput: {
      backgroundColor: "white",
      height: "50px",
      padding: 4,
    },
    boxInput: {
      borderRadius: 1,
      px: 1,
      borderWidth: 2,
      bgcolor: "white",
      width: "100%",
    },
  };
  return (
    <Box sx={styles.box}>
      <Grid
        sx={{ width: "auto", mx: 10 }}
        alignItems="center"
        container
        direction={"column"}
      >
        <TypographyS>Películas y series ilimitadas y mucho más</TypographyS>
        <Typography variant="h5" sx={{ color: "white", marginTop: 1 }}>
          Disfruta donde quieras. Cancela cuando quieras.
        </Typography>
        <Typography variant="h6" sx={{ color: "white", marginTop: 2 }}>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </Typography>

        <GridS
          sx={{ marginTop: 2 }}
          alignItems="center"
          container
        >
          <Grid sx={styles.boxInput} item xs={7}>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              label="Email"
              variant="standard"
            />
          </Grid>
          <Grid item justifyContent="flex-start" xs={5}>
            <Button
               onClick={()=>history.push('/home')}
              endIcon={<ArrowForwardIosIcon />}
              variant="contained"
              sx={{
                backgroundColor: "red",
                height: 50,
                width: "100%",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Comenzar
            </Button>
          </Grid>
        </GridS>
      </Grid>
    </Box>
  );
}
export default BodyWelcome;
