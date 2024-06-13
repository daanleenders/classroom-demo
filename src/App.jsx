import "./App.css";

function App() {
  function gezicht() {
    window.location.href = "/gezicht";
  }
  function stickers() {
    window.location.href = "/stickers";
  }
  function video() {
    window.location.href = "/video";
  }
  return (
    <>
      <div>
        <h1>Hallo</h1>
        <button onClick={gezicht}>Gezicht</button>
        <button onClick={stickers}>Stickers</button>
        <button onClick={video}>Video</button>
      </div>
    </>
  );
}

export default App;
