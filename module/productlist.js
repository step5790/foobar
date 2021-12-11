"use strict";

import { registerModal } from "./productModal";
import { registerCart } from "./productCart";
import { scrollProductlist } from "./scrollProductlist";

window.addEventListener("DOMContentLoaded", init);

function init() {
  registerModal();
  registerCart();
  scrollProductlist();
}
