import React from 'react';

const Modal = (prop) => {
    return (
        <div className={prop.modal === null ? 'modal' : 'modal active'}>
            {
                prop.modal === null ? '' : prop.modal ? (
                    <div className="result-box correct">
                        <p>정답</p>
                        <p>점수 : {prop.score}</p>
                        <button onClick={prop.onNext}>next</button>
                    </div>
                ) : (
                        <div className="result-box wrong">
                            <p>오답</p>
                            <p>점수 : {prop.score}</p>
                            <button onClick={prop.onNext}>retry</button>
                        </div>
                    )
            }

        </div>
    );
};

export default Modal;