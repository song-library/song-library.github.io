import { html } from "https://unpkg.com/lit-html?module";
import { login } from "../api/data.js";
import notify from "./notify.js";

const logTemplate = (onSubmit) => html`<div class="login">
  <div class="login-page">
    <div class="form">
      <form @submit=${onSubmit} class="login-form">
        <input id="loginUsername" type="text" placeholder="username" name="username" />
        <input id="loginPassword" type="password" placeholder="password" name="password" />
        <p id="msgField" class="wrongCredentials"></p>
        <button class="loginBtn">login</button>
        <p class="message">Not registered? <a href="/register" class="signToggle">Create an account</a></p>
      </form>
    </div>
  </div>
</div>`;

export async function loginPage(ctx) {
  ctx.render(logTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    if (username == "" || password == "") {
      return notify("All fields are required.");
    }

    await login(username, password);
    ctx.page.redirect("/catalogue");
    ctx.setNavigation();
  }
}
