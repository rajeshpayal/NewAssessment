import "./CandidateAssessment.css"
const CandidateAssessment = () => {
    const candidtaeObj = [{ name: "Total Candidate", value: 11145, secondValue: 89, verticalLine: true },
    { name: "Who Attamped", value: 114, secondValue: 89, verticalLine: false },
    ]
    return (<div className="candidates-parent">
        <div className="assessment">Candidates</div>
        <div className="frame-parent13">
            <img
                className="frame-inner"
                alt=""
                src="/frame-1000009353.svg"
            />
            {candidtaeObj.map((candidate) => <><div className="frame-parent14">
                <div className="parent">
                    <b className="b">{candidate.value}</b>
                    <div className="div">+{candidate.secondValue}</div>
                </div>
                <div className="total-candidate">{candidate.name}</div>
            </div>
                {candidate.verticalLine && <img
                    className="frame-child1"
                    alt=""
                    src="/vector-250.svg"
                />}</>)}
        </div>
    </div>);
}

export default CandidateAssessment;