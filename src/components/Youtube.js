import axios from "axios";
import { useEffect, useState } from "react";

function Youtube() {
   const [video, setVideo] = useState([]);

   const key = `AIzaSyBmzLPjUZIHII6IxsfXT7_XyFKDFQ8PMgg`;
   const playList = `PL1lM-PTkXH7ZRzIDMLhWTP7Oiq12ppXe1`;
   const num = 4;
   const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;
   useEffect(() => {
      axios.get(URL).then(json => setVideo(json.data.items))
      axios.get(URL).then(json => console.log(json.data.items))
   }, [])

   return (
      <>
         <section id="yt_container">
            <div className="text_line">
                <h2 className="h2_title">youtube play slider</h2>
                <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다</p>
            </div>
            <div className="yt_warpper">
                <div className="yt_video">
                    <iframe src='https://www.youtube.com/embed/-BjZmE2gtdo' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="yt_list">
                    <ul className="yt_list_ul">
                        {video.map(vid => {
                        return <li key={vid.snippet.position}>
                           <a className="yt_a" href="#!">
                              <img src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
                           </a>
                        </li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
      </>
   );
}

export default Youtube;