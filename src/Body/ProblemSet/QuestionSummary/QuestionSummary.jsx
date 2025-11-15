import styles from './QuestionSummary.module.css'

const QuestionSummary = ({ totalTime }) => {
    return (
        <>
            <div
                className = {`${styles.container}`}
            >
                <div
                    className = {`${styles['summary-header']}`}
                >   
                    Questions Summary
                </div>
                <div
                    className = {`${styles['summary-cell-container']}`}
                >
                    <div 
                        className = {`${styles['summary-cell']}`}
                    > 
                        <h3
                            className = {`${styles['summary-cell-header']}`}
                        >
                            Time needed
                        </h3>
                        <p
                            className = {`${styles['summary-cell-intro']}`}
                        >
                            How long doing these questions will take for an average person. It's a conservative estimate where it is assumed that roughly the same amount of time will be needed to check the answer for each question.
                        </p>
                        <p
                            className = {`${styles['summary-total-time']}`}
                        >
                            {totalTime} hours
                        </p>
                        <p
                            className = {`${styles['summary-time-bonus-text']}`}
                        >
                            Fits into your schedule.
                        </p>
                    </div>
                    <div 
                        className = {`${styles['summary-cell']}`}
                    >

                    </div>
                    <div 
                        className = {`${styles['summary-cell']}`}
                    >

                    </div>  
                </div>
            </div>
        </>
    )
}

export default QuestionSummary