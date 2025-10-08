const express = require("express");
const Problem = require("../models/Problem");

exports.createProblem = async (req, res) => {
    try{
        const problem = new Problem(req.body);
        await problem.save();
        res.status(201).json(problem);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.getAllProblems = async (req, res) => {
    try{
        const problems = await Problem.find().populate("hackathon");
        res.status(200).json(problems);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.getProblemById = async (req, res) => {
    try{
        const problem = await Problem.findById(req.params.id).populate("hackathon");
        if(!problem) return res.status(404).json({ error: "Problem not found" });
        res.status(200).json(problem);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.updateProblem = async (req, res) => {
    try{
        const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!problem) return res.status(404).json({ error: "Problem not found" });
        res.status(200).json(problem);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.deleteProblem = async (req, res) => {
    try{
        const problem = await Problem.findByIdAndDelete(req.params.id);
        if(!problem) return res.status(404).json({ error: "Problem not found" });
        res.status(204).send("Problem deleted successfully");
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

//a little different from the others
