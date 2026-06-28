import { useEffect, useId, useRef, useState } from "react";
import profilePhoto from "./assets/profile.png";
import vscodeMark from "./assets/vscode-mark.svg";
import { resume } from "./data/resume";

const olympiadPreview = new URL(
  "../portfolio/Online Olympiad & Proctoring Platform/Administrator dashboard for creating and managing olympiads, registrations, and competition workflows.png",
  import.meta.url,
).href;

const recruitmentPreview = new URL(
  "../portfolio/HR Recruitment Platform/Recruitment Management Dashboard for handling candidate applications, document review, voting workflows, and hiring processes.png",
  import.meta.url,
).href;

const conferencePreview = new URL(
  "../portfolio/Conference Registration & Submission Management System/Administrative dashboard for managing conference registrations, paper submissions, moderation workflows and reporting tools.png",
  import.meta.url,
).href;

const projectPreviewMap = {
  "Online Olympiad & Proctoring Platform": olympiadPreview,
  "HR Recruitment Platform": recruitmentPreview,
  "Conference Registration & Submission Management System": conferencePreview,
};

function PhpIcon() {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 128 128" aria-hidden="true">
      <path
        fill={`url(#${gradientId})`}
        d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.655-33.667-64-33.667C28.654 30.333 0 45.407 0 64Z"
      />
      <path
        fill="#777bb3"
        d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167 0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167Z"
      />
      <path
        d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53 1.306-1.006 2.207-2.747 2.68-5.175.44-2.27.272-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585 2.088 2.39 2.734 5.734 1.917 9.935-.333 1.711-.905 3.3-1.7 4.724a15.818 15.818 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562zM69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321 1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56h-7.407zM92.136 67.864c2.793 0 4.878-.515 6.198-1.53 1.304-1.006 2.206-2.747 2.679-5.175.44-2.27.273-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585 2.089 2.39 2.734 5.734 1.917 9.935a15.878 15.878 0 0 1-1.699 4.724 15.838 15.838 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z"
        fill="#111111"
      />
      <defs>
        <radialGradient
          id={gradientId}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(84.04136 0 0 84.04136 38.426 42.169)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#AEB2D5" />
          <stop offset=".3" stopColor="#AEB2D5" />
          <stop offset=".75" stopColor="#484C89" />
          <stop offset="1" stopColor="#484C89" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function JsIcon() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
      />
    </svg>
  );
}

function PythonIcon() {
  const gradientA = useId();
  const gradientB = useId();
  const gradientC = useId();

  return (
    <svg viewBox="0 0 128 128" aria-hidden="true">
      <linearGradient
        id={gradientA}
        gradientUnits="userSpaceOnUse"
        x1="70.252"
        y1="1237.476"
        x2="170.659"
        y2="1151.089"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#5A9FD4" />
        <stop offset="1" stopColor="#306998" />
      </linearGradient>
      <linearGradient
        id={gradientB}
        gradientUnits="userSpaceOnUse"
        x1="209.474"
        y1="1098.811"
        x2="173.62"
        y2="1149.537"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#FFD43B" />
        <stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <radialGradient
        id={gradientC}
        cx="1825.678"
        cy="444.45"
        r="26.743"
        gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" />
        <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
      </radialGradient>
      <path
        fill={`url(#${gradientA})`}
        d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        transform="translate(0 10.26)"
      />
      <path
        fill={`url(#${gradientB})`}
        d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        transform="translate(0 10.26)"
      />
      <path
        opacity=".444"
        fill={`url(#${gradientC})`}
        d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
      />
    </svg>
  );
}

function JsonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.4" fill="#1F2937" />
      <path
        d="M9.5 8c-1.2 0-1.7.65-1.7 1.8v1c0 .58-.2.9-.75 1.2.55.3.75.62.75 1.2v1c0 1.15.5 1.8 1.7 1.8"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 8c1.2 0 1.7.65 1.7 1.8v1c0 .58.2.9.75 1.2-.55.3-.75.62-.75 1.2v1c0 1.15-.5 1.8-1.7 1.8"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.2-4.2" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4" />
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
      </g>
    </svg>
  );
}

function MarkdownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2.8"
        fill="#0F172A"
        stroke="#94A3B8"
        strokeWidth="1.2"
      />
      <path
        d="M6.5 15.5V9.2l2.45 2.9 2.45-2.9v6.3"
        stroke="#F8FAFC"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11.6h3.7"
        stroke="#F8FAFC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M15.85 9.8v5.4"
        stroke="#F8FAFC"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="m14.55 13.95 1.3 1.3 1.3-1.3"
        stroke="#F8FAFC"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4.1l1.9 2H18a2.5 2.5 0 0 1 2.5 2.5V16A2.5 2.5 0 0 1 18 18.5H6A2.5 2.5 0 0 1 3.5 16V7.5Z"
        fill="#EAB308"
      />
      <path d="M3.5 9h17" stroke="#FDE68A" strokeWidth="1.1" />
    </svg>
  );
}

const themes = [
  { id: "vscode-dark", label: "Dark+" },
  { id: "tokyo-night", label: "Tokyo" },
  { id: "nord", label: "Nord" },
];

const files = [
  { id: "home", label: "home.php", icon: <PhpIcon /> },
  { id: "about", label: "about.js", icon: <JsIcon /> },
  { id: "experience", label: "experience.py", icon: <PythonIcon /> },
  { id: "projects", label: "projects.json", icon: <JsonIcon /> },
  { id: "contact", label: "contact.jsx", icon: <ReactIcon /> },
  { id: "readme", label: "README.md", icon: <MarkdownIcon /> },
];

const searchFile = {
  id: "search",
  label: "search",
  icon: <SearchIcon />,
};

const activityItems = [
  {
    id: "explorer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "search",
    icon: <SearchIcon />,
  },
  {
    id: "git",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="7.5" cy="4.5" r="2.25" />
        <circle cx="7.5" cy="19.5" r="2.25" />
        <circle cx="16.5" cy="7.5" r="2.25" />
        <line x1="7.5" y1="17.25" x2="7.5" y2="6.75" />
        <path d="M16.5 9.75c0 6-9 2.25-9 7.5" />
      </svg>
    ),
  },
  {
    id: "resume",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <polyline points="9 14 12 17 15 14" />
      </svg>
    ),
  },
];

const languageOptions = [
  { id: "ru", label: "RU", name: "Русский" },
  { id: "kz", label: "KZ", name: "Қазақша" },
  { id: "en", label: "EN", name: "English" },
];

const uiText = {
  ru: {
    explorer: "Проводник",
    portfolio: "Портфолио",
    links: "ссылки",
    about: "Обо мне",
    experience: "Опыт",
    projects: "Проекты",
    contact: "Контакты",
    education: "Образование",
    summary: "Кратко",
    languages: "Языки",
    stack: "Стек",
    email: "Email",
    phone: "Телефон",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    location: "Локация",
    website: "Сайт",
    github: "GitHub",
    openGithub: "открыть github",
    sendEmail: "написать на почту",
    openProject: "открыть проект →",
    live: "preview",
    heroKicker: "Портфолио / резюме Full Stack Developer",
    terminal: "ТЕРМИНАЛ",
    terminalOpen: "terminal: открыт",
    terminalClosed: "terminal: закрыт",
    nameField: "name",
    roleField: "role",
    languagesField: "languages",
    topSkillsField: "top skills",
    statusField: "status",
    locationField: "location",
    preferredChannelField: "preferred_channel",
    close: "Закрыть",
    minimize: "Свернуть",
    maximize: "Развернуть",
    enterFullscreen: "На весь экран",
    exitFullscreen: "Выйти из полного экрана",
    toggleExplorer: "Показать или скрыть проводник",
    toggleTerminal: "Показать или скрыть терминал",
    addressBar: "Адресная строка",
    startConversation: "$ ./start-conversation",
    terminalCommand: "$ npm run profile",
    activityExplorer: "Проводник",
    activitySearch: "Поиск",
    activityGit: "Git",
    activityResume: "Резюме",
  },
  kz: {
    explorer: "Шолғыш",
    portfolio: "Портфолио",
    links: "сілтемелер",
    about: "Мен туралы",
    experience: "Тәжірибе",
    projects: "Жобалар",
    contact: "Байланыс",
    education: "Білім",
    summary: "Қысқаша",
    languages: "Тілдер",
    stack: "Стек",
    email: "Email",
    phone: "Телефон",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    location: "Орналасуы",
    website: "Сайт",
    github: "GitHub",
    openGithub: "github ашу",
    sendEmail: "email жіберу",
    openProject: "жобаны ашу →",
    live: "preview",
    heroKicker: "Full Stack Developer портфолиосы / түйіндеме",
    terminal: "ТЕРМИНАЛ",
    terminalOpen: "terminal: ашық",
    terminalClosed: "terminal: жабық",
    nameField: "name",
    roleField: "role",
    languagesField: "languages",
    topSkillsField: "top skills",
    statusField: "status",
    locationField: "location",
    preferredChannelField: "preferred_channel",
    close: "Жабу",
    minimize: "Жию",
    maximize: "Үлкейту",
    enterFullscreen: "Толық экран",
    exitFullscreen: "Толық экраннан шығу",
    toggleExplorer: "Шолғышты көрсету немесе жасыру",
    toggleTerminal: "Терминалды көрсету немесе жасыру",
    addressBar: "Мекенжай жолағы",
    startConversation: "$ ./start-conversation",
    terminalCommand: "$ npm run profile",
    activityExplorer: "Шолғыш",
    activitySearch: "Іздеу",
    activityGit: "Git",
    activityResume: "Резюме",
  },
  en: {
    explorer: "Explorer",
    portfolio: "Portfolio",
    links: "links",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    education: "Education",
    summary: "Summary",
    languages: "Languages",
    stack: "Stack",
    email: "Email",
    phone: "Phone",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    location: "Location",
    website: "Website",
    github: "GitHub",
    openGithub: "open github",
    sendEmail: "send email",
    openProject: "open project →",
    live: "preview",
    heroKicker: "Full Stack Developer portfolio / resume",
    terminal: "TERMINAL",
    terminalOpen: "terminal: open",
    terminalClosed: "terminal: closed",
    nameField: "name",
    roleField: "role",
    languagesField: "languages",
    topSkillsField: "top skills",
    statusField: "status",
    locationField: "location",
    preferredChannelField: "preferred_channel",
    close: "Close",
    minimize: "Minimize",
    maximize: "Maximize",
    enterFullscreen: "Enter Fullscreen",
    exitFullscreen: "Exit Fullscreen",
    toggleExplorer: "Toggle Explorer",
    toggleTerminal: "Toggle Terminal",
    addressBar: "Address bar",
    startConversation: "$ ./start-conversation",
    terminalCommand: "$ npm run profile",
    activityExplorer: "Explorer",
    activitySearch: "Search",
    activityGit: "Git",
    activityResume: "Resume",
  },
};

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "ru";
  }

  try {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    if (languageOptions.some((item) => item.id === savedLanguage)) {
      return savedLanguage;
    }
  } catch {
    return "ru";
  }

  return "ru";
}

function projectTabLabel(projectName) {
  if (projectName === "Online Olympiad & Proctoring Platform") {
    return "olympiad.case";
  }

  if (projectName === "HR Recruitment Platform") {
    return "recruitment.case";
  }

  if (
    projectName === "Conference Registration & Submission Management System"
  ) {
    return "conference.case";
  }

  return "project.case";
}

function getInitialSidebarOpen() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.innerWidth > 767;
}

function App() {
  const [activeFile, setActiveFile] = useState("home");
  const [openTabs, setOpenTabs] = useState(["home"]);
  const [sidebarOpen, setSidebarOpen] = useState(getInitialSidebarOpen);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [themeId, setThemeId] = useState("vscode-dark");
  const [languageId, setLanguageId] = useState(getInitialLanguage);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const profile = resume.profile;
  const skills = resume.skills;
  const content = resume.content[languageId] ?? resume.content.ru;
  const ui = uiText[languageId] ?? uiText.ru;
  const projectTabs = content.projects.map((project, index) => ({
    id: `project-${index}`,
    label: projectTabLabel(project.name),
    icon: <JsonIcon />,
    projectIndex: index,
  }));
  const allFiles = [searchFile, ...files, ...projectTabs];
  const currentFile =
    allFiles.find((file) => file.id === activeFile) ?? allFiles[0];
  const statusTheme = themes.find((theme) => theme.id === themeId) ?? themes[0];

  function handleSelectFile(fileId) {
    setOpenTabs((tabs) => (tabs.includes(fileId) ? tabs : [...tabs, fileId]));
    setActiveFile(fileId);

    if (typeof window !== "undefined" && window.innerWidth <= 767) {
      setSidebarOpen(false);
    }
  }

  function handleOpenProject(projectIndex) {
    handleSelectFile(`project-${projectIndex}`);
  }

  function handleCloseTab(fileId) {
    setOpenTabs((tabs) => {
      if (!tabs.includes(fileId)) {
        return tabs;
      }

      if (tabs.length === 1) {
        setActiveFile("home");
        return ["home"];
      }

      const nextTabs = tabs.filter((tab) => tab !== fileId);

      if (activeFile === fileId) {
        const closedIndex = tabs.indexOf(fileId);
        const fallbackTab = nextTabs[closedIndex - 1] ?? nextTabs[0] ?? "home";
        setActiveFile(fallbackTab);
      }

      return nextTabs;
    });
  }

  useEffect(() => {
    function syncFullscreenState() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", syncFullscreenState);
    syncFullscreenState();

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = languageId === "kz" ? "kk" : languageId;
    document.title = `${profile.name} | ${ui.portfolio}`;

    try {
      window.localStorage.setItem("portfolio-language", languageId);
    } catch {
      return;
    }
  }, [languageId, profile.name, ui.portfolio]);

  async function handleToggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  }

  return (
    <div data-theme={themeId} className="app-root">
      <div className="ambient-bg" />
      <CustomCursor />
      <div className={`app-grid ${sidebarOpen ? "" : "app-grid-collapsed"}`}>
        <TitleBar
          isFullscreen={isFullscreen}
          sidebarOpen={sidebarOpen}
          terminalOpen={terminalOpen}
          languageId={languageId}
          onLanguageChange={setLanguageId}
          ui={ui}
          onOpenSearch={() => handleSelectFile("search")}
          onToggleSidebar={() => setSidebarOpen((value) => !value)}
          onToggleTerminal={() => setTerminalOpen((value) => !value)}
          onToggleFullscreen={handleToggleFullscreen}
        />
        <ActivityBar
          githubUrl={profile.github}
          ui={ui}
          onOpenSearch={() => handleSelectFile("search")}
          onToggleSidebar={() => setSidebarOpen((value) => !value)}
        />
        <Sidebar
          activeFile={activeFile}
          onSelect={handleSelectFile}
          profile={profile}
          sidebarOpen={sidebarOpen}
          ui={ui}
          content={content}
        />
        <Editor
          activeFile={activeFile}
          openTabs={openTabs}
          allFiles={allFiles}
          onSelectFile={handleSelectFile}
          onCloseTab={handleCloseTab}
          onOpenProject={handleOpenProject}
          currentFile={currentFile}
          terminalOpen={terminalOpen}
          profile={profile}
          skills={skills}
          content={content}
          ui={ui}
        />
        <StatusBar
          themeId={themeId}
          onThemeChange={setThemeId}
          statusTheme={statusTheme}
          activeFile={currentFile.label}
          terminalOpen={terminalOpen}
          ui={ui}
        />
      </div>
    </div>
  );
}

function TitleBar({
  isFullscreen,
  sidebarOpen,
  terminalOpen,
  languageId,
  onLanguageChange,
  ui,
  onOpenSearch,
  onToggleSidebar,
  onToggleTerminal,
  onToggleFullscreen,
}) {
  return (
    <div className="title-bar">
      <button
        type="button"
        className={`title-app title-app-toggle ${sidebarOpen ? "title-app-toggle-active" : ""}`}
        onClick={onToggleSidebar}
        title={ui.toggleExplorer}
        aria-label={ui.toggleExplorer}>
        <span className="burger-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M4 18L20 18"
              stroke="#46A0FF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#46A0FF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#46A0FF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="title-search title-search-button"
        aria-label={ui.addressBar}
        title={ui.activitySearch}
        onClick={onOpenSearch}>
        <span className="title-search-icon" aria-hidden="true">
          <SearchIcon />
        </span>
        <span className="title-search-text">zhandos998.github.io</span>
      </button>
      <div className="menu-group menu-controls title-menu-controls">
        <button
          type="button"
          className={`icon-pill ${sidebarOpen ? "icon-pill-active" : ""}`}
          onClick={onToggleSidebar}
          title={ui.toggleExplorer}
          aria-label={ui.toggleExplorer}>
          <span className="menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none">
              <defs>
                <mask id="hole">
                  <rect width="24" height="24" rx="5" fill="#ffffff" />
                  <path
                    d="M10 1v22h9a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4h-9z"
                    fill="#000000"
                  />
                </mask>
              </defs>
              <rect
                width="24"
                height="24"
                rx="5"
                fill="currentColor"
                mask="url(#hole)"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className={`icon-pill ${terminalOpen ? "icon-pill-active" : ""}`}
          onClick={onToggleTerminal}
          title={ui.toggleTerminal}
          aria-label={ui.toggleTerminal}>
          <span className="menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none">
              <defs>
                <mask id="hole-270">
                  <rect width="24" height="24" rx="5" fill="#ffffff" />
                  <path
                    d="M10 1v22h9a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4h-9z"
                    fill="#000000"
                    transform="rotate(270 12 12)"
                  />
                </mask>
              </defs>
              <rect
                width="24"
                height="24"
                rx="5"
                fill="currentColor"
                mask="url(#hole-270)"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="title-lang-switch">
        {languageOptions.map((language) => (
          <button
            key={language.id}
            type="button"
            onClick={() => onLanguageChange(language.id)}
            className={`title-lang-btn ${language.id === languageId ? "title-lang-btn-active" : ""}`}
            title={language.name}>
            {language.label}
          </button>
        ))}
      </div>
      <div className="title-controls title-controls-windows">
        <button
          type="button"
          className="win-btn"
          aria-label={ui.minimize}
          title={ui.minimize}>
          <span className="win-btn-line" />
        </button>
        <button
          type="button"
          className="win-btn"
          aria-label={ui.maximize}
          title={isFullscreen ? ui.exitFullscreen : ui.enterFullscreen}
          onClick={onToggleFullscreen}>
          <span className="win-btn-square" />
        </button>
        <button
          type="button"
          className="win-btn win-btn-close"
          aria-label={ui.close}
          title={ui.close}>
          <span className="win-btn-close-icon">x</span>
        </button>
      </div>
    </div>
  );
}

function ActivityBar({ githubUrl, ui, onOpenSearch, onToggleSidebar }) {
  const titles = {
    explorer: ui.activityExplorer,
    search: ui.activitySearch,
    git: ui.activityGit,
    resume: ui.activityResume,
  };

  return (
    <aside className="activity-bar">
      <div className="activity-stack">
        <div className="activity-logo" aria-hidden="true">
          <img className="activity-logo-mark" src={vscodeMark} alt="" />
        </div>
        {activityItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`activity-button ${index === 0 ? "activity-button-active" : ""}`}
            title={titles[item.id]}
            onClick={() => {
              if (item.id === "explorer") {
                onToggleSidebar();
              }

              if (item.id === "search") {
                onOpenSearch();
              }

              if (item.id === "git") {
                window.open(githubUrl, "_blank", "noopener,noreferrer");
              }
            }}>
            <span className="activity-icon">{item.icon}</span>
          </button>
        ))}
      </div>
      <div className="activity-footer" aria-hidden="true">
        <span className="activity-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="8" r="3.25" />
            <path d="M6.5 18.5c1.7-2.8 3.7-4.2 5.5-4.2s3.8 1.4 5.5 4.2" />
          </svg>
        </span>
      </div>
    </aside>
  );
}

function Sidebar({ activeFile, onSelect, profile, sidebarOpen, ui, content }) {
  return (
    <aside
      className={`side-panel ${sidebarOpen ? "" : "side-panel-collapsed"}`}>
      <div className="panel-header">{ui.explorer}</div>
      <div className="side-section">
        <p className="side-caption side-caption-folder">
          <span className="folder-icon">
            <FolderIcon />
          </span>
          <span>{ui.portfolio}</span>
        </p>
        <div className="file-tree">
          {files.map((file) => (
            <button
              key={file.id}
              type="button"
              onClick={() => onSelect(file.id)}
              className={`file-row ${activeFile === file.id ? "file-row-active" : ""}`}>
              <span className="file-icon">{file.icon}</span>
              <span className="file-label">{file.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="side-section side-section-links">
        <p className="side-caption">{ui.links}</p>
        <div className="info-list">
          <InfoItem
            label={ui.email}
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <InfoItem
            label={ui.phone}
            value={profile.phone}
            href={`tel:${profile.phone}`}
          />
          <InfoItem
            label={ui.telegram}
            value={profile.telegram}
            href={profile.telegramLink}
          />
          <InfoItem
            label={ui.whatsapp}
            value={profile.phone}
            href={profile.whatsAppLink}
          />
          <InfoItem label={ui.location} value={content.location} />
        </div>
      </div>
    </aside>
  );
}

function Editor({
  activeFile,
  openTabs,
  allFiles,
  onSelectFile,
  onCloseTab,
  onOpenProject,
  currentFile,
  terminalOpen,
  profile,
  skills,
  content,
  ui,
}) {
  const editorScrollRef = useRef(null);
  const searchTargets = allFiles.filter((item) => item.id !== "search");

  useEffect(() => {
    editorScrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [activeFile]);

  return (
    <main className="editor-shell">
      <div className="tabs-bar">
        {openTabs.map((tabId) => {
          const file = allFiles.find((item) => item.id === tabId);

          if (!file) {
            return null;
          }

          return (
            <div
              key={file.id}
              className={`tab-button ${file.id === activeFile ? "tab-button-active" : ""}`}>
              <button
                type="button"
                className="tab-main"
                onClick={() => onSelectFile(file.id)}>
                <span className="tab-icon">{file.icon}</span>
                <span className="tab-label">{file.label}</span>
              </button>
              <button
                type="button"
                className="tab-close"
                onClick={() => onCloseTab(file.id)}
                aria-label={`${ui.close} ${file.label}`}
                title={`${ui.close} ${file.label}`}>
                x
              </button>
            </div>
          );
        })}
      </div>

      <div className="breadcrumbs-bar">
        <span>{ui.portfolio}</span>
        <span>/</span>
        <span className="breadcrumbs-current">{currentFile.label}</span>
      </div>

      <div ref={editorScrollRef} className="editor-scroll">
        <div className="editor-content">
          <div className="line-gutter">
            {Array.from({ length: 32 }, (_, index) => (
              <span key={index + 1}>{String(index + 1).padStart(2, "0")}</span>
            ))}
          </div>
          <div className="editor-pane">
            {activeFile === "home" && (
              <HomeFile profile={profile} content={content} ui={ui} />
            )}
            {activeFile === "search" && (
              <SearchFile
                activeFile={activeFile}
                openTabs={openTabs}
                searchTargets={searchTargets}
                onSelectFile={onSelectFile}
                ui={ui}
              />
            )}
            {activeFile === "about" && (
              <AboutFile content={content} skills={skills} ui={ui} />
            )}
            {activeFile === "experience" && (
              <ExperienceFile content={content} ui={ui} />
            )}
            {activeFile === "projects" && (
              <ProjectsFile
                content={content}
                ui={ui}
                onOpenProject={onOpenProject}
              />
            )}
            {activeFile.startsWith("project-") && (
              <ProjectDetailFile
                activeFile={activeFile}
                content={content}
                ui={ui}
              />
            )}
            {activeFile === "contact" && (
              <ContactFile profile={profile} content={content} ui={ui} />
            )}
            {activeFile === "readme" && (
              <ReadmeFile
                profile={profile}
                content={content}
                skills={skills}
                ui={ui}
              />
            )}
          </div>
        </div>
      </div>

      <TerminalPanel
        terminalOpen={terminalOpen}
        profile={profile}
        skills={skills}
        content={content}
        ui={ui}
      />
    </main>
  );
}

function SearchFile({ activeFile, openTabs, searchTargets, onSelectFile, ui }) {
  return (
    <section className="pane-stack">
      <div className="pane-block">
        <p className="code-comment">search.index</p>
        <h2 className="section-title">{ui.activitySearch}</h2>
        <div className="search-grid">
          {searchTargets.map((file) => {
            const isOpen = openTabs.includes(file.id);
            const isActive =
              file.id === activeFile ||
              (activeFile.startsWith("project-") && file.id === activeFile);

            return (
              <button
                key={file.id}
                type="button"
                className={`search-item ${isActive ? "search-item-active" : ""}`}
                onClick={() => onSelectFile(file.id)}>
                <span className="search-item-icon">{file.icon}</span>
                <span className="search-item-text">
                  <span className="search-item-label">{file.label}</span>
                  <span className="search-item-meta">
                    {isOpen ? "open tab" : "available"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HomeFile({ profile, content, ui }) {
  return (
    <section className="pane-block pane-hero">
      <p className="code-comment">{"// home.tsx"}</p>
      <div className="hero-grid">
        <div>
          <p className="hero-kicker">{ui.heroKicker}</p>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-role">{content.role}</p>
          <p className="hero-text">{content.tagline}</p>
          <p className="hero-text hero-text-dim">{content.summary}</p>
          <div className="hero-actions">
            <a
              className="action-primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer">
              {ui.openGithub}
            </a>
            <a className="action-secondary" href={`mailto:${profile.email}`}>
              {ui.sendEmail}
            </a>
          </div>
        </div>
        <div className="hero-meta">
          <div className="avatar-shell">
            <div className="avatar-ring" />
            <img
              className="avatar-core avatar-photo"
              src={profilePhoto}
              alt={profile.name}
            />
          </div>
          <div className="stats-grid">
            {content.stats.map((item) => (
              <div key={item.label} className="metric-card">
                <p className="metric-value">{item.value}</p>
                <p className="metric-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFile({ content, skills, ui }) {
  return (
    <section className="pane-stack">
      <div className="pane-block">
        <p className="code-comment">about.md</p>
        <h2 className="section-title">{ui.about}</h2>
        <p className="section-copy">{content.tagline}</p>
        <p className="section-copy">{content.summary}</p>
      </div>

      <div className="two-col-grid">
        <div className="pane-block">
          <p className="code-comment">strengths.map()</p>
          <div className="list-stack">
            {content.strengths.map((item) => (
              <div key={item} className="plain-card">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="pane-block">
          <p className="code-comment">const stack = []</p>
          <div className="chip-wrap">
            {skills.map((skill) => (
              <span key={skill} className="token-chip">
                {skill}
              </span>
            ))}
          </div>
          <div className="terminal-mini">
            <p className="code-comment">{ui.languages.toLowerCase()}</p>
            <p>{content.languages.join(" / ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceFile({ content, ui }) {
  return (
    <section className="pane-stack">
      <div className="pane-block">
        <p className="code-comment">export const experience = []</p>
        <h2 className="section-title">{ui.experience}</h2>
        <div className="timeline">
          {content.experience.map((item) => (
            <article
              key={`${item.period}-${item.title}`}
              className="timeline-card">
              <div className="timeline-head">
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-subtitle">{item.company}</p>
                </div>
                <span className="card-period">{item.period}</span>
              </div>
              <div className="chip-wrap chip-wrap-compact">
                <span className="token-chip">{item.stack}</span>
              </div>
              <p className="section-copy">{item.description}</p>
              <div className="bullet-stack">
                {item.achievements.map((achievement) => (
                  <div key={achievement} className="bullet-row">
                    <span className="bullet-dot" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pane-block">
        <p className="code-comment">{ui.education.toLowerCase()}</p>
        <div className="list-stack">
          {content.education.map((item) => (
            <div key={`${item.period}-${item.title}`} className="plain-card">
              <p className="card-period">{item.period}</p>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.degree} · {item.field}</p>
              <p className="section-copy">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsFile({ content, ui, onOpenProject }) {
  return (
    <section className="pane-block">
      <p className="code-comment">featuredProjects.json</p>
      <h2 className="section-title">{ui.projects}</h2>
      <div className="project-grid">
        {content.projects.map((project, index) => (
          <article
            key={project.name}
            className="project-card"
            style={{ "--card-accent": projectAccent(index) }}>
            <div className="project-top">
              <div>
                <h3 className="card-title">{project.name}</h3>
                <p className="card-subtitle">{project.stack}</p>
                <p className="section-copy project-focus">{project.focus}</p>
              </div>
              <span className="project-tag">{project.type}</span>
            </div>
            <p className="section-copy">{project.description}</p>

            <button
              type="button"
              className="inline-link project-open-button"
              onClick={() => onOpenProject(index)}>
              {ui.openProject}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectDetailFile({ activeFile, content, ui }) {
  const projectIndex = Number(activeFile.replace("project-", ""));
  const project = content.projects[projectIndex];

  if (!project) {
    return null;
  }

  return (
    <section className="pane-stack">
      <div className="pane-block">
        <p className="code-comment">{projectTabLabel(project.name)}</p>
        <div className="project-detail-head">
          <div>
            <h2 className="section-title">{project.name}</h2>
            <p className="card-subtitle">{project.stack}</p>
          </div>
          <span className="project-tag">{project.type}</span>
        </div>
        <p className="section-copy project-focus">{project.focus}</p>
        <p className="section-copy">{project.description}</p>
        <div className="project-detail-grid">
          <div className="plain-card">
            <p className="code-comment">role</p>
            <p className="section-copy">{project.role}</p>
          </div>
          <div className="plain-card">
            <p className="code-comment">type</p>
            <p className="section-copy">{project.type}</p>
          </div>
          <div className="plain-card">
            <p className="code-comment">stack</p>
            <p className="section-copy">{project.stack}</p>
          </div>
          <div className="plain-card">
            <p className="code-comment">focus</p>
            <p className="section-copy">{project.focus}</p>
          </div>
        </div>
        <div className="bullet-stack project-highlights">
          {project.highlights.map((item) => (
            <div key={item} className="bullet-row">
              <span className="bullet-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pane-block">
        <p className="code-comment">preview.png</p>
        <div className="project-detail-preview">
          <img
            src={projectPreviewMap[project.name]}
            alt={project.name}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ContactFile({ profile, content, ui }) {
  return (
    <section className="two-col-grid">
      <div className="pane-block">
        <p className="code-comment"></p>
        <h2 className="section-title">{ui.contact}</h2>
        <p className="section-copy">{content.contactIntro}</p>
        <div className="contact-grid">
          <ContactCard
            label={ui.email.toLowerCase()}
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactCard
            label={ui.phone.toLowerCase()}
            value={profile.phone}
            href={`tel:${profile.phone}`}
          />
          <ContactCard
            label={ui.telegram.toLowerCase()}
            value={profile.telegram}
            href={profile.telegramLink}
          />
          <ContactCard
            label={ui.whatsapp.toLowerCase()}
            value={profile.phone}
            href={profile.whatsAppLink}
          />
          <ContactCard
            label={ui.github.toLowerCase()}
            value="github.com/zhandos998"
            href={profile.github}
          />
          <ContactCard
            label={ui.website.toLowerCase()}
            value={profile.website}
            href={profile.website}
          />
        </div>
      </div>

      <div className="pane-block">
        <p className="code-comment">contact.sh</p>
        <div className="terminal-mini">
          <p>{ui.startConversation}</p>
          <p>
            {ui.statusField}:{" "}
            <span className="accent-green">{content.availability}</span>
          </p>
          <p>
            {ui.locationField}:{" "}
            <span className="accent-blue">{content.location}</span>
          </p>
          <p>
            {ui.preferredChannelField}:{" "}
            <span className="accent-pink">{content.preferredChannel}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ReadmeFile({ profile, content, skills, ui }) {
  return (
    <section className="pane-block">
      <p className="code-comment">README.md</p>
      <h2 className="section-title">{profile.name}</h2>
      <p className="section-copy">{content.role} · {content.location}</p>
      <div className="readme-stack">
        <div className="readme-section">
          <p className="code-comment">## {ui.summary}</p>
          <p className="section-copy">{content.summary}</p>
          <div className="bullet-stack">
            {content.strengths.map((item) => (
              <div className="bullet-row" key={item}>
                <span className="bullet-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="readme-section">
          <p className="code-comment">## {ui.stack}</p>
          <div className="chip-wrap">
            {skills.map((skill) => (
              <span className="token-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="readme-section">
          <p className="code-comment">## {ui.experience}</p>
          <p className="section-copy">
            <strong>{content.experience[0]?.title}</strong> @{" "}
            {content.experience[0]?.company}
          </p>
          <p className="section-copy">{content.experience[0]?.period}</p>
          <p className="section-copy">{content.experience[1]?.title}</p>
        </div>
        <div className="readme-section">
          <p className="code-comment">## {ui.education}</p>
          <div className="readme-list">
            {content.education.map((item) => (
              <p className="section-copy" key={`${item.title}-${item.period}`}>
                <strong>{item.title}</strong> · {item.period}
              </p>
            ))}
          </div>
        </div>
        <div className="readme-section">
          <p className="code-comment">## {ui.languages}</p>
          <p className="section-copy">{content.languages.join(" · ")}</p>
        </div>
        <div className="readme-section">
          <p className="code-comment">## {ui.contact}</p>
          <div className="readme-links">
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.telegramLink} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href={profile.whatsAppLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={profile.website} target="_blank" rel="noreferrer">
              {profile.website}
            </a>
          </div>
        </div>
      </div>
      <div className="notice-box">{content.readmeNotice}</div>
    </section>
  );
}

function TerminalPanel({ terminalOpen, profile, skills, content, ui }) {
  return (
    <section
      className={`terminal-panel ${terminalOpen ? "" : "terminal-panel-closed"}`}>
      <div className="terminal-head">
        <div className="terminal-title">{ui.terminal}</div>
        <div className="terminal-title">zhandos@portfolio</div>
      </div>
      <div className="terminal-body">
        <p className="terminal-line terminal-dim">{ui.terminalCommand}</p>
        <p className="terminal-line">
          {ui.nameField}: <span className="accent-blue">{profile.name}</span>
        </p>
        <p className="terminal-line">
          {ui.roleField}: <span className="accent-green">{content.role}</span>
        </p>
        <p className="terminal-line">
          {ui.languagesField}:{" "}
          <span className="accent-pink">{content.languages.join(", ")}</span>
        </p>
        <p className="terminal-line">
          {ui.topSkillsField}:{" "}
          <span className="accent-orange">{skills.slice(0, 5).join(", ")}</span>
        </p>
      </div>
    </section>
  );
}

function StatusBar({
  themeId,
  onThemeChange,
  statusTheme,
  activeFile,
  terminalOpen,
  ui,
}) {
  return (
    <footer className="status-bar">
      <div className="status-left">
        <span>main</span>
        <span>{activeFile}</span>
        <span>{terminalOpen ? ui.terminalOpen : ui.terminalClosed}</span>
      </div>
      <div className="status-right">
        <div className="status-group">
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => onThemeChange(theme.id)}
              className={`status-theme ${theme.id === themeId ? "status-theme-active" : ""}`}>
              {theme.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function CustomCursor() {
  const shellRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) {
      return undefined;
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lastSpawnTime = 0;
    let lastSpawnX = target.x;
    let lastSpawnY = target.y;

    function spawnTrailBit(x, y) {
      if (!trailRef.current) {
        return;
      }

      const bit = document.createElement("span");
      bit.className = "custom-cursor-bit";
      bit.textContent = Math.random() > 0.5 ? "0" : "1";
      bit.style.left = `${x + (Math.random() * 14 - 7)}px`;
      bit.style.top = `${y + (Math.random() * 14 - 7)}px`;
      bit.style.setProperty("--trail-dx", `${Math.random() * 18 - 9}px`);
      bit.style.setProperty("--trail-dy", `${10 + Math.random() * 18}px`);
      bit.style.animationDuration = `${420 + Math.random() * 220}ms`;
      trailRef.current.appendChild(bit);

      window.setTimeout(() => {
        bit.remove();
      }, 760);
    }

    function handleMove(event) {
      target.x = event.clientX;
      target.y = event.clientY;
      shellRef.current?.classList.add("custom-cursor-visible");
      if (shellRef.current) {
        shellRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }

      const now = window.performance.now();
      const distance = Math.hypot(event.clientX - lastSpawnX, event.clientY - lastSpawnY);

      if (now - lastSpawnTime > 26 && distance > 7) {
        spawnTrailBit(event.clientX, event.clientY);
        lastSpawnTime = now;
        lastSpawnX = event.clientX;
        lastSpawnY = event.clientY;
      }
    }

    function handleLeave() {
      shellRef.current?.classList.remove("custom-cursor-visible");
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
    };
  }, []);

    return (
    <>
      <div ref={trailRef} className="custom-cursor-trail" aria-hidden="true" />
      <div ref={shellRef} className="custom-cursor-shell" aria-hidden="true">
        <svg
          className="custom-cursor-svg"
          viewBox="0 0 837 1024"
          xmlns="http://www.w3.org/2000/svg">
          <path
            className="custom-cursor-back"
            d="M99 72L158 987L349 712L714 776Q732 779 720 760Z"
          />
          <path
            className="custom-cursor-front"
            d="M100 74L157 954L340 689L692 751Q710 754 700 740Z"
          />
          <path
            className="custom-cursor-spark"
            d="M706 916C719 912 725 906 729 893C733 906 740 912 753 916C740 920 733 927 729 940C725 927 719 920 706 916Z"
          />
        </svg>
      </div>
    </>
  );
}

function InfoItem({ label, value, href }) {
  return (
    <div className="info-item">
      <span>{label}</span>
      {href ? (
        <a
          className="info-item-link"
          href={href}
          target="_blank"
          rel="noreferrer">
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

function ContactCard({ label, value, href }) {
  return (
    <a className="contact-card" href={href} target="_blank" rel="noreferrer">
      <span className="card-subtitle">{label}</span>
      <span className="contact-value">{value}</span>
    </a>
  );
}

function projectAccent(index) {
  const accents = ["var(--blue2)", "var(--green)", "var(--pink)"];
  return accents[index % accents.length];
}

export default App;
