import styles from './WeeklyProblemSet.module.css'
import { useState } from 'react'
import { getLabelColorFromDifficulty } from '../../../../constants/problemSet'
import TopicTag from '../TopicTag/TopicTag'


const ProblemCard = ({ problem, problemIndex }) => {
    const ProblemDifficultyStyles = {
        color: getLabelColorFromDifficulty.get(problem.difficulty),
    }

    const TopicTagStyles = {
        margin: '0 0 0 1rem',
    }

    return (
        <>
            <div
                className = {`${styles['problem-card-container']}`}
            >
                <span
                    className = {`${styles['problem-card-index']}`}
                >
                    {problemIndex}
                </span>
                <div
                    className = {`${styles['problem-info-container']}`}
                > 
                    <a
                        className = {`${styles['problem-name']}`}
                    >
                        {problem.name}
                    </a>
                    <div
                        className = {`${styles['problem-other-info']}`}
                    >
                        <span
                            style = {ProblemDifficultyStyles}
                            className = {`${styles['problem-difficulty']}`}
                        >
                            {problem.difficulty}
                        </span>
                        <span
                            className = {`${styles['problem-time']}`}
                        >
                            {problem.timeTaken} mins
                        </span>
                        <TopicTag
                            topicName = {problem.topic}
                            style = {TopicTagStyles}
                        >
                        </TopicTag>
                    </div>
                </div>
            </div>
        </>
    )
}
 
const WeekProblemList = ({ weeklyProblems, weekIndex }) => {
    const [isExpanding, setIsExpanding] = useState(false);

    const onChangeExpandingState = () => {
        const newIsExpanding = !isExpanding;
        setIsExpanding(newIsExpanding);
    }

    return (
        <div
            className = {`${styles['week-container']}`}
        >
            <button
                className = {`${styles['week-button']} ${isExpanding && styles['week-button-expand']}`}
                onClick = {onChangeExpandingState}
            >
                <h2
                    className = {`${styles['week-number-header']}`}
                >
                    Week {weekIndex}
                </h2>
            </button>
            {isExpanding && weeklyProblems.map((problem, problemIndex) => {
                return (
                    <ProblemCard
                        problem = {problem}
                        problemIndex = {problemIndex + 1}
                    >
                    </ProblemCard>
                )
            })}
        </div>
    )
}

const WeeklyProblemSet = ({ weeklyProblemSet }) => {
    return (
        <div
            className = {`${styles.container}`}
        >
            {weeklyProblemSet.map((weeklyProblems, weekIndex) => {
                return <WeekProblemList
                    key = {weekIndex + 1}
                    weeklyProblems = {weeklyProblems}
                    weekIndex = {weekIndex + 1}
                >
                </WeekProblemList>
            })}
        </div>
    )
}

export default WeeklyProblemSet