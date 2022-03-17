import { VideoItem } from 'components/video_item/video_item'
import React from 'react'
import styles from 'components/video_list/video_list.module.css'

export const VideoList = (props) => {
    return (
        <ul className={styles.videos}>
            {props.videos.map((video) => {
                return <VideoItem key={video.id} video={video} />
            })}
        </ul>
    ); 
}

