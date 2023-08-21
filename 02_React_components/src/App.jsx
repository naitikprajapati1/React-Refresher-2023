import "./App.css";
import Border from "./components/Border";
import Video from "./components/Video";
import Prople from "./components/Prople";
import PlayButton from "./components/PlayButton";
import data from "./data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
function App() {
  console.log(data);
  const [videos,setVideos]=useState(data);
  function setVide(video) {
      setVideos([...videos,{...video,key:videos.length+1
        }])
  }
  return (
    <div className="flex flex-col" onClick={() => console.log("Div called")}>
      <AddVideo setVide={setVide}></AddVideo>
      <div className="flex gap-3  justify-center mt-6">
        {videos.map((value) => (
          <Video
            key={value.key}
            name={value.name}
            title={value.title}
            views={value.views}
            verified={value.verified}
          />
        ))}
        {/* <Video name="React js" title="Namste Reactjs" views="1M" verified="true"/>
    <Video {...data}/> */}
      </div>
      
      {/* <PlayButton message="Playing :)">Play Button</PlayButton> */}
      {/* passing events as props */}
      <PlayButton onSmash={() => console.log("Playing")} message="Playing :)">
        Play Button
      </PlayButton>
      <PlayButton onSmash={() => console.log("Paushed")} message="Paushed :)">
        Paushed Button
      </PlayButton>


      <div>
        <button onClick={()=>{
         setVideos([...videos,{
          key: videos.length+1,
          name: "Demo js",
          title: "Namste Angular",
          views: "3M",
          verified: true,
        }])
        }}>Add video</button>
      </div>
    </div>
  );
}

export default App;
