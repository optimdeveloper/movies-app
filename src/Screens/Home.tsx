
import { withRouter } from "react-router-dom";
import HeaderHome from "../Components/Header";
import SlideMovie from "../Components/SlideMovie";
import { useEffect } from "react";
import { getMovies} from '../Redux/actions/moviesAction';
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import MainContainer from '../Components/MainContainer';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsIcon from "@mui/icons-material/Notifications";
import ContainerHeader from "../Components/ContainerHeader";
import stylesGlobal from "../Components/style";


function Home() {
  const dispatch = useAppDispatch()
  const moviesPopular = useAppSelector(state=> state.movie.movies.moviesPopular);
  const seriesPopular= useAppSelector((state) => state.movie.movies.seriesPopular);
 
  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch]);

  return (
    <MainContainer heightFull>
      <HeaderHome>
        <ContainerHeader icon>
          <Grid item sx={stylesGlobal.item}>
            <Typography sx={stylesGlobal.label}>Home</Typography>
          </Grid>
          <Grid item sx={stylesGlobal.item}>
            <Typography sx={stylesGlobal.label}>TV Shows</Typography>
          </Grid>
          <Grid item sx={stylesGlobal.item}>
            <Typography sx={stylesGlobal.label}>Movies</Typography>
          </Grid>
          <Grid item sx={stylesGlobal.item}>
            <Typography sx={stylesGlobal.label}>Recently Added</Typography>
          </Grid>
          <Grid item sx={stylesGlobal.item}>
            <Typography sx={stylesGlobal.label}>My List</Typography>
          </Grid>
        </ContainerHeader>
        <ContainerHeader flexInline>
        <Grid sx={stylesGlobal.item}>
            <SearchIcon sx={{ color: "white" }} />
          </Grid>
          <Grid sx={stylesGlobal.item}>
            <Typography sx={stylesGlobal.label}>Kids</Typography>
          </Grid>
          <Grid sx={stylesGlobal.item}>
            <Typography sx={stylesGlobal.label}>DVD</Typography>
          </Grid>
          <Grid sx={stylesGlobal.item}>
            <RedeemIcon sx={{ color: "white" }} />
          </Grid>
          <Grid sx={stylesGlobal.item}>
            <NotificationsIcon sx={{ color: "white" }} />
          </Grid>
        </ContainerHeader>
      </HeaderHome>
      <SlideMovie data={moviesPopular} title={"Most Popular Movies"} />
      <SlideMovie data={seriesPopular} title={"Most Popular TV Series"} />
     
    </MainContainer>
  );
}
export default withRouter(Home);
