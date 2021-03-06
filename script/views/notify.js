import { html, render } from "https://unpkg.com/lit-html?module";

const notifyTemplate = (msg) => html` <div id="errorBox" class="notification">
  <span>${msg}</span>
</div>`;

export default async function notify(msg) {
  const notification = document.querySelector("#notifications");
  render(notifyTemplate(msg), notification);
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}
