const express = require("express");

const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin");
const Volunteer = require("../models/volunteers");
//@desc Create a new admin
//@route POST /admin/register
//@access private
const createAdmin = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  } else {
    const newAdmin = await Admin.create({
      name: username,
      email,
      password,
    });
    res.status(201).json(newAdmin);
  }
});
//@desc Delete an admin
//@route DELETE /admin/remove/:id
//@access private
const deleteAdmin = asyncHandler(async (req, res) => {
  const adminToDelete = await Admin.findOne({ _id: req.params.id });
  if (!adminToDelete) {
    res.status(404);
    throw new Error("Contact not found");
  } else {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json(adminToDelete);
  }
});
//@desc Create an user
//@route POST /admin/createUser
//@access private
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  } else {
    const volunteer = await Volunteer.create({
      name,
      email,
      password,
    });
    res.status(201).json(volunteer);
  }
});

//@desc Return all users
//@route GET /admin/listVolunteers
//@access private
const listVolunteers = asyncHandler(async (req, res) => {
  const users = await Volunteer.find();
  if (!users) {
    res.status(404).json("No users found");
  } else {
    res.json(users);
  }
});
//@desc Delete an users
//@route DELETE /admin/deleteUser/:email
//@access private
const deleteVolunteer = asyncHandler(async (req, res) => {
  const volunteerToDelete = await Volunteer.findOne({
    email: req.params.email,
  });
  if (!volunteerToDelete) {
    res.status(404);
    throw new Error("Volunteer not found");
  } else {
    await Volunteer.findByIdAndDelete(volunteerToDelete._id);
    res.status(200).json(volunteerToDelete);
  }
});

module.exports = {
  createAdmin,
  deleteAdmin,
  createUser,
  listVolunteers,
  deleteVolunteer,
};
