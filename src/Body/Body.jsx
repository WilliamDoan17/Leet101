import styles from './Body.module.css';
import { useState } from 'react';
import Preferences from './Preferences/Preferences';
import { difficulties, defaultWeekCount, defaultHoursPerWeek, defaultDifficultiesChosen } from '../../constants/constList';

const Body = () => {
    const [weekCount, setWeekCount] = useState(defaultWeekCount);
    const [hoursPerWeek, setHoursPerWeek] = useState(defaultHoursPerWeek);
    const [difficultiesChosen, setDifficultiesChosen] = useState(defaultDifficultiesChosen);

    const handleChange = (newValue, setValue) => {
        setValue(newValue);
    }
    return (
        <>
            <div
               className={styles.container} 
            >
                <Preferences 
                    weekCount = {weekCount} 
                    setWeekCount = {setWeekCount}
                    hoursPerWeek = {hoursPerWeek}
                    setHoursPerWeek = {setHoursPerWeek}
                    difficultiesChosen={difficultiesChosen}
                    setDifficultiesChosen={setDifficultiesChosen}
                    difficulties = {difficulties}
                    onChange = {handleChange}
                >
                </Preferences>
            </div>
        </>
    )
}

export default Body;