
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Language from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function FooterLogin() {
    const styles={
        label:{
            color: "gray",
            fontSize: "12px",
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
              textDecorationThickness: 1.5,
            },
        }
    }
    const BoxS = styled(Box)(({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            paddingLeft: 100,
            paddingRight: 100,
          },
          [theme.breakpoints.down('md')]: {
            paddingLeft: 40,
            paddingRight: 40,
          },
          [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
         
      }));
  return (
      <BoxS
        sx={{
          width: "100%",
          height: 250,
          marginTop:5,
          p:5,
          background:'rgba(0,0,0,.75)'
        }}
      >
        <Grid  container direction="column" >
          <Grid item xs={12} >
          <Typography
                sx={{
                  color: "gray",
                  fontSize: "16px",
                  marginBottom:4,
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                    textDecorationThickness: 1.5,
                  },
                }}
              >
                ¿Preguntas? Llama al 1 (408) 469-4467 (USA)
              </Typography>
           
          </Grid>
          <Grid container>
          <Grid item xs={3} >
          <Typography
                sx={styles.label}
              >
               Preguntas frecuentes
              </Typography>
            </Grid>
            <Grid item xs={3} >
          <Typography
               sx={styles.label}
              >
              Centro de ayuda
              </Typography>
            </Grid>
            <Grid item xs={3} >
          <Typography
              sx={styles.label}
              >
             Términos de uso
              </Typography>
            </Grid>
            <Grid item xs={3} >
          <Typography
             sx={styles.label}
              >
              Privacidad
              </Typography>
            </Grid>
            </Grid>
            <Grid  sx={{marginTop:2,marginBottom:4}} container>
          <Grid item xs={3} >
          <Typography
             sx={styles.label}
              >
              Preferencias de cookies
              </Typography>
            </Grid>
            <Grid item xs={3} >
          <Typography
             sx={styles.label}
              >
               Información corporativa
              </Typography>
            </Grid>
           
            </Grid>
          <Grid item >
            <Button
             startIcon={<Language />}
             endIcon={<ArrowDropDownIcon />}
             sx={{ 
             marginRight:5,backgroundColor:'transparent',border:'1px solid gray'}}
              variant="contained"
            >
              ESPAÑOL
            </Button>
            </Grid>
         
        </Grid>
      </BoxS>
 
  );
}
export default FooterLogin;
