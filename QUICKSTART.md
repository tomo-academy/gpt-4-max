# 🚀 Quick Start Guide

## The Error You're Seeing

The "Oops, something went wrong!" error happens because the app needs API keys to work.

## Fix in 3 Minutes

### 1️⃣ Install (1 minute)
```powershell
cd "D:\New folder (57)\gpt-4-max"
pnpm install
```

### 2️⃣ Get API Keys (2 minutes)

**OpenAI Key** (Required):
- Visit: https://platform.openai.com/api-keys
- Click "Create new secret key"
- Copy it (looks like: `sk-proj-...`)

**Groq Key** (Required):
- Visit: https://console.groq.com/keys  
- Click "Create API Key"
- Copy it (looks like: `gsk_...`)

### 3️⃣ Add Keys to .env File

Open `.env` file and paste your keys:

```env
OPENAI_API_KEY=sk-proj-paste_your_openai_key_here
GROQ_API_KEY=gsk_paste_your_groq_key_here
```

Save the file!

### 4️⃣ Start the App

```powershell
pnpm dev
```

### 5️⃣ Test It

Open: http://localhost:3000

Send a message - it should work now! ✅

---

## Need Help?

Run this to check if your API keys are set up correctly:
```powershell
pnpm check-env
```

## Still Not Working?

Common issues:
- ❌ Forgot to save .env file → Save it and restart (`Ctrl+C` then `pnpm dev`)
- ❌ Extra spaces in API key → Remove any spaces before/after the key
- ❌ Didn't copy full key → Make sure you copied the complete key
- ❌ No OpenAI credits → Add credits to your OpenAI account

---

For detailed instructions, see: `ERROR_FIX_SUMMARY.md`
