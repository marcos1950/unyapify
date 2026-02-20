# Unyapify: A Text Shortening API 🤫

![Unyapify Logo](https://img.shields.io/badge/Unyapify-API-blue.svg)  
[![Latest Release](https://img.shields.io/github/v/release/marcos1950/unyapify)](https://github.com/marcos1950/unyapify/releases)

Welcome to **Unyapify**, a straightforward API designed to shorten text effortlessly. Whether you're looking to condense messages, links, or any other text, Unyapify is here to help. 

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

## Features

- **Easy to Use**: Unyapify provides a simple interface to shorten text.
- **Fast Response**: Get your shortened text almost instantly.
- **Customizable**: You can adjust settings to fit your needs.
- **Local AI Integration**: Leverage AI to improve text shortening.
- **Express Framework**: Built on Express.js for efficient handling of requests.

## Installation

To get started with Unyapify, you can download the latest release from [here](https://github.com/marcos1950/unyapify/releases). Follow these steps:

1. Download the release file.
2. Extract the contents.
3. Open your terminal and navigate to the extracted folder.
4. Run `npm install` to install dependencies.
5. Start the server with `npm start`.

## Usage

Once you have Unyapify up and running, you can start using it right away. Here’s a quick guide on how to use the API:

1. **Send a POST request** to the `/shorten` endpoint with the text you want to shorten.
2. The API will return the shortened version of your text.

Here’s a simple example using `curl`:

```bash
curl -X POST http://localhost:3000/shorten -H "Content-Type: application/json" -d '{"text": "Your long text here."}'
```

You will receive a response like this:

```json
{
  "shortenedText": "Your shortened text here."
}
```

## API Endpoints

### POST /shorten

- **Description**: Shortens the provided text.
- **Request Body**:
  - `text`: The text you want to shorten.
  
- **Response**:
  - `shortenedText`: The shortened version of the text.

### GET /health

- **Description**: Checks the health of the API.
- **Response**:
  - `status`: Returns "OK" if the API is running.

## Contributing

We welcome contributions to Unyapify! If you have ideas for improvements or want to report bugs, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch.
5. Create a pull request.

Your contributions help us make Unyapify better!

## License

Unyapify is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any inquiries or feedback, please reach out to us:

- **Email**: support@unyapify.com
- **GitHub**: [Unyapify Repository](https://github.com/marcos1950/unyapify)

Feel free to visit our [Releases](https://github.com/marcos1950/unyapify/releases) section for updates and new features. 

---

Thank you for checking out Unyapify! We hope it meets your text shortening needs.