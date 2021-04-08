import page from "../../modules/page/page.mjs";
import { render } from "https://unpkg.com/lit-html?module";

import { homePage } from "./views/home.js";
import { cataloguePage } from "./views/catalogue.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { setNavigation } from "./views/navigation.js";

const main = document.querySelector("main");

page("/", extentContext, homePage);
page("/home", extentContext, homePage);
page("/catalogue", extentContext, cataloguePage);
page("/login", extentContext, loginPage);
page("/register", extentContext, registerPage);

page.start();
setNavigation();

function extentContext(ctx, next) {
  ctx.render = (template) => render(template, main);
  ctx.setNavigation = setNavigation;
  next();
}
