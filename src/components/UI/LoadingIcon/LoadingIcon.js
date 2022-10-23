export default function LoadingIcon(props){
    return(
        <div className="d-flex justify-content-center">
            <div className={`spinner-grow text-${props.theme}`} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}