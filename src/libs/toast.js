import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const toast = async (message, duration) => {
  return Toastify({
    text: message,
    duration: duration,
  }).showToast();
};
