import styles from './QuestionSummary.module.css'

const TopicTag = ({ topicName, count }) => {
    return (
        <>
            <span
                className = {`${styles['topic-tag']}`}
            >
                {topicName} : {count}
            </span>
        </>
    )
}

const QuestionSummary = ({ totalTime, problemChosenList, topicsChosen, difficultiesChosen }) => {
    const problemInTopicCount = new Map();
    const problemInDifficultyCount = new Map();

    topicsChosen.forEach(topic => {
        problemInTopicCount.set(topic.name, 0);
    })
    difficultiesChosen.forEach(difficulty => {
        problemInDifficultyCount.set(difficulty.level, 0);
    })
    problemChosenList.forEach(problem => {
        problemInTopicCount.set(problem.topic, problemInTopicCount.get(problem.topic) + 1);
        problemInDifficultyCount.set(problem.difficulty, problemInDifficultyCount.get(problem.difficulty) + 1);
    })

    console.log(problemInDifficultyCount, problemInTopicCount);

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
                        <h3
                            className = {`${styles['summary-cell-header']}`}
                        >
                            Difficulty
                        </h3>
                        <p
                            className = {`${styles['summary-cell-intro']}`}
                        >
                            Questions grouped by difficulty
                        </p>
                        <div
                            className = {`${styles['difficulty-stats-container']}`}
                        >
                            {difficultiesChosen.map(difficulty => {
                                const difficulyStatStyle = {
                                    margin: 0,
                                    padding: 0,
                                    fontSize: '.875rem',
                                    fontWeight: '500',
                                    lineHeight: '1.25rem',
                                    color: `${difficulty.labelColor}`,
                                    textTransform: 'capitalize',
                                }
                                return (
                                    <>
                                        <span
                                            style = {difficulyStatStyle}
                                        >
                                            {difficulty.level}: {problemInDifficultyCount.get(difficulty.level)}
                                        </span>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div 
                        className = {`${styles['summary-cell']}`}
                    >
                        <h3
                            className = {`${styles['summary-cell-header']}`}
                        >
                            Topics
                        </h3>
                        <p
                            className = {`${styles['summary-cell-intro']}`}
                        >
                            Questions grouped by topics
                        </p>
                        <div
                            className = {`${styles['topic-tags-container']}`}
                        >
                            {topicsChosen.map(topic => {
                                return (
                                    <>
                                        <TopicTag
                                            topicName = {topic.name}
                                            count = {problemInTopicCount.get(topic.name)}
                                        >
                                        </TopicTag>
                                    </>
                                )
                            })}
                        </div>
                    </div>  
                </div>
                <div
                    className = {`${styles['completion-tracker-container']}`}
                >
                    
                </div>
            </div>
        </>
    )
}

export default QuestionSummary