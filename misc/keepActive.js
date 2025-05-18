async function handleKeepActive(req, res) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Keep-alive ping received`);
    res.status(200).json({ 
        status: "active",
        timestamp: timestamp
    });
}

module.exports = handleKeepActive; 