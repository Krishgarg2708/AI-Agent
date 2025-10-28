# AI Agent using n8n + ChatGPT

This project is a custom AI Agent built using **n8n** and **OpenAI’s ChatGPT model**.  
It can respond intelligently to user queries, personalize responses, and remember the creator’s name.

---

##  Features
-  Natural conversation using ChatGPT
-  Personalized response (“Who made you?” → “Krish Garg”)
-  Extendable with memory, tools, and automation
-  Can connect to APIs like weather, Google Sheets, or Gmail
-  Simple setup with n8n — no coding required

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/my-ai-agent.git
cd my-ai-agent
```

### 2. Install n8n
You can use n8n:
- Locally via npm → `npm install n8n -g`
- Or via Docker → `docker run -it --rm -p 5678:5678 n8nio/n8n`

Then open n8n in your browser:  
👉 [http://localhost:5678](http://localhost:5678)

---

### 3. Import the Workflow
- Go to **n8n Dashboard → Workflows → Import from File**
- Select your exported `.json` file (AI Agent Workflow)
- Click **Activate**

---

### 4. Set Your API Keys
Create a `.env` file using the template below:

```bash
cp .env.example .env
```

Then fill in your **OpenAI API Key** inside `.env`.

---

### 5. Run It!
Trigger your workflow manually or connect it to a Webhook trigger node.

---

## Extend Features

You can easily add:
-  Memory (using n8n Data Store)
-  Weather API
-  Calculator node

---

## Developer Info
**Created by:** Krish Garg  
**Built with:** n8n + OpenAI GPT Model  
**Version:** 1.0  

---

## Note
-  Do **not** upload your real API keys.  
-  Share your `.json` workflow and `.env.example` only.  

---

##  License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file 
for details.
