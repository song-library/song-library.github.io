import { html, render } from "https://unpkg.com/lit-html?module";

import toggleAdd from "../utility/toggleAdd.js";
import toggleDelete from "../utility/toggleDelete.js";
import { logout } from "../api/data.js";

const navEl = document.querySelector("nav");
const page = window.page;

const navTemplate = (user, onLogout, toggleAdd, toggleDelete) => html`
  <h1 class="common">Library</h1>
  ${user
    ? html`<div>
        <div class="welcomeAndSignOut">
          <label>Welcome, ${user}</label>
          <button @click=${onLogout} class="signoutButton">SignOut</button>
          <button @click=${toggleAdd} id="addBtn">ADD</button>
          <button @click=${toggleDelete} id="deleteBtn">DELETE</button>
        </div>
        <div class="counters">
          <label id="artistCount"></label>
          <label id="songCount"></label>
        </div>
      </div>`
    : ""}
`;

export function setNavigation() {
  const user = sessionStorage.getItem("username");
  render(navTemplate(user, onLogout, toggleAdd, toggleDelete), navEl);

  async function onLogout() {
    await logout();
    page.redirect("/home");
    setNavigation();
  }
}
