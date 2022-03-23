import React from 'react'
import styles from 'components/video_item/video_item.module.css'

export const VideoItem = ({video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'List' ? styles.list : styles.grid;
    return (
        <li className={`${styles.container} ${displayType}`}
            onClick={() => onVideoClick(video)}>
            <div className={styles.video}>
                <img className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url}
                    alt="video thumbnail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>  
                </div>
            </div>
        </li> 
    )
    // return <h1>{props.video.snippet.title}</h1>
}

