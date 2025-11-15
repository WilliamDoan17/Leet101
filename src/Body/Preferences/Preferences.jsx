import styles from './Preferences.module.css';
import SchedulePreference from './SchedulePreference';
import DifficultiesPreference from './DifficultiesPreference';
import { useState } from 'react';
import TopicsPreference from './TopicsPreference';

const PreferencesHeader = ({ message }) => {
    const headerStyle = {
        backgroundColor: 'rgb(79, 70, 229)',
        color: 'rgb(255, 255, 255)',
        fontSize: '.875rem',
        lineHeight: '1rem',
        fontWeight: '400'
    }
    return (
        <div className  = {`${styles['preference-container']}`} style = {headerStyle}>
            {message}
        </div>
    )
}

const Preferences = ({ topics, weekCount, hoursPerWeek, difficultiesChosen, topicsChosen, setWeekCount, setHoursPerWeek, setDifficultiesChosen, setTopicsChosen, difficulties, onChangeTopicsChosenRequest }) => {
    const preferencesMessage = 'Indicate your preferences and I will recommend the best LeetCode questions for you to practice.';
    return (
        <div
            className = {styles.container}
        >
            <PreferencesHeader 
                message = {preferencesMessage}
            ></PreferencesHeader>
            <SchedulePreference 
                weekCount = {weekCount} 
                setWeekCount={setWeekCount}
                hoursPerWeek = {hoursPerWeek}
                setHoursPerWeek = {setHoursPerWeek}
            ></SchedulePreference>
            <DifficultiesPreference
                difficultiesChosen = {difficultiesChosen}
                setDifficultiesChosen = {setDifficultiesChosen}
                difficulties = {difficulties}
            >
            </DifficultiesPreference>
            <TopicsPreference
                topics = {topics}
                topicsChosen = {topicsChosen}
                onRequest = {onChangeTopicsChosenRequest}
            >        
            </TopicsPreference>
        </div>
    )
};

export default Preferences;