const express = require("express");
const {authenticate} = require("../middlewares/authMiddleware")
const {
  registerUser,
  login,
  fetchUser,
  googleLogin,
} = require("../controllers/AuthController");
const {judge} = require("../controllers/JudgeController");

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", login);
router.post("/auth/google", googleLogin);
router.get("/auth/profile", authenticate, fetchUser);
router.post("/judge", judge);

module.exports = router;