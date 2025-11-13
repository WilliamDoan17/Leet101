import styles from './Preferences.module.css';
import { useState } from 'react';

const SliderInput = ({ minValue, maxValue, value, setValue, fillColor = 'rgb(79, 70, 229)', unFillColor = 'rgb(209, 213, 219)', onChange }) => {
    const handleChangeInput = (e) => {
        setValue(e.target.value);
        onChange && onChange(e.target.value);
    }
    const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

    return (
        <>
            <input
                type = "range"
                min = {minValue}
                max = {maxValue}
                value = {value}
                onChange = {handleChangeInput}
                className = 'slider-input'
                style = {{
                    background: `linear-gradient(to right, ${fillColor} 0%, ${fillColor} ${percentage}%, ${unFillColor} ${percentage}%, ${unFillColor} 100%)`,
                }}
            ></input>
            <style jsx>{`
                .slider-input {
                    margin: 0;
                    -webkit-appearance: none;
                    width: 100%;
                    height: 6px;
                    border-radius: 3px;
                    outline: none;
                    cursor: pointer;
                }

                .slider-input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: ${fillColor};
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                .slider-input::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: ${fillColor};
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </>
    )
}



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

const SchedulePreference = ({ weekCount, setWeekCount, hoursPerWeek, setHoursPerWeek }) => {
    const handleInputChange = (newValue, setValue) => {
        setValue(newValue);
    }
    return (
        <div className = {`${styles['preference-container']}`}> 
            <legend className = {`${styles['preference-header']}`}>Schedule</legend>
            <div className = {`${styles['schedule-input-container']}`}>
                <label className = {`${styles['schedule-label']}`}>{weekCount} weeks</label>
                <SliderInput 
                    minValue = {0}
                    maxValue = {26}
                    value = {weekCount}
                    setValue = {setWeekCount}
                    onChange = {(newValue) => handleInputChange(newValue, setWeekCount)}
                ></SliderInput>
                <label className = {`${styles['schedule-label']}`}>{hoursPerWeek} hours per week</label>
                <SliderInput
                    minValue = {0}
                    maxValue = {40}
                    value = {hoursPerWeek}
                    setValue = {setHoursPerWeek}
                    onChange = {(newValue) => handleInputChange(newValue, setHoursPerWeek)}
                ></SliderInput>
            </div>
        </div>
    )
}

const DifficultyCheckbox = ({ difficulty, labelColor = 'rgb(0, 0, 0)', onChange, unCheckedColor = '#fff',  defaultChecked }) => {
    const [checked, setChecked] = useState(defaultChecked);
    const handleChange = (e) => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChange && onChange(newChecked, difficulty);
    }
    const diffcultyLabelStyle = {
        color: labelColor,
    }
    const checkboxStyle = {
        padding: 0,
        margin: 0,
        width: '1rem',
        height: '1rem',
        accentColor: labelColor,
    }
    const fakeCheckboxStyle = {
        position: 'absolute',
        border: `1px solid ${labelColor}`,
        borderRadius: '3px',
        display: checked ? 'none' : 'block',
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        backgroundColor: unCheckedColor,
        width: '1rem',
        height: '1rem',
    }
    const containerStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
    return (
        <>
            <div
                style = {containerStyle}
            >
                <input
                    type = 'checkbox'
                    style = {checkboxStyle}
                    checked = {checked}
                    name = {difficulty}
                    id = {difficulty}
                    onChange = {handleChange}
                ></input>
                <div
                    style = {fakeCheckboxStyle}
                    onClick = {handleChange}
                ></div>
                <label
                    className = {`${styles['difficulty-label']}`}
                    style = {diffcultyLabelStyle}
                    htmlFor = {difficulty}
                >{difficulty}</label>
            </div>
        </>
    )
}

const DifficultiesPreference = ({ difficultiesChosen, setDifficultiesChosen, difficulties }) => {
    return (
        <div
            className = {`${styles['preference-container']}`}
        >
            <legend className = {`${styles['preference-header']}`}>Difficulty</legend>
            <div
                className = {`${styles['difficulty-checkboxes-container']}`}
            >
                <DifficultyCheckbox
                    difficulty = 'easy'
                >
                </DifficultyCheckbox>
            </div>
        </div>
    )
}

const Preferences = ({ weekCount, hoursPerWeek, difficultiesChosen, topicsChosen, setWeekCount, setHoursPerWeek, setDifficultiesChosen, setTopicsChosen, difficulties }) => {
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
        </div>
    )
};

export default Preferences;