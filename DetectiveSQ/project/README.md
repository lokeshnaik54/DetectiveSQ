# DetectiveSQ Version 2

An AI-powered Chrome extension analyzer for security and privacy risks.

## Features

- **Comprehensive manifest analysis**
- **JavaScript static analysis**
- **HTML content analysis**
- **AI-powered risk assessment using GPT models**
- **Sentiment analysis**
- **Detailed security and privacy reports**

## Installation

### Prerequisites

Before installing, ensure you have the following:

1. **Node.js** (version 14 or higher) and **npm** installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).
2. A working knowledge of Chrome extensions and their directory structures.
3. Git (optional, for cloning the repository).

### Steps to Install

1. Clone the repository (if applicable):
   ```bash
   git clone https://github.com/yourusername/DetectiveSQ.git
   cd DetectiveSQ
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   This command will install all required packages listed in the `package.json` file.

3. Build the project (if necessary):
   ```bash
   npm run build
   ```

4. Start the server:
   ```bash
   npm start
   ```

The application will now be running and ready to analyze Chrome extensions.

## Usage

Send a POST request to `/analyze` with the path to the Chrome extension:

```json
{
  "extensionPath": "/path/to/extension"
}
```

## Analysis Components

### Manifest Analysis
- Permission analysis
- Content script evaluation
- Background script assessment
- Host permission analysis

### JavaScript Analysis
- API usage detection
- Data access patterns
- Network call analysis
- Dangerous function detection

### HTML Analysis
- Script tag analysis
- Form evaluation
- External resource detection

### AI Analysis
- GPT-powered risk assessment
- Sentiment analysis
- Security recommendations

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License.
