const express = require('express');
const axios = require('axios');

const judge = async (req, res) => {
  try {
    const { source_code, language_id, stdin } = req.body;
    console.log(req.body);

    // Judge0 endpoint (free version)
    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        source_code,
        language_id,
        stdin,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY, // keep in .env
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Code execution failed" });
  }
}

module.exports = { judge };