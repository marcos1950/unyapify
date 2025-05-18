function handlePing(req, res) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Ping received`);
    res.status(200).json({ 
        status: "active",
        timestamp: timestamp
    });
}

module.exports = handlePing; 