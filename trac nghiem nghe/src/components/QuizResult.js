import React from 'react';

function QuizResult(props) {
    let resultMessage = '';

    if (props.score >= 0 && props.score <= 2) {
        resultMessage = "Bạn có thể phù hợp với ngành IT";
    } else if (props.score > 2 && props.score <= 4) {
        resultMessage = "Bạn có thể phù hợp với ngành kinh tế";
    } else if (props.score > 4 && props.score <= 6) {
        resultMessage = "Bạn có thể phù hợp với ngành cơ khí";
    } else if (props.score > 6 && props.score <= 8) {
        resultMessage = "Bạn có thể phù hợp với ngành xây dựng";
    } else if (props.score > 8 && props.score <= 10) {
        resultMessage = "Bạn có thể phù hợp với ngành ngôn ngữ anh";
    }

    return (
        <>
            {/* <div className='show-score'>Dưới đây là kết quả của bạn:</div> */}
            <div className='show-score'>{resultMessage}</div>
            <button id="next-button" onClick={props.tryAgain}>Thử lại</button>
        </>
    );
}

export default QuizResult;
