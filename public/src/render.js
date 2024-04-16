export const RenderMassege = (object, message, nu) => {
  const template_mess = `<div class="p-1 mb-1 bg-#COLOR text-light rounded">
      <p class="mb-0"><strong>#NAME</strong></p>
      <p class="mb-0">#TEXT</p>
      <p class="small text-end mb-0 text-light">#TIME</p>
    </div>`;
  //console.log(object.innerHTML);
  //console.log(message);
  let div_message = template_mess
    .replace("#NAME", message.name)
    .replace("#TEXT", message.text)
    .replace("#TIME", message.time);
  if (message.name === nu) {
    div_message = div_message.replace("#COLOR", "success");
  } else {
    div_message = div_message.replace("#COLOR", "dark");
  }

  let html = object.innerHTML + div_message;
  return html;
};

export const RenderMassegeList = (object, message, nu) => {
  const template_mess = `<div class="p-1 mb-1 bg-#COLOR text-light rounded">
      <p class="mb-0"><strong>#NAME</strong></p>
      <p class="mb-0">#TEXT</p>
      <p class="small text-end mb-0 text-light">#TIME</p>
    </div>`;
  let html = "";
  message.forEach((message) => {
    html += template_mess
      .replace("#NAME", message.name)
      .replace("#TEXT", message.text)
      .replace("#TIME", message.time);
    if (message.name === nu) {
      html = html.replace("#COLOR", "success");
    } else {
      html = html.replace("#COLOR", "dark");
    }
  });
  return html;
};
