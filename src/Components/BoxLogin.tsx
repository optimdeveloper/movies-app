import Button from "@mui/material/Button";
import { Box, Grid, TextField, Typography, Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";
import { history } from "../Utils/constants";

function BoxLogin() {
  const BoxS = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      width: "450px",
    },
    [theme.breakpoints.down("md")]: {
      width: "450px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
    height: "auto",
    background: "rgb(0 0 0 / 70%)",
    paddingTop: "60px",
    paddingBottom: "100px",
    paddingLeft:"60px",
    paddingRight:"60px"
  }));

  const styles = {
    boxInput: {
      borderRadius: 1,
      px: 1,
      my: 2,
      borderWidth: 2,
      borderColor: "transparent",
      background: "#333",
      width:'100%'
    },
    boxButton: {
      marginTop: 2,
      borderColor: "transparent",
      width: "100%",
    },
  };
  return (
    <Box sx={{display:"flex",justifyContent:'center' }}>
      <BoxS>
        <Grid
          alignItems="center"
          container
          direction={"column"}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Inicia Sesión
          </Typography>

          <Grid sx={styles.boxInput} item>
            <TextField
              data-cy="input-e"
              fullWidth
              InputProps={{ disableUnderline: true }}
              label="Email o numero de telefono"
              variant="standard"
              sx={{
                input: {
                  color: "white",
                },
                label: { color: "gray" },
              }}
            />
          </Grid>
          <Grid  sx={styles.boxInput} item>
            <TextField
              data-cy="input-p"
              fullWidth
              InputProps={{ disableUnderline: true }}
              label="Contraseña"
              variant="standard"
              sx={{
                input: {
                  color: "white",
                },
                label: { color: "gray" },
              }}
            />
          </Grid>
          <Grid sx={styles.boxButton} item>
            <Button
            onClick={()=>history.push('/home')}
              variant="contained"
              sx={{
                backgroundColor: "red",
                height: 50,
                width: "100%",
                fontSize: 20,
                fontWeight: 600,
                marginTop: 3,
              }}
            >
              Iniciar Sesión
            </Button>
          </Grid>
          <Grid container >
            <Grid item xs={6} sx={{display:"flex"}}>
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 21, color: "gray" },
                  "&.Mui-checked": {
                    color: "gray",
                  },
                  "&.MuiButtonBase-root": {
                    width: "30px",
                  },
                }}
              />{" "}
              <Typography sx={{ color: "gray", fontSize: "12px",marginTop:'10px' }}>
                Recuerdame
              </Typography>
            </Grid>
            <Grid
            xs={6}
              item
             sx={{display:"flex"}}
              alignSelf="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "12px",
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                    textDecorationThickness: 1.5,
                  },
                }}
              >
                Necesitas ayuda?
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ marginTop: 2 }} container>
            <Typography sx={{ color: "gray", fontSize: "15px" }}>
              ¿Primera vez en Netflix?{" "}
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                    textDecorationThickness: 2,
                  },
                }}
                component="span"
              >
                Suscríbete ahora
              </Typography>
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "12px", marginTop: 2 }}>
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot.{" "}
              <Typography
                component="span"
                sx={{
                  color: "blue",
                  fontSize: "12px",
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                    textDecorationThickness: 1.5,
                  },
                }}
              >
                Más info
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </BoxS>
    </Box>
  );
}
export default BoxLogin;
