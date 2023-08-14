/* eslint-disable react/prop-types */
import "../App.css"
import Border from "./Border";
const Video = (props) => {
  const {name,title,views,verified} = props;
  return (
    <Border className="mt-5">    <div className="card">
      <img src="https://picsum.photos/300" alt="" />
      {/* <p style={{ background: "red", padding: "23px" }}>{name}</p> */}
      <p>{name}</p>
      <p className="title">{title} {verified?'✅':''}</p>
      <p className="views">{views}</p>
    </div>
    </Border>

  );
};

export default Video;
// Video.PropTypes = {
//   name: PropTypes.string.isRequired,
// };
