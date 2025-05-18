const { PicoLLM } = require("@picovoice/picollm-node");
const pickLLM = require("./pickLLM");
require("dotenv").config();

async function handleUnyapify(req, res) {
    const { text } = req.body;

    if (!text || text.trim().length === 0) {
        return res.status(400).json({
            status: "ERROR",
            error: "No text provided",
        });
    }

    if(text.trim().split(/\s+/).length < 6) {
        return res.status(400).json({
            status: "ERROR",
            error: "Sentence is too short",
        });
    }

    try {
        const llmPath = pickLLM();
        
        const pllm = new PicoLLM(
            process.env.ACCESS_KEY,
            llmPath
        );

        const prompt = `Shorten this sentence without adding extra info or quotes. Only output the short sentence:\n${text}\nShort version:`;

        let result = "";

        const response = await pllm.generate(prompt, {
            streamCallback: (token) => {
                process.stdout.write(token);
                result += token;

                if (token.includes("\n")) {
                    pllm.interrupt();
                }
            },
            maxTokens: 100,
        });

        console.log("\nRaw output:", result);

        const final_match = ((result.trim()).split('\n')[0]).replaceAll("<|eot_id|>", "");

        console.log("Final shortened sentence:", final_match);

        res.status(200).json({ 
            text: final_match,
            model: llmPath
        });
    } catch (err) {
        console.error("Error during generation:", err);
        res.status(500).json({ error: "Failed to generate response" });
    }
}

module.exports = handleUnyapify; 