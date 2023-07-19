import "../pages/FrameComponent1.css"
// import "./SideNavBar.css"
// note-alt-icon
// dot-icon
// quiz - parent 21
// note-alt-parent  15
// vector-parent  33
const SideNavBar = () => {
    return (<div className="frame-wrapper12">
        <div className="frame-parent39">
            <div className="frame-parent40">
                <div className="dashboard-parent">
                    <img className="dashboard-icon" alt="" src="/dashboard.svg" />
                    <div className="dashboard">Dashboard</div>
                    <div className="rectangle-div" />
                </div>
                <div className="dashboard-parent">
                    <img className="dashboard-icon" alt="" src="/note-alt.svg" />
                    <div className="dashboard">Assessment</div>
                    <div className="rectangle-div" />
                </div>
                <div className="dashboard-parent">
                    <img className="dashboard-icon" alt="" src="/quiz.svg" />
                    <div className="dashboard">My Library</div>

                </div>


            </div>
            <div className="vector-parent">
                <img className="frame-child22" alt="" src="/vector-267.svg" />
                <div className="frame-parent41">
                    <div className="admin-wrapper">
                        <div className="new-assessment">Admin</div>
                    </div>
                    <div className="dashboard-parent">
                        <img className="dashboard-icon" alt="" src="/admin-meds.svg" />
                        <div className="assessments-overview">
                            <p className="round">Round</p>
                            <p className="round">Status</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default SideNavBar;