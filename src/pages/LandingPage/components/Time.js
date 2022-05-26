
function Time({timeTitle, time, number}) {

    return (
        <>
            <div className="timer">
                <span className={"timer__number " + timeTitle} >{number}</span>
                <div className="smalltext">{time}</div>
            </div>
        </>
    );
}

export default Time;