import "./CandidateSourceOverView.css"
const CandidateSourceOverView = () => {
    const candidtaeObj = [{ name: "E-mail", value: 11000, secondValue: 89, verticalLine: true },
    { name: "Social Share", value: 145, secondValue: 89, verticalLine: true },
    { name: "Unique Link", value: 145, secondValue: 89, verticalLine: false }]
    return (<div className="candidates-source-parent">
        <div className="assessment">Candidates Source</div>
        <div className="frame-parent13">
            <img
                className="frame-inner"
                alt=""
                src="/frame-1000005832.svg"
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

export default CandidateSourceOverView;