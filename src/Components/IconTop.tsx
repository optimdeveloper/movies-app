import { Box, } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../Assets/img/netflix.png";
type Props={
  big?:boolean,
}
function IconTop({big}:Props) {
  const BoxS = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingLeft: big && 50,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: big && 30,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  }));
  const styles = {
    iconBig: {
      backgroundImage: `url(${Logo})`,
      height: "40px",
      width: "100%",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
    iconSmall: {
      backgroundImage: `url(${Logo})`,
      height: "40px",
      width: "70px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
  
    },
    boxIconBig:{
        width: "100%",
        height: 100,
        py: 4,
  
    },
    boxIconSmall:{
      width: "auto",
      height: 100,
      marginRight:1
  }
  };
  return (
    <BoxS
      sx={big ? [styles.boxIconBig] : [styles.boxIconSmall]}
    >
      <div style={big ? styles.iconBig : styles.iconSmall}></div>
    </BoxS>
  );
}
export default IconTop;
