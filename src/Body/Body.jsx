import styles from './Body.module.css';
import { useState } from 'react';
import Preferences from './Preferences/Preferences';
import { difficulties, defaultWeekCount, defaultHoursPerWeek, defaultDifficultiesChosen, topics, defaultTopicsChosen} from '../../constants/preferences';
import ChangeTopicsModal from './ChangeTopicsModal/ChangeTopicsModal';
import ProblemSet from './ProblemSet/ProblemSet';

const Body = () => {
    const [weekCount, setWeekCount] = useState(defaultWeekCount);
    const [hoursPerWeek, setHoursPerWeek] = useState(defaultHoursPerWeek);
    const [difficultiesChosen, setDifficultiesChosen] = useState(defaultDifficultiesChosen);
    const [topicsChosen, setTopicsChosen] = useState(defaultTopicsChosen); 
    const [isRequestingChangeTopics, setIsRequestingChangeTopics] = useState(false);

    console.log(topicsChosen);

    const onChangeTopicsChosenRequest = (value) => {
        setIsRequestingChangeTopics(value);
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
                    topics = {topics}
                    topicsChosen={topicsChosen}
                    setTopicsChosen={setTopicsChosen}
                    onChangeTopicsChosenRequest = {onChangeTopicsChosenRequest}
                >
                </Preferences>
                <ChangeTopicsModal
                    topics = {topics}
                    topicsChosen = {topicsChosen}
                    setTopicsChosen = {setTopicsChosen}
                    isRequestingChangeTopics = {isRequestingChangeTopics}
                    onChangeTopicsChosenRequest = {onChangeTopicsChosenRequest}
                >
                </ChangeTopicsModal>
                <ProblemSet
                    weekCount = {weekCount}
                    hoursPerWeek = {hoursPerWeek}
                >                    
                </ProblemSet>
            </div>
        </>
    )
}

export default Body;