import styles from './Preferences.module.css';
import SchedulePreference from './SchedulePreference';
import DifficultiesPreference from './DifficultiesPreference';
import { useState } from 'react';

const PreferencesHeader = ({ message }) => {
    const headerStyle = {
        backgroundColor: 'rgb(79, 70, 229)',
        color: 'rgb(255, 255, 255)',
        fontSize: '.75rem',
        lineHeight: '1rem',
        fontWeight: '600'
    }
    return (
        <div className  = {`${styles['preference-container']}`} style = {headerStyle}>
            {message}
        </div>
    )
}

const Preferences = ({ weekCount, hoursPerWeek, difficultiesChosen, topicsChosen, setWeekCount, setHoursPerWeek, setDifficultiesChosen, setTopicsChosen, difficulties, onChange }) => {
    const handleChange = (newValue, setValue) => {
        onChange && onChange(newValue, setValue);
    }
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
                onChange = {handleChange}
            ></SchedulePreference>
            <DifficultiesPreference
                difficultiesChosen = {difficultiesChosen}
                setDifficultiesChosen = {setDifficultiesChosen}
                difficulties = {difficulties}
            >
            </DifficultiesPreference>
        </div>
    )
};

export default Preferences;