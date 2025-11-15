import styles from './ProblemSet.module.css'
import { useState } from 'react';

const ProblemSet = ({ weekCount, hoursPerWeek, difficultiesChosen, topicsChosen }) => {

    const problemCount = 67;

    return (
        <>
            <main
                className = {`${styles.container}`}
            >
                <h1
                    className = {`${styles['problem-set-header']}`}
                >
                    Problem67 Questions
                </h1>
                <p
                    className = {`${styles['problem-set-intro']}`}
                >
                    Customize LeetCode study plans according to your needs. You are recommended to work on the questions in order.
                </p>
            </main>
        </>
    )
}

export default ProblemSet