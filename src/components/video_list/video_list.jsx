import { VideoItem } from 'components/video_item/video_item'
import React from 'react'

export const VideoList = (props) => {
    return (
        <ul>
            {props.videos.map((video) => {
                return <VideoItem key={video.id} video={video} />
            })}
        </ul>
    ); 
}

