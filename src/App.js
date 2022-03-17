import logo from './logo.svg';
import 'App.css';
import { useEffect, useState } from 'react';
import { VideoList } from 'components/video_list/video_list';
import { Navbar } from 'components/navbar/navbar';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCtcejghzwTBfNUQgvRNplhsmRCIWjR1x0&part=snippet&chart=mostPopular&maxResults=5&key=AIzaSyCtcejghzwTBfNUQgvRNplhsmRCIWjR1x0", requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result.items); return setVideos(result.items);})
      .catch(error => console.log('error', error));
  }, []); // 마운트가 되었을 때만 호출 ( 빈배열 추가 )

  return (
    <>
      <Navbar/>
      <VideoList videos={videos}/>
    </>
  ); 
}

export default App;
