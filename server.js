const path = require("path");
const express = require("express");
const session = require("express-session");
const { sequelize, sessionConfig } = require("./config/connection");
const exphbs = require("express-handlebars");
const controllers = require("./controllers");
const helpers = require("./utils/helper.js");