const express = require("express");
const router = express.Router();

const {createProblem, getAllProblems, getProblemById, updateProblem, deleteProblem} = require("../controllers/ProblemController");
const { authenticate, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authenticate, isAdmin, createProblem);
router.get("/", authenticate, getAllProblems);
router.get("/:id", authenticate, getProblemById);
router.put("/:id", authenticate, isAdmin, updateProblem);
router.delete("/:id", authenticate, isAdmin, deleteProblem);

module.exports = router;