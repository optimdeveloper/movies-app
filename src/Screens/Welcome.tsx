
import { withRouter } from "react-router-dom";
import BodyWelcome from "../Components/BodyWelcome";
import MainContainer from "../Components/MainContainer";
import BodyContainer from "../Components/BodyContainer";
import HeaderHome from "../Components/Header";
import { Button, Grid } from '@mui/material';
import { history } from "../Utils/constants";
import Language from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ContainerHeader from "../Components/ContainerHeader";

function Welcome() {
  const styles = {
 
    item: {
      justifyContent: "center",
      display: "flex",
      mx: 1.5,
      alignSelf:"center"
    },
  
  };
  return (
    <>
    <MainContainer backgroundImage={'https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/c9cce0cf-a22d-4d7c-b047-186b95a7130c/EC-es-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg'}>
        <HeaderHome>
          <ContainerHeader icon sizeIcon/>
          <ContainerHeader flexInline>
          <Grid sx={styles.item}>
          <Button
             startIcon={<Language />}
             endIcon={<ArrowDropDownIcon />}
             sx={{ 
             marginRight:5,backgroundColor:'transparent',border:'1px solid gray'}}
              variant="contained"
              color="primary"
            >
              ESPAÑOL
            </Button>
          </Grid>
          <Grid sx={styles.item}>
              
          <Button
              data-cy="btn-login"
              variant="contained"
              sx={{backgroundColor:'red'}}
              onClick={() => history.push("/login")}
              color="primary"
            >
              INICIAR SESIÓN
            </Button>
            </Grid>
          
          </ContainerHeader>
        </HeaderHome>
        <BodyWelcome/>
      </MainContainer>
      <MainContainer heightFull border>
       <BodyContainer/>
      </MainContainer>
      </>
  );
}
export default withRouter(Welcome);
