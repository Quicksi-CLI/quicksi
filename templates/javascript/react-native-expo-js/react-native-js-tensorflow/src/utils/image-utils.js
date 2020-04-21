import * as ImageManipulator from "expo-image-manipulator";
import * as tf from "@tensorflow/tfjs";
import { decode as jpegDecode } from "jpeg-js";
import { decode as pngDecode } from "upng-js";

export function resizeImage(uri) {
  return ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 400, height: 300 } }],
    { base64: true }
  );
}

export function removeAlphaChannel(width, height, data) {
  const buffer = new Uint8Array(width * height * 3);
  let offset = 0; // offset into original data
  for (let i = 0; i < buffer.length; i += 3) {
    buffer[i] = data[offset];
    buffer[i + 1] = data[offset + 1];
    buffer[i + 2] = data[offset + 2];
    offset += 4;
  }
  return tf.tensor3d(buffer, [height, width, 3]);
}

export function imageToTensor(rawImageData, { type } = {}) {
  const { width, height, data } =
    type === "png"
      ? pngDecode(rawImageData)
      : jpegDecode(rawImageData, { useTArray: true });
  return removeAlphaChannel(width, height, data);
}

export function base64ImageToTensor(base64) {
  const rawImageData = tf.util.encodeString(base64, "base64");
  const { width, height, data } = jpegDecode(rawImageData, { useTArray: true });
  return removeAlphaChannel(width, height, data);
}
