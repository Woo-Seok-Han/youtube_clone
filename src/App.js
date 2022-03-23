import { useEffect, useState } from 'react';
import { VideoList } from 'components/video_list/video_list';
import { Navbar } from 'components/navbar/navbar';
import { call } from 'APIService/youtubeAPI';
import styles from 'App.module.css';
import { VideoDetail } from 'components/video_detail/video_detail';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  useEffect(() => {
    call("/videos", "GET", null).then((response) => setVideos(response));
  }, []); // 마운트가 되었을 때만 호출 ( 빈배열 추가 )

  const searchHandler = (searchValue) => {
    let paramData = {
      searchValue: searchValue,
      type: "video"
    };

    call("/search", "GET", paramData).then((videos) => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  }

  return (
    <div className={styles.app}>
      <Navbar onSearch={searchHandler} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'List' : 'Grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
