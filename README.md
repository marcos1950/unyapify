# unyapify
An API that shortens a sentence as short as possible using Local AI.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make an account on [picovoice.ai](https://console.picovoice.ai/) and grab your access key

3. On the same site download an LLM from the [picoLLM](https://console.picovoice.ai/picollm) page, and drop it in to the llm folder.

4. Change the access key in the .env file

5. Start the server:
```bash
npm start
```

## API Usage

### Shorten a text
**Endpoint:** POST `/unyapify`

## Example using powershell
```bash
Invoke-WebRequest -Method POST `
   -Headers @{"Content-Type"="application/json"} `
   -Body '{"text":"I love cats with all my heart I wouldnt know what to do without them"}' `
   -Uri http://localhost:3000/unyapify
```

Output
`{"text":"I love cats, they're my heart's desire"}`

- Tested using llama-3.2-1b-instruct-430.pllm

---
**Error Response (400 Bad Request):**
```json
{
    "error": "No text provided"
}
```