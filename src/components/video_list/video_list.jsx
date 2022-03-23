import { VideoItem } from 'components/video_item/video_item'
import React from 'react'
import styles from 'components/video_list/video_list.module.css'

export const VideoList = ({ videos, onVideoClick, display }) => {
    return (
        <ul className={styles.videos}>
            {videos.map((video) => {
                return <VideoItem 
                        key={video.id} 
                        video={video}
                         onVideoClick={onVideoClick} 
                         display={display}/>
            })}
        </ul>
    ); 
}

