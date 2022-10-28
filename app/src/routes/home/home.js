"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./index.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;
