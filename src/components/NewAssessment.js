// import "../pages/FrameComponent1.css"
import "./NewAssessment.css"
const NewAssessment = () => {
    return (<div className="frame-parent24">
        <div className="frame-parent25">
            <div className="add-wrapper">
                <img className="add-icon" alt="" src="/add.svg" />
            </div>
            <div className="new-assessment">New Assessment</div>
        </div>
        <div className="from-here-you">
            From here you can add questions of multiple types like
            MCQs, subjective (text or paragraph)!
        </div>
        <img
            className="vector-icon1"
            alt=""
            src="/keyboard-arrow-down2.svg"
        />
    </div>);
}

export default NewAssessment;