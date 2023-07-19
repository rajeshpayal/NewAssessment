import { useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import AssessmentHeader from "../components/AssessmentHeader";
import AssessmentOverView from "../components/AssessmentOverView";
import NewAssessment from "../components/NewAssessment";
import MathAssessment from "../components/MathAssessment";
import SideNavBar from "../components/SideNavBar";
import "./FrameComponent1.css";
const FrameComponent1 = () => {
  const [isFrame2Open, setFrame2Open] = useState(false);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "iPhone 13 mini - 7" to the project
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);
  return (
    <>
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
                    <div className="frame-parent23" >
                      <NewAssessment onOpen={openFrame2} />
                      <MathAssessment />
                      <MathAssessment />
                      {/* <MathAssessment /> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <FrameComponent onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent1;