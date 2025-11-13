import styles from './Body.module.css';
import { useState } from 'react';
import Preferences from './Preferences/Preferences';

const Body = () => {
    const [weekCount, setWeekCount] = useState(8);
    const [hoursPerWeek, setHoursPerWeek] = useState(8);
    return (
        <>
            <div
               className={styles.container} 
            >
                <Preferences 
                    weekCount={weekCount} 
                    setWeekCount={setWeekCount}
                    hoursPerWeek={hoursPerWeek}
                    setHoursPerWeek={setHoursPerWeek}
                >

                </Preferences>
            </div>
        </>
    )
}

export default Body;