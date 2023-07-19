import "./FrameComponent.css";
const FrameComponent = ({ onClose }) => {

  return (
    <div className="container">
      <div className="heading">
        <div className="create-new-assessment">Create new assessment</div>
        <img className="close-icon" alt="" src="/cut.svg" onClick={onClose} style={{ cursor: "pointer" }} />
      </div>
      <div className="frame-group">
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Name of assessment</div>
          </div>
          <input placeholder="Type Here" className="input-style" type="text" />
        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Purpose of the test is</div>
          </div>
          <select placeholder="Type Here" type="select">
            <option>First</option>
            <option>Second</option>
          </select>
        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Description</div>
          </div>
          <select placeholder="Type Here" type="select">
            <option>Select</option>
            <option>First</option>
            <option>Second</option>
          </select>

        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Skills</div>
          </div>
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="frame-parent5">
                <div className="frame-wrapper">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">UI/UX and Design</div>
                    <img className="close-icon" alt="" src="/close.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="type-here-container">
              <div className="name-of-assessment">Type here</div>
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Duration of assessment</div>
          </div>
          <input placeholder="HH:MM:SS" className="input-style" type="text" />
        </div>
      </div>
      <div className="buttons-wrapper">
        <button className="create-new-assessment" onClick={onClose} style={{ width: "100%", background: "blue", padding: "10px", borderRadius: "5px", cursor: "pointer", color: "white" }}>Save</button>
      </div>
    </div >
  );
};

export default FrameComponent;
