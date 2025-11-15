import styles from './ChangeTopicsModal.module.css'
import { useState } from 'react';

const TopicCheckbox = ({ topic, onChange, checked }) => {

    const handleChange = (e) => {
        const newChecked = e.target.checked;
        onChange && onChange(newChecked, topic);
    }

    return (
        <>
            <div
                className = {`${styles['checkbox-container']}`}
            >
                <input
                    className = {`${styles.checkbox}`}
                    type = 'checkbox'
                    checked = {checked}
                    name = {topic.name}
                    id = {topic.name}
                    onChange = {handleChange}
                >
                </input>
                <label
                    className = {`${styles['checkbox-label']}`}
                    htmlFor = {topic.name}
                >
                    {topic.name}
                </label>
            </div>
        </>
    )
}



const ChangeTopicsModal = ({ topics, topicsChosen, setTopicsChosen, isRequestingChangeTopics, onChangeTopicsChosenRequest }) => {
    const closeChangeTopicsModal = () => {
        onChangeTopicsChosenRequest(false);
    }

    const ModalStyle = {
        display: isRequestingChangeTopics ? 'flex' : 'none',
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    const onChangeTopicsChosen = (value, topic) => {
        const newTopicsChosen = [];
        if (value) {
            topicsChosen.forEach((_topic) => {
                newTopicsChosen.push(_topic);
            })
            newTopicsChosen.push(topic); 
        } else {
            topicsChosen.forEach((_topic) => {
                if (_topic !== topic) newTopicsChosen.push(_topic);
            })
        }
        setTopicsChosen(newTopicsChosen);
    }

    const selectAllTopics = () => {
        const newTopicsChosen = [...topics];
        setTopicsChosen(newTopicsChosen);
    }

    const clearAllTopics = () => {
        const newTopicsChosen = [];
        setTopicsChosen(newTopicsChosen);
    }

    return (
        <>
            <div
                className = {`${styles.background}`}
                style = {ModalStyle}
                onClick = {closeChangeTopicsModal}
            >
                <div
                    className = {`${styles.container}`}
                    onClick={stopPropagation}
                >
                    <h3 
                        className = {`${styles.header}`}
                    >
                        Select Topics
                    </h3>
                    <p
                        className = {`${styles['topic-container']}`}
                    >
                        {topics.map((topic) => {
                            return (
                                <>
                                    <TopicCheckbox
                                        key = {topic.name}
                                        topic = {topic}
                                        onChange = {onChangeTopicsChosen}
                                        checked = {topicsChosen.includes(topic)}
                                    >
                                    </TopicCheckbox>
                                </>
                            )
                        })}
                    </p>
                    <div
                        className = {`${styles['selection-button-container']}`}
                    >
                        <button
                            onClick = {selectAllTopics}
                            className = {`${styles['selection-button']} ${styles['select-all']}`}                     
                        >
                            Select all
                        </button>
                        <button
                            onClick = {clearAllTopics}
                            className = {`${styles['selection-button']} ${styles['clear-all']}`}
                        >
                            Clear all
                        </button>
                    </div>
                    <button
                        className = {`${styles['done-button']}`}
                        onClick = {closeChangeTopicsModal}
                    >
                        Done
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChangeTopicsModal