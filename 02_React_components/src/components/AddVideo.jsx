import { useState } from "react";

const AddVideo = ({setVide}) => {
  const [video,setVideos]=useState({
    name: "Abcedfgggggg",
    verified: true,
  });

    function handleSubmit(e) {
        e.preventDefault();
        setVide(video);
    }
    function handleChange(e) {
        setVideos({
            ...video,[e.target.name]:e.target.value
        })
        console.log(e.target.value);
        
    }
  return (
    <form action="">
        <input type="text" onChange={handleChange} name='title' className='mb-4 text-black' /><br />
        {/* {videos.title} */}
        <input type="text" onChange={handleChange} className='mb-4 text-black' name='views' />
        <div>
        <button onClick={handleSubmit}
        // onClick={()=>{
        //  setVideos([...videos,{
        //   key: videos.length+1,
        //   name: "Demo js",
        //   title: "Namste Angular",
        //   views: "3M",
        //   verified: true,
        // }])
        // }}
        >Add video</button>
      </div>
    </form>
  )
}

export default AddVideo