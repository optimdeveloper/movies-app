import { useAppSelector } from "../Redux/hooks";
import { withRouter } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MainContainer from "../Components/MainContainer";
import SectionMovieDetail from "../Components/SectionMovieDetail";
import SlideMovie from "../Components/SlideMovie";
import HeaderHome from "../Components/Header";
import { Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RedeemIcon from "@mui/icons-material/Redeem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContainerHeader from "../Components/ContainerHeader";
import stylesGlobal from "../Components/style";

export interface LocationState {
  pathname: string;
}
function DetailMovie() {

  const similar = useAppSelector(
    (state) => state.movie.similar
  );
  const movie = useAppSelector(
    (state) => state.movie.movieId
  );


  return (
    <MainContainer fill backgroundImage={movie.backdrop_path} heightFull>
      <HeaderHome>
        <ContainerHeader icon>
          <Grid item sx={stylesGlobal.item}>
            <Button
              endIcon={<ArrowDropDownIcon />}
              sx={stylesGlobal.btnDetail}
              variant="contained"
              color="primary"
            >
              Browse
            </Button>
          </Grid>
        </ContainerHeader>
        <ContainerHeader flexInline>
          <Grid sx={stylesGlobal.item}>
            <SearchIcon sx={{ color: "white" }} />
          </Grid>
          <Grid sx={stylesGlobal.item}>
            <RedeemIcon sx={{ color: "white" }} />
          </Grid>
          <Grid sx={stylesGlobal.item}>
            <NotificationsIcon sx={{ color: "white" }} />
          </Grid>
        </ContainerHeader>
      </HeaderHome>
      <SectionMovieDetail movie={movie} />
      <SlideMovie data={similar} title={"Related"} />
    </MainContainer>
  );
}
export default withRouter(DetailMovie);
