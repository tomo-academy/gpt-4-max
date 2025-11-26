# GPT-4 Max Setup Guide

## Error Fix: "Oops, something went wrong!"

The error you encountered (Digest: 1172394644) occurs when sending messages because the required API keys are not configured. Here's how to fix it:

## Required Setup Steps

### 1. Install Dependencies

```bash
cd "D:\New folder (57)\gpt-4-max"
pnpm install
```

If you don't have pnpm installed, install it first:
```bash
npm install -g pnpm
```

### 2. Configure Environment Variables

The `.env` file has been created for you. You need to add your API keys:

#### Required API Keys (Minimum Setup):

1. **OpenAI API Key** (REQUIRED - This is causing your error!)
   - Get it here: https://platform.openai.com/api-keys
   - Sign up/login to OpenAI
   - Create a new API key
   - Replace `your_openai_api_key_here` in `.env` file with your actual key
   - Example: `OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx`

2. **GROQ API Key** (REQUIRED)
   - Get it here: https://console.groq.com/keys
   - Sign up/login to Groq
   - Create a new API key
   - Replace `your_groq_api_key_here` in `.env` file
   - Example: `GROQ_API_KEY=gsk_xxxxxxxxxxxxx`

#### Optional API Keys (For Additional Features):

3. **Tavily API Key** (For web search functionality)
   - Get it here: https://tavily.com/
   - Sign up and get your API key
   - Replace `your_tavily_api_key_here` in `.env` file

4. **OpenWeather API Key** (For weather functionality)
   - Get it here: https://openweathermap.org/api
   - Sign up and get your API key
   - Replace `your_openweather_api_key_here` in `.env` file

### 3. Run the Application

```bash
pnpm dev
```

The application will start on http://localhost:3000

### 4. Test the Chat

Once the server is running:
1. Open http://localhost:3000 in your browser
2. Try sending a message
3. The error should now be resolved!

## Troubleshooting

### Error: "OPENAI_API_KEY is not set"
- Make sure you've added your OpenAI API key to the `.env` file
- Restart the development server after adding the key

### Error: "Failed to fetch data" (Weather)
- Make sure `OPEN_WEATHER_API_KEY` is set
- Weather feature requires both the API key and the endpoint to be configured

### Error: "Rate limited"
- You've exceeded the API rate limits
- Wait a few minutes and try again
- Consider upgrading your OpenAI API plan

### Code Interpreter Not Working
- The code interpreter requires a separate server running on http://localhost:8080
- Follow the instructions here: https://github.com/cohere-ai/cohere-terrarium/

## Features Available

Once properly configured, you can:
- ✅ Chat with GPT-4 Turbo
- ✅ Send images and get AI analysis
- ✅ Search the web (requires Tavily API key)
- ✅ Get weather information (requires OpenWeather API key)
- ✅ Execute Python code (requires code interpreter server)

## Quick Start (Minimum Setup)

To get the basic chat working, you only need:
1. Install dependencies: `pnpm install`
2. Add OPENAI_API_KEY to `.env`
3. Add GROQ_API_KEY to `.env`
4. Run: `pnpm dev`

That's it! The web search, weather, and code interpreter features are optional and can be configured later.
