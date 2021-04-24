/**
 *
 * @param {"audio" | "video"} type
 * @returns la lista de dispositivos multiedia de un determinado tipo
 */
export async function getConnectedDevices(type) {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === type);
}

/**
 * @param {object} constraints
 * @returns los dispositivos que se logró tener acceso
 */
export const openMediaDevices = async (constraints) => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};

/**
 * LOCAL PLAYBACK
 *
 *
 */
export async function playVideoFromCamera() {
  try {
    const constraints = { video: true, audio: true };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const videoElement = document.querySelector("video#localVideo");
    videoElement.srcObject = stream;

    return true;
  } catch (error) {
    console.error("Error opening video camera.", error);
    return false;
  }
}
export async function closeCamera() {
  const constraints = { video: true, audio: true };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
}
