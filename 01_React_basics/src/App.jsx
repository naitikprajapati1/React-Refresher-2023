import "./App.css";
function App() {
  console.log("component rendered");
  return (
    <>
      <h3 className="text-3xl">Namste reactjs 😊</h3>
      <Demo />
    </>
  );
}

function Demo() {
  return <h3>Demo hai ye :)</h3>;
}
export default App;
