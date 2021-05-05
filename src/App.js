import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { playVideoFromCamera } from "./utils/utils";
import CameraVisualizer from "./componentes/CameraVisualizer";
import ButtonOpen from "./componentes/ButtonOpen";

const App = (props) => {
  const [visible, setVisible] = useState(false);
  const [listaResultado, setListaResultado] = useState([]);
  // Updates the select element with the provided set of cameras

  const handleOpen = () => {
    setVisible(playVideoFromCamera());
  };

  function sendParent(lista) {
    setListaResultado(lista);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ButtonOpen onClick={handleOpen} sendParent={sendParent} />

          <button className="button primary" onClick={handleOpen}>
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

        <CameraVisualizer visibleXXX={visible} />

        <p>Esto es una prueba de WebRTC</p>

        <ul>
          {listaResultado.map((resultadoItem, index) => (
            <li key={index + 1}> {resultadoItem.title} </li>
          ))}
        </ul>

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
};

export default App;
