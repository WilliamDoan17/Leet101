import styles from './Preferences.module.css';
import { useState } from 'react'; 

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
        marginTop: '.5rem',
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
    const handleDifficultyChange = (newChecked, difficulty) => {
        let newDifficultiesChosen = [];
        if (newChecked) {
            newDifficultiesChosen = [...difficultiesChosen, difficulty];
        } else {
            newDifficultiesChosen = difficultiesChosen.filter((_difficulty) => {
                if (_difficulty !== difficulty) return true;
            })
        }
        setDifficultiesChosen(newDifficultiesChosen);
    }
    return (
        <div
            className = {`${styles['preference-container']}`}
        >
            <legend className = {`${styles['preference-header']}`}>Difficulty</legend>
            <div
                className = {`${styles['difficulty-checkboxes-container']}`}
            >
                {difficulties.map(({ difficulty, labelColor }) => {
                    return <DifficultyCheckbox
                        key = {difficulty}
                        difficulty={difficulty}
                        labelColor = {labelColor}
                        onChange = {handleDifficultyChange}
                        defaultChecked = {difficultiesChosen.includes(difficulty)}
                    ></DifficultyCheckbox> 
                })}
            </div>
        </div>
    )
}

export default DifficultiesPreference;