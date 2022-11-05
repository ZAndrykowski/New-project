import ThemeContext from "../../../context/themeContext"

export default function LoadingIcon(props) {
    return (
        <ThemeContext.Consumer>
            {({theme}) =>
                <div className="d-flex justify-content-center">
                    <div className={`spinner-grow text-${theme}`} role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }
        </ThemeContext.Consumer>
    )
}