import { Box, Grid, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie } from "../Redux/types";
import { history } from "../Utils/constants";
import { useAppDispatch } from "../Redux/hooks";
import { getSimilar, setIdMovie } from "../Redux/actions/moviesAction";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  data: Movie[] ;
  title?: string;
};
export interface LocationState {
  pathname: string;
}
function SlideMovie({ data=[], title }: Props) {
  let location:LocationState = useLocation<LocationState>();
  const dispatch = useAppDispatch();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
      slidesToSlide: 1,
    },
    pc: {
      breakpoint: { max: 1920, min: 1524 },
      items: 9,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1524, min: 720 },
      items: 6,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const styles = {
    box: {
      mx: 5,
      marginBottom: 3,
    },
    label: {
      fontSize: 18,
      color: "white",
    },
    sublabel: {
      fontSize: 11,
      color: "white",
      marginTop: "5px",
      width: "150px",
      textAlign: "center",
    },
    averagelabel: {
      marginTop: "1.5px",
      marginLeft: "2px",
      fontSize: 10,
      color: "white",
    },
    img: {
      height: "100px",
      width: "150px",
      objectFit: "cover",
      marginRight: 0.5,
      "&:hover": {
        cursor: "pointer",
        border: "1px solid white",
      },
    },
    iconStar: {
      height: "15px",
      color: "yellow",
    },
    containerAverage: {
      position: "absolute" as "absolute",
      top: 0,
    },
  };

  const preDetail = (movie: Movie) => {
    let path = location.pathname;
    dispatch(setIdMovie(movie));
    if (movie.name) dispatch(getSimilar(movie.id, "tv"));
    else dispatch(getSimilar(movie.id, "movie"));

    if (path !== "/detail_movie") history.push("/detail_movie");
  };
  return (
    <Box sx={styles.box}>
      <Grid sx={{ marginBottom: "10px" }} container>
        <Typography sx={styles.label}>{title}</Typography>
      </Grid>
      <Carousel responsive={responsive}>
        {data.map((item: Movie) => (
          <>
            <Box
              onClick={() => preDetail(item)}
              key={item.id}
              sx={[styles.img, { objectFit: "cover" }]}
              component="img"
              alt=""
              src={item.poster_path}
            />
            {item.title && (
              <Typography data-cy='title-name' sx={styles.sublabel}> {item.title}</Typography>
            )}
            {item.name && (
              <Typography data-cy='title-name' sx={styles.sublabel}> {item.name}</Typography>
            )}
            <Grid container sx={styles.containerAverage}>
              <Typography sx={styles.averagelabel}>
                {" "}
                {item.vote_average.toFixed(2)}
              </Typography>
              <StarIcon sx={styles.iconStar} />
            </Grid>
          </>
        ))}
      </Carousel>
    </Box>
  );
}
export default SlideMovie;
