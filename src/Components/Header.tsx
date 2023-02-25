
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};
function HeaderHome({children}:Props) {
  const BoxS = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    marginTop: "20px",
  }));

  return (
    <BoxS
      sx={{
        width: "100%",
        height: 50,
      }}
    >
      <Grid container>
       {children}
      </Grid>
    </BoxS>
  );
}
export default HeaderHome;
