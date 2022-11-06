import ThemeContext from "../../context/themeContext";
import { useContext } from "react";


function Footer (){
    const theme = useContext(ThemeContext);
    return(

            <div className={`text-center m-3 text-${theme.theme}`}>NOWA STOPKA 2022</div>
    )
}
export default Footer;