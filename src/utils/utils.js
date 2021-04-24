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

