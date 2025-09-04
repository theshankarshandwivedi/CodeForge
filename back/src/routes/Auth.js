const { Router } = require("express");
const {authenticate} = require("../middlewares/authMiddleware")
const {registerUser, login, fetchUser} = require("../controllers/AuthController");

const router = Router();

router.post("/auth/register", authenticate, registerUser);
router.get("/auth/login", authenticate, login);
router.get("/auth/profile", authenticate, fetchUser);

module.exports = router;