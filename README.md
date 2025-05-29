```markdown
<div align="center">
  <br />
    <a href="https://www.youtube.com/watch?v=8GK8R77Bd7g" target="_blank">
      <img src="https://github.com/user-attachments/assets/1c0131c7-9f2d-4e3b-b47c-9679e76d8f9a" alt="Project Banner">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
     <a href="https://github.com/interviewPrepAgent" target="_blank"><img src="https://img.shields.io/github/stars/interviewPrepAgent?style=social" alt="GitHub Repo stars" /></a>
  </div>

  <h3 align="center">Prepwise: A job interview preparation platform powered by Vapi AI Voice agents</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 🚀 Project Overview

Prepwise is a cutting-edge job interview preparation platform designed to help you ace your next interview. Utilizing the power of Vapi AI voice agents and Google Gemini, Prepwise offers a realistic and interactive interview experience, complete with instant feedback to refine your skills. Built with Next.js, Firebase, and Tailwind CSS, Prepwise provides a sleek and modern user interface.

## ✨ Key Features

*   **🤖 AI-Powered Interviews:** Practice with realistic AI voice agents powered by Vapi.
*   **🗣️ Instant Feedback:** Receive immediate feedback on your interview performance.
*   **🎨 Modern UI/UX:** Enjoy a sleek and intuitive user interface built with Next.js and Tailwind CSS.
*   **🔐 Secure Authentication:** Secure user authentication managed by Firebase.
*   **📊 Interview Dashboard:** Track and manage your interview progress.
*   **📝 Customizable Interviews:**  Tailor interviews by role, experience level, and tech stack.
*   **🌐 Fully Responsive:**  Seamless experience across all devices.

## 🛠️ Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js (>=18.x):** [Download Node.js](https://nodejs.org/en/download/)
*   **npm (>=8.x):**  Comes with Node.js.  Verify with `npm -v`.
*   **Git:**  [Download Git](https://git-scm.com/downloads)

This project relies on the following key dependencies:

| Dependency                 | Version | Description                                                                          |
| -------------------------- | ------- | ------------------------------------------------------------------------------------ |
| `next`                     | `15.2.2` | The React Framework for Production.                                                    |
| `react`                    | `^19.0.0` | A JavaScript library for building user interfaces.                                  |
| `react-dom`                | `^19.0.0` | Serves as the entry point to the DOM or server-side rendering surfaces for React. |
| `firebase`                 | `^11.4.0` | A comprehensive suite of backend services from Google.                               |
| `tailwindcss`              | `^4`     | A utility-first CSS framework for rapidly styling web pages.                        |
| `@vapi-ai/web`              | `^2.2.4` |  Library for integrating Vapi AI voice agents.                                         |
| `ai`                       | `^4.1.61` |  Artificial Intelligence tools and utilities.                                          |
| `zod`                      | `^3.24.4` |  TypeScript-first schema validation with static type inference.                      |

And the following devDependencies:

| Dependency                  | Version | Description                                                                                    |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `@types/node`              | `^20`    | TypeScript definitions for Node.js.                                                            |
| `@types/react`             | `^19`    | TypeScript definitions for React.                                                              |
| `@types/react-dom`         | `^19`    | TypeScript definitions for React DOM.                                                          |
| `eslint`                    | `^9.27.0`  |  A JavaScript linting tool.                                                                    |
| `eslint-config-next`        | `15.2.2` |  ESLint configuration for Next.js projects.                                                   |
| `typescript`                | `^5`    | A superset of JavaScript that adds static typing.                                           |

## 📦 Installation Steps

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/interviewPrepAgent/interviewPrepAgent.git
    cd interviewPrepAgent
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**

    Create a `.env.local` file in the root of your project and populate it with your API keys and credentials:

    ```env
    NEXT_PUBLIC_VAPI_WEB_TOKEN=YOUR_VAPI_WEB_TOKEN
    NEXT_PUBLIC_VAPI_WORKFLOW_ID=YOUR_VAPI_WORKFLOW_ID

    GOOGLE_GENERATIVE_AI_API_KEY=YOUR_GOOGLE_GENERATIVE_AI_API_KEY

    NEXT_PUBLIC_BASE_URL=http://localhost:3000 # Or your deployed URL

    NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

    FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    FIREBASE_CLIENT_EMAIL=YOUR_FIREBASE_CLIENT_EMAIL
    FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_FIREBASE_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
    ```

    **Note:**

    *   Replace placeholders with your actual credentials.
    *   For Firebase private key, ensure to include the `\n` characters as shown.

    You can obtain these credentials from:

    *   **Firebase:** [Firebase Console](https://console.firebase.google.com/)
    *   **Vapi:** [Vapi AI](https://vapi.ai/)
    *   **Google Gemini:** [Google AI Studio](https://makersuite.google.com/)

4.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 💻 Usage Examples

### Creating a New Interview

Navigate to the dashboard and click the "Create Interview" button. Fill in the form with the desired role, experience level, tech stack, and question type. The application will then generate a set of questions tailored to your specifications.

### Taking an Interview

Select an interview from your dashboard and click "Start Interview." The Vapi AI voice agent will guide you through the questions. Speak clearly and confidently, just as you would in a real interview!

### Reviewing Feedback

After completing an interview, you will receive instant feedback on your performance, including scores on communication skills, technical knowledge, problem-solving, and more.  Use this feedback to identify areas for improvement.

## ⚙️ Configuration Options

The following configuration options can be adjusted through environment variables in the `.env.local` file:

| Variable                        | Description                                                                                | Default Value         |
| ------------------------------- | ------------------------------------------------------------------------------------------ | --------------------- |
| `NEXT_PUBLIC_VAPI_WEB_TOKEN`      | The API token for accessing Vapi services.                                                 | *Required*            |
| `NEXT_PUBLIC_VAPI_WORKFLOW_ID`    | The ID of the Vapi workflow used for the interview.                                        | *Required*            |
| `GOOGLE_GENERATIVE_AI_API_KEY`  | The API key for accessing Google's generative AI models (Gemini).                         | *Required*            |
| `NEXT_PUBLIC_BASE_URL`          | The base URL of the application (used for redirects and API calls).                      | `http://localhost:3000` |
| Firebase Credentials            | API Keys for authentication, database etc.                                                 | *Required*            |

## 🤝 Contributing Guidelines

Contributions are welcome and appreciated! If you'd like to contribute to Prepwise, please follow these guidelines:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix.**
3.  **Implement your changes.**
4.  **Write tests to ensure your changes are working correctly.**
5.  **Submit a pull request with a clear description of your changes.**

## 📜 License Information

This project is currently private and not open source. All rights reserved.
Do not redistribute.

## 🗂️ Package.json Context

Here's a snippet from the `package.json` file, highlighting the key scripts and configurations:

```json
{
  "name": "prepwise",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@ai-sdk/google": "^1.1.25",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-label": "^2.1.6",
    "@radix-ui/react-slot": "^1.2.2",
    "@vapi-ai/web": "^2.2.4",
    "ai": "^4.1.61",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "dayjs": "^1.11.13",
    "firebase": "^11.4.0",
    "firebase-admin": "^13.2.0",
    "lucide-react": "^0.482.0",
    "next": "15.2.2",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.56.4",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.4"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@eslint/js": "^9.27.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9.27.0",
    "eslint-config-next": "15.2.2",
    "eslint-plugin-react": "^7.37.5",
    "globals": "^16.1.0",
    "tailwindcss": "^4",
    "typescript": "^5",
    "typescript-eslint": "^8.32.1"
  }
}
```

*   **`dev`**: Starts the Next.js development server with Turbopack.
*   **`build`**: Builds the Next.js application for production.
*   **`start`**: Starts the Next.js production server.
*   **`lint`**: Runs the ESLint linter to check for code quality issues.

## 🕸️ Code Snippets

<details>
<summary><code>globals.css</code></summary>

```css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
  --color-success-100: #49de50;
  --color-success-200: #42c748;
  --color-destructive-100: #f75353;
  --color-destructive-200: #c44141;

  --color-primary-100: #dddfff;
  --color-primary-200: #cac5fe;

  --color-light-100: #d6e0ff;
  --color-light-400: #6870a6;
  --color-light-600: #4f557d;
  --color-light-800: #24273a;

  --color-dark-100: #020408;
  --color-dark-200: #27282f;
  --color-dark-300: #242633;

  --font-mona-sans: "Mona Sans", sans-serif;

  --bg-pattern: url("/pattern.png");
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: var(--light-100);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  p {
    @apply text-light-100;
  }
  h2 {
    @apply text-3xl font-semibold;
  }
  h3 {
    @apply text-2xl font-semibold;
  }
  ul {
    @apply list-disc list-inside;
  }
  li {
    @apply text-light-100;
  }
}

@layer components {
  .btn-call {
    @apply inline-block px-7 py-3 font-bold text-sm leading-5 text-white transition-colors duration-150 bg-success-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-success-200 hover:bg-success-200 min-w-28 cursor-pointer items-center justify-center overflow-visible;

    .span {
      @apply bg-success-100 h-[85%] w-[65%];
    }
  }

  .btn-disconnect {
    @apply inline-block px-7 py-3 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-destructive-100 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-destructive-200 hover:bg-destructive-200 min-w-28;
  }

  .btn-upload {
    @apply flex min-h-14 w-full items-center justify-center gap-1.5 rounded-md;
  }
  .btn-primary {
    @apply w-fit !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10;
  }
  .btn-secondary {
    @apply w-fit !bg-dark-200 !text-primary-200 hover:!bg-dark-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10;
  }

  .btn-upload {
    @apply bg-dark-200 rounded-full min-h-12 px-5 cursor-pointer border border-input  overflow-hidden;
  }

  .card-border {
    @apply border-gradient p-0.5 rounded-2xl w-fit;
  }

  .card {
    @apply dark-gradient rounded-2xl min-h-full;
  }

  .form {
    @apply w-full;

    .label {
      @apply !text-light-100 !font-normal;
    }

    .input {
      @apply !bg-dark-200 !rounded-full !min-h-12 !px-5 placeholder:!text-light-100;
    }

    .btn {
      @apply !w-full !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !min-h-10 !font-bold !px-5 cursor-pointer;
    }
  }

  .call-view {
    @apply flex sm:flex-row flex-col gap-10 items-center justify-between w-full;

    h3 {
      @apply text-center text-primary-100 mt-5;
    }

    .card-interviewer {
      @apply flex-center flex-col gap-2 p-7 h-[400px] blue-gradient-dark rounded-lg border-2 border-primary-200/50 flex-1 sm:basis-1/2 w-full;
    }

    .avatar {
      @apply z-10 flex items-center justify-center blue-gradient rounded-full size-[120px] relative;

      .animate-speak {
        @apply absolute inline-flex size-5/6 animate-ping rounded-full bg-primary-200 opacity-75;
      }
    }

    .card-border {
      @apply border-gradient p-0.5 rounded-2xl flex-1 sm:basis-1/2 w-full h-[400px] max-md:hidden;
    }

    .card-content {
      @apply flex flex-col gap-2 justify-center items-center p-7 dark-gradient rounded-2xl min-h-full;
    }
  }

  .transcript-border {
    @apply border-gradient p-0.5 rounded-2xl w-full;

    .transcript {
      @apply dark-gradient rounded-2xl  min-h-12 px-5 py-3 flex items-center justify-center;

      p {
        @apply text-lg text-center text-white;
      }
    }
  }

  .section-feedback {
    @apply flex flex-col gap-8 max-w-5xl mx-auto max-sm:px-4 text-lg leading-7;

    .buttons {
      @apply flex w-full justify-evenly gap-4 max-sm:flex-col max-sm:items-center;
    }
  }

  .auth-layout {
    @apply flex items-center justify-center mx-auto max-w-7xl min-h-screen max-sm:px-4 max-sm:py-8;
  }

  .root-layout {
    @apply flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8;
  }

  .card-cta {
    @apply flex flex-row blue-gradient-dark rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4;
  }

  .interviews-section {
    @apply flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch;
  }

  .interview-text {
    @apply text-lg text-center text-white;
  }

  .progress {
    @apply h-1.5 text-[5px] font-bold bg-primary-200 rounded-full flex-center;
  }

  .tech-tooltip {
    @apply absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-700 rounded-md shadow-md;
  }

  .card-interview {
    @apply dark-gradient rounded-2xl min-h-full flex flex-col p-6 relative overflow-hidden gap-10 justify-between;

    .badge-text {
      @apply text-sm font-semibold capitalize;
    }
  }
}

@utility dark-gradient {
  @apply bg-gradient-to-b from-[#1A1C20] to-[#08090D];
}

@utility border-gradient {
  @apply bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33];
}

@utility pattern {
  @apply bg-[url('/pattern.png')] bg-top bg-no-repeat;
}

@utility blue-gradient-dark {
  @apply bg-gradient-to-b from-[#171532] to-[#08090D];
}

@utility blue-gradient {
  @apply bg-gradient-to-l from-[#FFFFFF] to-[#CAC5FE];
}

@utility flex-center {
  @apply flex items-center justify-center;
}

@utility animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

</details>

<details>
<summary><code>lib/utils.ts</code></summary>

```javascript
import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // Returns true if the icon exists
  } catch {
    return false;
  }
};

export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech,
      url: (await checkIconExists(url)) ? url : "/tech.svg",
    }))
  );

  return results;
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
```

</details>

<details>
<summary><code>Generate questions prompt (/app/api/vapi/generate/route.tsx):</code></summary>

```javascript
`Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3
    `;
```

</details>

<details>
<summary><code>Generate feedback prompt (lib/actions/general.action.ts):</code></summary>

```javascript
prompt: `
        You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
```

</details>

<details>
<summary><code>Display feedback (app/(root)/interview/[id]/feedback/page.tsx):</code></summary>

```javascript
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-primary