import { useState } from "react";
import styles from './Preferences.module.css';

const TopicsPreference = ({ topics, topicsChosen, onRequest }) => {
    const containerStyle = {
        borderBottom: 0
    }

    const topicsCountMessage = () => {
        if (topicsChosen.length === 0) return 'No';
        if (topicsChosen.length === topics.length) return 'All';
        return topicsChosen.length; 
    }

    return (
        <div
            style = {containerStyle}
            className = {`${styles['preference-container']}`}
        >
            <legend
                className = {`${styles['preference-header']}`}
            >topics</legend> 
            <div 
                className = {`${styles['topics-indicator']}`}
            >
                <span>{topicsCountMessage()} topics chosen</span>
                <button
                    onClick = {() => onRequest(true)}
                >
                    Change
                </button>
            </div>  
        </div>
    )
} 

export default TopicsPreference
