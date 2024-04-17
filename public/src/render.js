const template_mess = `<div class="p-1 mb-1 bg-#COLOR text-light rounded">
    <p class="mb-0"><strong>#NAME</strong></p>
    <p class="mb-0">#TEXT</p>
    <p class="small text-end mb-0 text-light">#TIME</p>
  </div>`;
const template_newUser = `<div class="p-0 mb-1 bg-#COLOR text-light rounded">
    <p class="mb-0"> new user join chat: #NAME</p>
    <p class="small text-end mb-0 text-light">#TIME</p>
   </div>`;

export const RenderMassege = (object, message, nu) => {
  //console.log(object.innerHTML);
  //console.log(message);
  let div_message;
  if (message.text === "" && nu != message.name) {
    div_message = template_newUser
      .replace("#NAME", message.name)
      .replace("#COLOR", "secondary")
      .replace("#TIME", message.time);
  } else if (message.text === "" && nu == message.name) {
    div_message = "";
  } else {
    div_message = template_mess
      .replace("#NAME", message.name)
      .replace("#TEXT", message.text)
      .replace("#TIME", message.time);
    if (message.name === nu) {
      div_message = div_message.replace("#COLOR", "success");
    } else {
      div_message = div_message.replace("#COLOR", "dark");
    }
  }

  let html = object.innerHTML + div_message;
  return html;
};

export const RenderMassegeList = (object, message, nu) => {
  let html = "";
  message.forEach((message) => {
    if (message.text === "" && nu != message.name) {
      html += template_newUser
        .replace("#NAME", message.name)
        .replace("#COLOR", "secondary")
        .replace("#TIME", message.time);
    } else {
      html += template_mess
        .replace("#NAME", message.name)
        .replace("#TEXT", message.text)
        .replace("#TIME", message.time);
      if (message.name === nu) {
        html = html.replace("#COLOR", "success");
      } else {
        html = html.replace("#COLOR", "dark");
      }
    }
  });
  return html;
};
