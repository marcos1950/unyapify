const fs = require('fs');
const path = require('path');

function pickLLM() {
    const llmDir = path.join(__dirname, '..', 'llm');
    
    const files = fs.readdirSync(llmDir);
    
    const llmFiles = files.filter(file => 
        file.endsWith('.pllm') || file.endsWith('.llm')
    );

    if (llmFiles.length === 0)
        throw new Error('No LLM files found in the llm directory');

    const filesWithSizes = llmFiles.map(file => {
        const filePath = path.join(llmDir, file);
        const stats = fs.statSync(filePath);
        return {
            name: file,
            size: stats.size
        };
    }).sort((a, b) => b.size - a.size);

    const largestFile = filesWithSizes[0];
    console.log(`Using largest LLM: ${largestFile.name} (${(largestFile.size / (1024 * 1024)).toFixed(2)} MB)`);
    
    return path.join('llm', largestFile.name);
}

module.exports = pickLLM;
