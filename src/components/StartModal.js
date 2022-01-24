import "./StartModal.css"

export default function StartModal(props) {
    return(
        <div className="start-modal">
            <h1>Quizzical</h1>
            <h3>Test your knowledge!</h3>
            <button onClick={props.clickToBegin}>Start quiz</button>
        </div>
    )
}
