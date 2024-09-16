import handle from "./handle.js";
import prompt from "prompt";
import qrcodePrompt from "../../prompts-schema/schema-qrcode.js";

async function createQRCode() {
  prompt.get(qrcodePrompt, (err, choose) => {
    handle(err, choose);
  });
  prompt.start();
}

export default createQRCode;
