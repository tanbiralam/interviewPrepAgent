# interviewPrepAgent 🤖🎙️

[![npm version](https://img.shields.io/badge/npm-v0.1.0-blue?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/prepwise)  
[![License](https://img.shields.io/github/license/tanbiralam/interviewPrepAgent?style=for-the-badge)](https://github.com/tanbiralam/interviewPrepAgent/blob/main/LICENSE)  
[![Build Status](https://img.shields.io/github/actions/workflow/status/tanbiralam/interviewPrepAgent/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/tanbiralam/interviewPrepAgent/actions)  
[![GitHub stars](https://img.shields.io/github/stars/tanbiralam/interviewPrepAgent?style=social)](https://github.com/tanbiralam/interviewPrepAgent/stargazers)

---

**interviewPrepAgent** (code-named *Prepwise*) is an AI-powered platform that helps candidates prepare for job interviews using realistic voice-based mock interviews. It leverages Vapi AI voice agents and Google Gemini's generative AI capabilities to simulate the interview experience, provide instant feedback, and track progress — all wrapped in a modern, responsive Next.js application with Firebase-backed authentication and persistence.

---

## ✨ Features

- **🤖 AI-Powered Voice Interviews:** Conduct interviews with conversational AI voice agents powered by Vapi.
- **📝 Tailored Question Generation:** Generate customized interview questions based on job role, experience level, and tech stack.
- **🗣️ Real-Time Voice Interaction:** Speak your answers and receive dynamic voice prompts in a natural flow.
- **📊 Detailed Feedback Reports:** Get comprehensive performance feedback scored on communication, technical knowledge, problem-solving, and cultural fit.
- **🔐 Firebase Authentication & Data Storage:** Securely manage users and interview histories with Firebase and Firebase Admin.
- **🎨 Modern UI/UX:** Responsive, clean design built with Next.js, Tailwind CSS, and Radix UI components.
- **⚙️ Flexible Configuration:** Easily configure AI workflows, API keys, and environment variables.
- **📱 Fully Responsive:** Seamless experience on desktop and mobile devices.

---

## 📋 Prerequisites

Ensure the following tools and accounts are set up before running the project:

1. **Node.js >= 18.x**  
   Install from [nodejs.org](https://nodejs.org/en/download/)

2. **npm (>=8.x)**  
   Comes bundled with Node.js. Verify with `npm -v`

3. **Git**  
   Install from [git-scm.com](https://git-scm.com/downloads)

4. **Firebase Project**  
   Setup a Firebase project with Authentication and Firestore enabled. Obtain credentials from [Firebase Console](https://console.firebase.google.com/)

5. **Vapi AI Account**  
   Register and create workflows at [Vapi AI](https://vapi.ai/)

6. **Google Cloud Account with Generative AI Access**  
   Enable Google Gemini API and generate API key at [Google Cloud Console](https://console.cloud.google.com/)

---

## 🚀 Installation

1. **Clone the repository**
```bash
git clone https://github.com/tanbiralam/interviewPrepAgent.git
cd interviewPrepAgent
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```
Then fill in `.env` with your actual API keys and Firebase credentials.

---

## 💻 Usage

Below are practical examples demonstrating how to interact with interviewPrepAgent's core functionalities using TypeScript. All examples use the current OpenAI chat completions API best practices and include robust error handling.

---

### 1. Generate Interview Questions (Basic)

Generates a list of tailored interview questions based on user inputs.

```typescript
import { chat } from 'ai'; // ai package from dependencies

interface GenerateQuestionsParams {
  role: string;
  level: string;
  techstack: string[];
  focus: 'behavioral' | 'technical' | 'balanced';
  amount: number;
}

async function generateInterviewQuestions(params: GenerateQuestionsParams): Promise<string[]> {
  const { role, level, techstack, focus, amount } = params;
  
  const prompt = `Prepare questions for a job interview.
The job role is ${role}.
The job experience level is ${level}.
The tech stack used in the job is: ${techstack.join(", ")}.
The focus between behavioural and technical questions should lean towards: ${focus}.
The amount of questions required is: ${amount}.
Please return only the questions, without any additional text.
The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
Return the questions formatted like this:
["Question 1", "Question 2", "Question 3"]

Thank you! <3
`;

  try {
    const response = await chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are an expert job interviewer generating relevant questions.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error('No response content from AI.');

    // Parse the returned string as JSON
    const questions = JSON.parse(content) as string[];
    return questions;

  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
}

// Example usage:
(async () => {
  const questions = await generateInterviewQuestions({
    role: 'Frontend Developer',
    level: 'Mid-level',
    techstack: ['React', 'TypeScript', 'Tailwind CSS'],
    focus: 'technical',
    amount: 5,
  });
  console.log('Generated Questions:', questions);
})();
```

---

### 2. Conducting AI Interview with Vapi Voice Agent (Advanced)

Demonstrates initializing a Vapi AI web session and handling voice interaction events.

```typescript
import { VapiWebClient } from '@vapi-ai/web';

async function startVoiceInterview() {
  const token = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
  const workflowId = process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID;

  if (!token || !workflowId) {
    throw new Error('Missing Vapi API token or workflow ID in environment variables.');
  }

  try {
    const client = new VapiWebClient({ token });

    // Connect to the specified workflow (interview flow)
    await client.connect(workflowId);

    // Listen for voice assistant prompts
    client.on('speech', (text: string) => {
      console.log('Vapi says:', text);
    });

    // Listen for user response events
    client.on('userResponse', (response: string) => {
      console.log('User responded:', response);
    });

    // Start the interview session
    await client.start();

    // You can also send custom messages to the workflow
    // await client.sendMessage('Custom message');

  } catch (error) {
    console.error('Error during Vapi voice interview:', error);
    throw error;
  }
}

// Run the voice interview session
startVoiceInterview();
```

---

### 3. Analyze Interview Feedback Using Google Gemini AI (Advanced)

Requests detailed feedback on a candidate's interview transcript, with structured scoring.

```typescript
import { chat } from 'ai';

interface FeedbackScores {
  communicationSkills: number;
  technicalKnowledge: number;
  problemSolving: number;
  culturalRoleFit: number;
  confidenceClarity: number;
}

async function analyzeInterviewFeedback(transcript: string): Promise<FeedbackScores> {
  const prompt = `
You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.

Transcript:
${transcript}

Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
- **Communication Skills**: Clarity, articulation, structured responses.
- **Technical Knowledge**: Understanding of key concepts for the role.
- **Problem-Solving**: Ability to analyze problems and propose solutions.
- **Cultural & Role Fit**: Alignment with company values and job role.
- **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
`;

  try {
    const response = await chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a professional interviewer analyzing a mock interview.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.5,
      max_tokens: 600,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error('No feedback content received.');

    // Parse scores from AI response using regex or structured JSON if possible
    // Example parsing assuming AI returns JSON with scores:
    const scoresMatch = content.match(/\{[\s\S]*\}/);
    if (!scoresMatch) throw new Error('Feedback format unexpected.');

    const