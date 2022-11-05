import ThemeContext from "../../context/themeContext";

const Footer = (props) =>(
    <ThemeContext.Consumer>
        {value =>
            <div className={`text-center m-3 text-${value}`}>NOWA STOPKA 2022</div>
        }
    </ThemeContext.Consumer>
);

export default Footer;