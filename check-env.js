// Test script to verify environment variables
require('dotenv').config({ path: '.env' })

console.log('=================================')
console.log('Environment Variables Check')
console.log('=================================\n')

const requiredVars = {
  'OPENAI_API_KEY': process.env.OPENAI_API_KEY,
  'GROQ_API_KEY': process.env.GROQ_API_KEY,
}

const optionalVars = {
  'TAVILY_API_KEY': process.env.TAVILY_API_KEY,
  'OPEN_WEATHER_API_KEY': process.env.OPEN_WEATHER_API_KEY,
  'OPEN_WEATHER_API_ENDPOINT': process.env.OPEN_WEATHER_API_ENDPOINT,
}

console.log('Required Variables (Must be set):')
let allRequired = true
for (const [key, value] of Object.entries(requiredVars)) {
  const isSet = value && value !== 'your_openai_api_key_here' && value !== 'your_groq_api_key_here'
  console.log(`  ${isSet ? '✅' : '❌'} ${key}: ${isSet ? 'Set' : 'NOT SET'}`)
  if (!isSet) allRequired = false
}

console.log('\nOptional Variables (For extra features):')
for (const [key, value] of Object.entries(optionalVars)) {
  const isSet = value && !value.includes('your_') && value !== ''
  console.log(`  ${isSet ? '✅' : '⚠️ '} ${key}: ${isSet ? 'Set' : 'Not set'}`)
}

console.log('\n=================================')
if (allRequired) {
  console.log('✅ All required variables are set!')
  console.log('You can now run: pnpm dev')
} else {
  console.log('❌ Some required variables are missing!')
  console.log('Please edit .env file and add your API keys.')
  console.log('\nGet API keys from:')
  console.log('  - OpenAI: https://platform.openai.com/api-keys')
  console.log('  - Groq: https://console.groq.com/keys')
}
console.log('=================================')
