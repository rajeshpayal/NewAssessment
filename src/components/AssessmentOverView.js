import "../pages/FrameComponent1.css"
import CandidateAssessment from "./CandidateAssessment";
import CandidateSourceOverView from "./CandidateSourceOverivew";
import TotalAssessment from "./TotalAssessment";
import TotalPurposeOverview from "./TotalPurposeOverview";
const AssessmentOverView = () => {
    return <div className="assessments-overview-parent">
        <div className="assessments-overview">
            Assessments Overview
        </div>
        <div className="frame-parent11">
            <TotalAssessment />
            <img className="vector-icon" alt="icon" src="/vector-251.svg" />
            <CandidateAssessment />
            <img className="vector-icon" alt="icon" src="/vector-251.svg" />
            <CandidateSourceOverView />
            <img className="vector-icon" alt="icon" src="/vector-251.svg" />
            <TotalPurposeOverview />
        </div>
    </div>

}
export default AssessmentOverView;