const express = require("express");
const route = express.Router();

route.get("/", (req, res) => res.render("index"));
route.get("/room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) => res.render("create-pass"));
//route.get("/room/:room/:question/:action", (req, res) =>
//  res.render("exemplo", { req })
//);

module.exports = route;
