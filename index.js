const express = require("express");

// load commands
const handleUnyapify = require("./commands/unyapify");
const handleKeepActive = require("./misc/keepActive");
const handlePing = require("./misc/ping");

const app = express();

app.use(express.json());

// Funsies
app.post("/unyapify", handleUnyapify);

// pretty much to keep everything alive
app.post("/keepActive", handleKeepActive); // Invoke-WebRequest -Method POST -Uri http://localhost:3000/keepActive
app.get("/ping", handlePing); // Invoke-WebRequest -Uri http://localhost:3000/ping

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
