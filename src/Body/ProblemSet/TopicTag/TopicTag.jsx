import styles from './TopicTag.module.css'

const TopicTag = ({ topicName, count, style }) => {
    return (
        <>
            <span
                className = {`${styles['topic-tag']}`}
                style = {style}
            >
                {topicName}{count && `: ${count}`}
            </span>
        </>
    )
}

export default TopicTag