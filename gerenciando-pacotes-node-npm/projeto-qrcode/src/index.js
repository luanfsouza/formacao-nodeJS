import createPassword from "./services/password/create.js";
import createQRCode from "./services/qr-code/create..js";
import mainPrompt from "./prompts-schema/schema-main.js";
import prompt from "prompt";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) {
      await createQRCode();
    }
    if (choose.select == 2) {
      await createPassword();
    }
  });
  prompt.start();
}
main();
