// index.js

//COMMON JS
//const ClientListBusiness = require("./client-list-business");

//ES6
import * as ClientListBusiness from "./client-list-business";

window.onload = function () {
  ClientListBusiness.printClientsAccounts();
};