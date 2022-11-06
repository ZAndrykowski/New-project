import ThemeContext from "../../../context/themeContext"
import { useContext } from "react";

export default function LoadingIcon(props) {
    const theme = useContext(ThemeContext);
    return (
        <div className="d-flex justify-content-center">
            <div className={`spinner-grow text-${theme.theme}`} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}