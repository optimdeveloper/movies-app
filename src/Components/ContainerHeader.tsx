
import { Grid } from "@mui/material";
import IconTop from "./IconTop";
type Props = {
    children?: JSX.Element | JSX.Element[],
    flexInline?:boolean,
    icon?:boolean,
    sizeIcon?:boolean
  };
function ContainerHeader({children,flexInline,icon,sizeIcon}:Props) {
 
  return (
        <Grid item xs={6} display="flex" justifyContent={flexInline ? 'flex-end':''}>
          {icon && 
          <IconTop big={sizeIcon}/> 
         } 
           {children}
        </Grid>
       
  );
}
export default ContainerHeader;
