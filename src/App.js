import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getConnectedDevices, openMediaDevices } from "./utils/utils";

function App() {
  useEffect(async () => {
    try {
      //permisos de uso
      const stream = await openMediaDevices({ video: true, audio: true });
      console.log("Got MediaStream:", stream);

      //lista de perifiericos
      const videoCameras = await getConnectedDevices("videoinput");
      const micrphones = await getConnectedDevices("audioinput");
      console.log("Cameras found:", videoCameras);
      
      updateCameraList(videoCameras)
      console.log("micrphones found:", micrphones);

      //escuchar cambios, listeners
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
    navigator.mediaDevices.addEventListener("devicechange", (event) => {
      const newCameraList = getConnectedDevices("audio");
      updateCameraList(newCameraList);
    });
  });
  // Updates the select element with the provided set of cameras
  function updateCameraList(cameras) {
    const listElement = document.querySelector("select#availableCameras");
    console.log("select",listElement);
    listElement.innerHTML = "";
    cameras.map((camera) => {
        const cameraOption = document.createElement("option");
        cameraOption.label = camera.label;
        cameraOption.value = camera.deviceId;
        listElement.appendChild(cameraOption);
      })
      //.forEach((cameraOption) => listElement.add(cameraOption));
      //listElement.appendChild();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <select id="availableCameras"></select>
      </header>
    </div>
  );
}

export default App;
