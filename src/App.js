import logo from "./logo.svg";
import "./App.css";
import {  useState } from "react";
import {
  playVideoFromCamera,
} from "./utils/utils";
import CameraVisualizer from "./componentes/CameraVisualizer";
function App() {
  const [visible, setVisible] = useState(false);
  // Updates the select element with the provided set of cameras

  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            className="button primary"
            onClick={() => {
              setVisible(playVideoFromCamera());
            }}
          >
            Iniciar video
          </button>
          <button
            className="button secondary"
            onClick={() => {
              const videoElement = document.querySelector("video#localVideo");
              videoElement.srcObject = null;
              setVisible(false);
              window.location.reload();
            }}
          >
            Cerrar cámara
          </button>
        </div>

        <CameraVisualizer visible={visible} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*  <select id="availableCameras"></select> */}
      </header>
    </div>
  );
}

export default App;
