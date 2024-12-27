# DetectiveSQ Version 2

An AI-powered Chrome extension analyzer for security and privacy risks.

## Features

- Comprehensive manifest analysis
- JavaScript static analysis
- HTML content analysis
- AI-powered risk assessment using GPT models
- Sentiment analysis
- Detailed security and privacy reports

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

Then send a POST request to `/analyze` with the extension path:

```json
{
  "extensionPath": "/path/to/extension"
}
```

## Analysis Components

1. **Manifest Analysis**
   - Permission analysis
   - Content script evaluation
   - Background script assessment
   - Host permission analysis

2. **JavaScript Analysis**
   - API usage detection
   - Data access patterns
   - Network call analysis
   - Dangerous function detection

3. **HTML Analysis**
   - Script tag analysis
   - Form evaluation
   - External resource detection

4. **AI Analysis**
   - GPT-powered risk assessment
   - Sentiment analysis
   - Security recommendations

## Contributing

Contributions are welcome! Please read our contributing guidelines first.

## License

MIT