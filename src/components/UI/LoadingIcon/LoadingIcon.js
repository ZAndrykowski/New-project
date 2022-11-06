import ThemeContext from "../../../context/themeContext"
import { useContext } from "react";

export default function LoadingIcon() {
    const theme = useContext(ThemeContext);
    return (
        <div className="d-flex justify-content-center">
            <div className={`spinner-grow text-${theme.themeHeader}`} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}