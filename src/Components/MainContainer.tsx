import { Box, Stack } from "@mui/material";

type Props = {
  children: JSX.Element | JSX.Element[];
  heightFull?: boolean;
  backgroundImage?:string,
  border?:boolean,
  fill?:boolean
};
function MainContainer({ children, heightFull,backgroundImage,border,fill=false }: Props) {
  const styles = {
    screen: {
      height: heightFull ? "100vh" : "95vh",
      overflow: "hidden",
      background: backgroundImage ? 'transparent' :'black'
    },
    screenInner: {
      bgcolor: "rgb(0 0 0 / 20%)",
      backgroundImage:
      backgroundImage && !fill ? "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)" : backgroundImage && fill ? 
      "linear-gradient(to left, rgba(0, 0, 0,0) 0%, rgba(21, 19, 19,0) 30%, rgba(0, 0, 0, 0.8) 70%)" :
      "transparent",
      height: heightFull ? "100vh" : "95vh",
      position: "absolute" as "absolute",
      width: "100%",
      borderTop: border ? '7px solid #313030' : '',
      overflowX: 'hidden'
    },
    img: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      transform: fill ? "" : 'scale(1.25) translateY(-10%)',
    },
  };
  return (
    <Stack sx={styles.screen}>
    {backgroundImage &&  <Box
        sx={styles.img}
        component="img"
        alt=""
        src={backgroundImage}
      /> }
      <Box sx={styles.screenInner}>{children}</Box>
    </Stack>
  );
}
export default MainContainer;
