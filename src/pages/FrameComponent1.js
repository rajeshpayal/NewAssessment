import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import AssessmentHeader from "../components/AssessmentHeader";
import AssessmentOverView from "../components/AssessmentOverView";
import NewAssessment from "../components/NewAssessment";
import MathAssessment from "../components/MathAssessment";
import SideNavBar from "../components/SideNavBar";
import "./FrameComponent1.css";
const FrameComponent1 = () => {
  return (
    <div className="frame-root">
      <SideNavBar />
      <div className="frame-child" />
      <div className="frame-parent8">
        <div className="frame-wrapper5">
          <AssessmentHeader />
        </div>
        <div className="frame-wrapper7">
          <div className="frame-wrapper8">
            <div className="frame-parent10">
              <AssessmentOverView />
              <div className="assessments-overview-parent">
                <div className="my-assessment-parent">
                  <div className="assessments-overview">My Assessment</div>
                  <div className="frame-wrapper9">
                    <div className="frame-child8" />
                  </div>
                </div>
                <div className="frame-parent22">
                  <div className="frame-parent23">
                    <NewAssessment />
                    <MathAssessment />
                    {/* <MathAssessment /> */}
                    {/* <MathAssessment /> */}
                    {/* <MathAssessment /> */}
                    {/* <MathAssessment /> */}
                    <MathAssessment />

                    {/* <div className="frame-parent26">
                        <div className="frame-parent27">
                          <div className="frame-parent28">
                            <img
                              className="frame-child9"
                              alt=""
                              src="/frame-1000008703.svg"
                            />
                            <div className="math-assessment-parent">
                              <div className="assessments-overview">
                                Math Assessment
                              </div>
                              <div className="job-parent">
                                <div className="job">Job</div>
                                <img
                                  className="frame-child10"
                                  alt=""
                                  src="/vector-333.svg"
                                />
                                <div className="calendar-today-parent">
                                  <img
                                    className="calendar-today-icon"
                                    alt=""
                                    src="/calendar-today1.svg"
                                  />
                                  <div className="new-assessment">
                                    20 Apr 2023
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dot-wrapper">
                            <img className="dot-icon" alt="" src="/3-dot.svg" />
                          </div>
                        </div>
                        <img
                          className="frame-child11"
                          alt=""
                          src="/vector-332.svg"
                        />
                        <div className="frame-parent29">
                          <div className="frame-parent30">
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Duration</div>
                            </div>
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Questions</div>
                            </div>
                          </div>
                          <div className="frame-parent31">
                            <div className="link-parent">
                              <img
                                className="link-icon"
                                alt=""
                                src="/link1.svg"
                              />
                              <div className="assessments-overview">Share</div>
                            </div>
                            <div className="frame-wrapper10">
                              <div className="frame-parent38">
                                <div className="lp-wrapper">
                                  <b className="lp">LP</b>
                                </div>
                                <div className="lp-frame">
                                  <b className="lp">LP</b>
                                </div>
                                <div className="lp-wrapper1">
                                  <b className="lp">LP</b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                    {/* <div className="frame-child12" /> */}
                    {/* </div> */}
                  </div>
                  <div className="frame-child17" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default FrameComponent1;