import { RenderMassege, RenderMassegeList } from "./render.js";
import { userCheck, getMessage } from "./connection.js";

const login_div = document.getElementById("login");
const message_div = document.getElementById("message");
const message_area = document.getElementById("message_area");
const message_input = document.getElementById("message_input");

const nome_in = document.getElementById("nome");
const send_btn = document.getElementById("send");

let name_user;
const socket = io();

socket.on("update", (mes) => {
  //console.log(mes);
  message_area.innerHTML = RenderMassege(message_area, mes, name_user);
  message_area.scrollTop = message_area.scrollHeight;
});

document.getElementById("entra").onclick = async () => {
  name_user = nome_in.value;
  let result = await userCheck(name_user);
  //console.log(result);
  if (result.result === "ok") {
    nome_in.classList.remove("is-invalid");
    let text_result = await getMessage();
    console.log(text_result);
    message_area.innerHTML = RenderMassegeList(
      message_area,
      text_result.result,
      name_user,
    );
    message_area.scrollTop = message_area.scrollHeight;
    socket.emit("message", { name: name_user, text: "" });
    login_div.classList.add("d-none");
    message_div.classList.remove("d-none");
  } else {
    nome_in.classList.add("is-invalid");
  }
};

send_btn.onclick = () => {
  if (message_input.value !== "") {
    let message = {
      name: name_user,
      text: message_input.value,
    };
    message_input.value = "";
    //console.log(message);
    socket.emit("message", message);
  }
};

message_input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    send_btn.click();
  }
});
