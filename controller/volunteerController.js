const express = require("express");
const Volunteer = require("../models/volunteers");

const asyncHandler = require("express-async-handler");
//name,email,password
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401);
    throw new Error("Insufficient credentials");
  } else {
    const user = await Volunteer.findOne({ email: email });
    if (user.password == password) {
      res.status(200).json("Logged in");
    } else {
      res.status(403).json("Unauthorized");
    }
  }
});

const changePassword = asyncHandler(async (req, res) => {});

module.exports = { login };
