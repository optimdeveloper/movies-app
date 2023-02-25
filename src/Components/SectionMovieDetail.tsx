import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Movie } from "../Redux/types";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
type Props = {
  movie: Movie;
};
function SectionMovieDetail({ movie }: Props) {
  const BoxS = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      width: "450px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
    height: "auto",
    paddingTop: "60px",
    paddingBottom: "100px",
    paddingLeft: "60px",
    paddingRight: "60px",
  }));

  const styles = {
    boxInput: {
      borderRadius: 1,
      px: 1,
      my: 2,
      borderWidth: 2,
      borderColor: "transparent",
      background: "#333",
      width: "100%",
    },
    btn: {
      height: 50,
      fontSize: 13,
      fontWeight: 600,
      marginTop: 3,
      textTransform: "capitalize",
    },
  };
  return (
    <BoxS>
      <Grid alignItems="center" container direction={"column"}>
       {movie.title ? <Typography variant="h4" sx={{ color: "white" }}>
          {movie.title}
        </Typography> : <Typography variant="h4" sx={{ color: "white" }}>
          {movie.name}
        </Typography>}
        <Typography sx={{ color: "white", fontSize: 15, marginTop: 2 }}>
          {movie.overview}
        </Typography>

        <Grid container>
          <Grid item xs={6} display="flex" justifyContent="center">
            <Button
              startIcon={<PlayArrowIcon />}
              variant="contained"
              sx={[styles.btn, { background: "white", color: "black" }]}
            >
              Play
            </Button>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="center">
            <Button
              startIcon={<HelpOutlineIcon />}
              variant="contained"
              sx={[
                styles.btn,
                { opacity: 0.7, background: "rgb(106 106 106 / 50%)" },
              ]}
            >
              More Info
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </BoxS>
  );
}
export default SectionMovieDetail;
