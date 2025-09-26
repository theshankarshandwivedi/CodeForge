const express = require("express");
const { create } = require("../models/Problem");
const {createHackathon, getAllHackathons, getHackathonById, updateHackathon, deleteHackathon} = require("../controllers/HackathonController");
const { authenticate, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authenticate, isAdmin, createHackathon);
router.get("/", authenticate, getAllHackathons);
router.get("/:id", authenticate, getHackathonById);
router.put("/:id", authenticate, isAdmin, updateHackathon);
router.delete("/:id", authenticate, isAdmin, deleteHackathon);

module.exports = router;