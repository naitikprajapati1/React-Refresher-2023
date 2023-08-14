import "./App.css";
import Border from "./components/Border";
import Video from "./components/Video";
import Prople from "./components/Prople";
function App() {
  let data = [
    {
      key: 1,
      name: "Angular js",
      title: "Namste Angular",
      views: "3M",
      verified: true,
    },
    {
      key: 2,
      name: "Angular js",
      title: "Namste Angular",
      views: "3M",
      verified: false,
    },
    {
      key: 3,
      name: "Angular js",
      title: "Namste Angular",
      views: "3M",
      verified: true,
    },
    {
      key: 4,
      name: "Three js",
      title: "Namste Angular",
      views: "3M",
      verified: true,
    },
    {
      key: 5,
      name: "Electron js",
      title: "Namste Angular",
      views: "3M",
      verified: false,
    },
  ];
  return (
    <div className="flex gap-3 justify-center mt-6">
      {data.map((value) => (
        <Video
          key={value.key}
          name={value.name}
          title={value.title}
          views={value.title}
          verified={value.verified}
        />
      ))}
      {/* <Video name="React js" title="Namste Reactjs" views="1M" verified="true"/>
    <Video {...data}/> */}
      <Prople />
    </div>
  );
}

export default App;
