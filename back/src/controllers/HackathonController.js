const express = require("express");
const Hackathon = require("../models/Hackathon");
const e = require("express");

exports.createHackathon = async (req, res) => {
  try {
    const hackathon = new Hackathon(req.body);
    await hackathon.save();
    res.status(201).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllHackathons = async (req, res) => {
  try {
    const hackathons = await Hackathon.find();  
    res.status(200).json(hackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHackathonById = async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);
    if (!hackathon) {
      return res.status(404).json({ error: "Hackathon not found" });
    }
    res.status(200).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHackathon = async (req, res) => {
  try {
    const hackathon = await Hackathon.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!hackathon) {
      return res.status(404).json({ error: "Hackathon not found" });
    }
    res.status(200).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHackathon = async (req, res) => {
  try {
    const hackathon = await Hackathon.findByIdAndDelete(req.params.id);
    if (!hackathon) {
      return res.status(404).json({ error: "Hackathon not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


