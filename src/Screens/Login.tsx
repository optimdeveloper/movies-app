
import MainContainer from "../Components/MainContainer";
import BoxLogin from "../Components/BoxLogin";
import FooterLogin from "../Components/FooterLogin";
import { withRouter } from "react-router";
import HeaderHome from "../Components/Header";
import ContainerHeader from "../Components/ContainerHeader";


function Login() {
 
  return (
    <MainContainer backgroundImage={'https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/c9cce0cf-a22d-4d7c-b047-186b95a7130c/EC-es-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg'} heightFull>
      <HeaderHome>
        <ContainerHeader icon sizeIcon />
      </HeaderHome>
      <BoxLogin/>
      <FooterLogin/>
    </MainContainer>
  );
}
export default withRouter(Login);
