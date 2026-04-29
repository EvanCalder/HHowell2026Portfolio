import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  kpipic1,
  kpipic2,
  kpipic3,
  kpipic4,
  kpipic5,
  hradminpic1,
  hradminpic2,
  hradminpic3,
  hradminpic4,
  hradmincover,
  ithelpsitepic1,
  ithelpsitepic2,
  ithelpsitepic3,
  ithelpsitepic4,
  mileagetrackerpic1,
  shippingleaderboardpic1,
  cmykcoloranyluzer,
  deacom,
  googletomicrosoft,
  portfoliopic1,
  rcologo,
  mihinlogo,
  bhglogo,
  forecastpic1,
  forecast2,
  forecast3,
  forecast4,
  forecast5,
  forecast6,
  calendarpic1,
  calendar2,
  calendar3,
  orbitaicoverphoto,
  orbitaipic1,
  orbitai2,
  orbitai3,
  orbitai4,
  orbitai5,
  expensetrackerpic1,
  python,
  sqlicon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "resume",
    title: "Resume",
    external: true,
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Pipelines & ETL",
    icon: backend,
  },
  {
    title: "Real-Time Dashboards",
    icon: creator,
  },
  {
    title: "AI Platforms & Developer Tools",
    icon: web,
  },
  {
    title: "AI & Automation",
    icon: mobile,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: sqlicon },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "Tailwind", icon: tailwind },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
];

const tools = [
  {
    category: "Data Engineering",
    items: ["Cloudflare Workers", "Cloudflare KV", "Azure Data Factory", "Azure SQL Database", "Azure Functions", "Cron Jobs", "ETL Pipelines", "Cursor-Based Pagination", "Response Caching"],
  },
  {
    category: "APIs & Data Sources",
    items: ["Shopify REST API", "Amazon SP-API", "ShipStation API", "Google Sheets API", "Google Apps Script", "Google Maps API", "Distance Matrix"],
  },
  {
    category: "Data & Visualization",
    items: ["Chart.js", "jsvectormap", "Power BI", "SQL", "Python", "Excel", "Canvas API"],
  },
  {
    category: "ML & Forecasting",
    items: ["Nixtla StatsForecast", "LightGBM", "HierarchicalForecast", "Azure Key Vault"],
  },
  {
    category: "Cloud & Backend",
    items: ["Bun", "Hono", "Node.js", "SQLite (bun:sqlite)", "Firebase Auth", "Cloud Firestore", "Firebase Cloud Functions", "Firebase Hosting", "WebSocket", "SSE (Server-Sent Events)", "Vite"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Zustand", "xterm.js", "Three.js", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "AI & Automation",
    items: ["Claude Code CLI", "Anthropic API", "Prompt Caching", "Serval AI", "Paperclip", "Multi-Agent Orchestration", "PTY Process Isolation"],
  },
  {
    category: "Security",
    items: ["AES-256-GCM", "HMAC-Derived Per-User Keys", "JWT (jose)", "Firebase Google OAuth", "Environment Scrubbing"],
  },
  {
    category: "Infrastructure",
    items: ["Cloudflare Tunnel", "systemd", "node-pty", "Tauri v2 (Rust)", "GitHub Actions", "Microsoft 365", "Exchange Online", "Entra ID", "Active Directory", "Intune", "DEACOM ERP", "UniFi", "ThreatLocker", "SuperOps RMM", "Git", "GitHub", "Docker"],
  },
];

const experiences = [
  {
    title: "IT Specialist",
    company_name: "Rowe Casa Organics",
    icon: rcologo,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Present",
    points: [
      "Architected Orbit AI, a self-hosted multi-tenant Claude Code platform our IT team uses to collaborate on projects, with per-user isolation and automatic file locking.",
      "Built a 12-dashboard Shopify analytics platform with a Cloudflare Worker backend, KV caching, and automated ETL. Now one of the primary metrics resources for C-Suite leadership.",
      "Built cron-based data pipelines that fetch, transform, and cache order/fulfillment/shipping data every 6 hours with 30-minute incremental refreshes and nightly historical backfills.",
      "Currently architecting a demand forecasting platform using Azure Data Factory, Azure SQL Database, and Nixtla ML stack with multi-channel data integration from Shopify, Amazon, and DEACOM ERP.",
      "Supported company-wide DEACOM ERP rollout, configuring data workflows and training departments on the new system.",
      "Completed Google Workspace to Microsoft 365 migration with Active Directory-based user provisioning for the entire organization.",
      "Managed day-to-day IT operations including ticketing, end-user support, UniFi network infrastructure, ThreatLocker endpoint security, and SuperOps RMM for patching, monitoring, and remote access.",
      "Administered Microsoft Intune MDM for device lifecycle management across iPads, scanners, and endpoints. Managed physical security systems including access control and camera infrastructure.",
    ],
  },
  {
    title: "Data Entry Specialist",
    company_name: "Michigan Health Information Network (MiHIN)",
    icon: mihinlogo,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2025",
    points: [
      "Maintained data accuracy and organized large data sets in Excel.",
      "Used SQL to query and validate data in support of healthcare information systems.",
      "Collaborated across teams using HubSpot and Jira to ensure consistent data reporting and task tracking.",
    ],
  },
  {
    title: "Customer Engagement Team",
    company_name: "Michigan Health Information Network (MiHIN)",
    icon: mihinlogo,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Acted as liaison between MiHIN and healthcare organizations to facilitate secure data exchange.",
      "Created and managed communication pathways using destination strings.",
      "Onboarded and decommissioned organizations via Jira tickets and HubSpot.",
      "Collected data for RCA (Root Cause Analysis) requests to resolve internal issues.",
    ],
  },
  {
    title: "Graphic Design Marketing Intern",
    company_name: "Better Homes and Gardens Real Estate",
    icon: bhglogo,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Dec 2022",
    points: [
      "Designed promotional materials targeting key real estate demographics.",
      "Collaborated with agents to develop branding materials and client outreach content.",
      "Applied graphic design and social media marketing skills to increase engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hayden transformed our production floor visibility with real-time dashboards that supervisors actually use every day.",
    name: "Operations Lead",
    designation: "Supervisor",
    company: "Rowe Casa Organics",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "His ability to bridge IT infrastructure and business needs made our ERP implementation significantly smoother.",
    name: "Department Manager",
    designation: "Manager",
    company: "Rowe Casa Organics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Hayden's data analysis skills and attention to detail were invaluable for maintaining our healthcare information systems.",
    name: "Team Lead",
    designation: "Lead",
    company: "MiHIN",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Forecasting Solution",
    description:
      "Custom demand forecasting solution with Azure SQL, ML-powered predictions via Nixtla, and multi-channel data integration. In progress.",
    detailedDescription:
      "A custom demand forecasting and unified data platform currently being built for a hand-manufactured organic products company, replacing manual spreadsheet-based forecasting with an automated ML-powered pipeline.\n\nKey highlights:\n\n• Evaluated 6 SaaS vendors (Flieber, Netstock, Inventory Planner, Streamline, Lokad, DemandCaster) — none support native ERP integration or organic shelf life modeling. Custom build selected for 3-year cost advantage and full flexibility.\n\n• Architecture: Azure Data Factory (ETL) → Azure SQL Database (warehouse) → Nixtla ML stack → Power BI dashboards. Self-Hosted Integration Runtime bridges on-premises ERP to the cloud.\n\n• Tiered ML approach: StatsForecast for statistical baselines, LightGBM for gradient-boosted predictions on top SKUs, HierarchicalForecast for multi-channel reconciliation across DTC, Amazon, and wholesale.\n\n• Addresses organic manufacturing constraints: shelf life / FEFO inventory, hand-manufacturing batch limits, seasonal ingredient sourcing, and demand variability across hundreds of retail partners.\n\n• Built a comprehensive project plan site with interactive Build vs Buy analysis, full engineering blueprint covering 11 subsystems, architecture diagrams, vendor scorecards, and phased implementation roadmap.",
    inProgress: true,
    hideVideo: true,
    dataIntegration:
      "Data Sources: Shopify Admin API, Amazon Selling Partner API, On-Premises ERP (SQL read access via Azure SHIR).\n\nPipeline: Azure Data Factory orchestrates ETL jobs pulling from all three sources into Azure SQL Database. A Self-Hosted Integration Runtime (SHIR) bridges the on-premises ERP to the cloud pipeline.\n\nML Stack: Nixtla StatsForecast (statistical baselines) → LightGBM via MLForecast (gradient boosting for top SKUs) → HierarchicalForecast (multi-channel reconciliation). Compute runs on Azure Functions (serverless Python).\n\nOutput: Demand forecasts by SKU at daily, weekly, and monthly granularity, surfaced through Power BI dashboards.",
    tags: [
      { name: "azure", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      { name: "data-engineering", color: "pink-text-gradient" },
    ],
    techStack: [
      "Azure SQL Database", "Azure Data Factory", "Azure Functions",
      "Python", "Nixtla StatsForecast", "LightGBM", "HierarchicalForecast",
      "Shopify API", "Amazon SP-API", "Power BI", "Azure Key Vault",
    ],
    image: forecastpic1,
    images: [
      { src: forecastpic1, caption: "Build vs Buy — Side-by-side cost and capability comparison across custom, SaaS, and hybrid approaches" },
      { src: forecast2, caption: "Platform Proposal — Project overview, navigation guide, and problem statement" },
      { src: forecast3, caption: "Full Build Blueprint — 11 major subsystems with complexity ratings and risk analysis" },
      { src: forecast4, caption: "System Architecture — Data flow from sources through warehouse to intelligence layer" },
      { src: forecast5, caption: "Data Sources — Deacom ERP, Shopify, and Amazon SP-API integration details" },
      { src: forecast6, caption: "Solutions Deep Dive — Vendor scorecard against unique manufacturing requirements" },
    ],
    source_code_link: "https://github.com/hhowell116/Demo-RCO-Forecast",
    videoUrl: "",
    liveDemo: "https://hhowell116.github.io/Demo-RCO-Forecast/",
  },
  {
    name: "Orbit AI",
    description:
      "Multi-tenant AI coding platform for teams — browser-based Claude Code terminal, real-time file locks, activity feeds, and team rule syncing. Self-hosted on a VM behind a Cloudflare tunnel at orbitai.work.",
    detailedDescription:
      "A team-based AI coding platform built so entire IT teams can collaborate inside a shared Claude Code environment without installing anything locally. Teams sign up, invite members, create projects (git clone, zip upload, or blank), and work together with Claude AI through a browser.\n\nKey highlights:\n\n• Browser-based terminal — xterm.js in the browser connects over WebSocket to a broker on the VM, which spawns a per-user PTY running Claude Code. Each user gets their own `CLAUDE_CONFIG_DIR` and OAuth token injected into the PTY env. No desktop install required.\n\n• Automatic file locking — when a user opens a project terminal, the broker starts an fs.watch on the project directory. Any file edit auto-locks the file for that user, broadcast via SSE so the entire team sees who's editing what in real-time. Locks release when all of a user's tabs disconnect.\n\n• Team + project rules synced to CLAUDE.md — rules are stored as JSON rule blocks in SQLite, then rules-sync.ts writes a combined CLAUDE.md into each project root so Claude Code picks them up automatically on startup.\n\n• Per-user AES-256-GCM encryption — Claude tokens and GitHub PATs are encrypted with keys derived via HMAC-SHA256(masterSecret, userId). Master key lives at ~/.config/orbit-ai/.mk with 0600 perms, scrubbed from PTY child environments so users with shell access can't extract it.\n\n• Real-time collaboration — SSE broadcast system pushes activity events (file edits, bash runs, session creates), lock changes, and presence updates to all connected clients. 30s heartbeat keeps the feed live.\n\n• Self-healing infrastructure — systemd user units (broker, tunnel, auto-deploy, watchdog) with `Restart=always`, `StartLimitIntervalSec=0`. Watchdog polls orbitai.work every 60s and restarts the tunnel or broker on failure. Cloudflare tunnel uses HTTP/2 over TCP/443 to survive QUIC/UDP drops through the VM's Hyper-V switch.\n\n• Auto-deploy from GitHub — auto-deploy.sh polls the repo every 60s, pulls on new commits, rebuilds the dashboard, and restarts the broker. Push to main = live in under a minute.\n\n• Optional Tauri v2 desktop app — CI builds native binaries on every tag push for users who prefer a native window over the browser.",
    dataIntegration:
      "Architecture: Browser (React 19 dashboard + xterm.js) ↔ Bun/Hono broker on :5000 ↔ SQLite (WAL) + per-user PTY workers (node-pty via TCP socket) ↔ Claude Code CLI.\n\nAuth: Firebase Google OAuth + username/password, both issue HS256 JWTs (24h expiry) via jose. Team selection re-issues a JWT with team_id and team_role baked in.\n\nAI modes: (1) Browser terminal — full Claude Code subscription access through the user's own setup token, no per-token cost. (2) API chat fallback — @anthropic-ai/sdk with prompt caching for users without a Claude subscription.\n\nReal-time: SSE streams for activity, file locks, session updates, and online-user presence. WebSocket for xterm.js ↔ PTY. PTY sessions survive browser disconnects — close a tab, reopen, reconnect to the same running process.\n\nTunnel: Cloudflare named tunnel `orbit-ai` (UUID 6ace143f-371e-474a-abbd-4238b5e5d961) → orbitai.work CNAME → localhost:5000. HTTP/2 protocol, IPv4-only, 10 retries, 30s grace period.",
    tags: [
      { name: "ai-platform", color: "blue-text-gradient" },
      { name: "multi-tenant", color: "green-text-gradient" },
      { name: "claude-code", color: "pink-text-gradient" },
    ],
    techStack: [
      "Bun 1.3", "Hono 4", "SQLite (bun:sqlite)", "React 19", "Vite 8",
      "Tailwind CSS 4", "Zustand 5", "xterm.js", "node-pty", "WebSocket",
      "Claude Code CLI", "Anthropic SDK", "Firebase Auth (Google OAuth)",
      "jose JWT (HS256)", "AES-256-GCM", "Tauri v2 (Rust)",
      "Cloudflare Tunnel", "systemd", "GitHub Actions",
    ],
    image: orbitaicoverphoto,
    images: [
      { src: orbitaicoverphoto, caption: "Orbit AI — Multi-tenant AI coding platform landing" },
      { src: orbitaipic1, caption: "Dashboard — 3-column layout with projects, activity feed, and team nav" },
      { src: orbitai2, caption: "Project page — xterm.js terminal running Claude Code via WebSocket to a per-user PTY" },
      { src: orbitai3, caption: "Team collaboration — file locks, activity feed, and online presence" },
      { src: orbitai4, caption: "Rules system — team and project rules synced to CLAUDE.md on disk" },
      { src: orbitai5, caption: "Connections — encrypted Claude and GitHub token storage per user" },
    ],
    source_code_link: "https://github.com/hhowell116/orbit-ai",
    videoUrl: "",
    liveDemoLabel: "Visit Site",
    liveDemo: "https://orbitai.work",
  },
  {
    name: "RCO Metrics Dashboard",
    description:
      "Full-stack operations dashboard pulling live data from Shopify API via Cloudflare Worker backend. 12 dashboards covering sales, fulfillment, shipping, and international orders across retail and wholesale stores.",
    detailedDescription:
      "A primary metrics resource for C-Suite leadership at Rowe Casa Organics — actively monitored daily and replacing manual spreadsheet tracking across the organization.\n\nKey highlights:\n\n• Cloudflare Worker API backend pulls live data from two Shopify stores (Retail + Wholesale) with cursor-based pagination, 10-minute KV caching, and timezone-aware date handling.\n\n• Revenue estimated via 250-order sampling scaled to total counts. Gift card exclusions and cross-day refund adjustments match Shopify Analytics exactly.\n\n• Cron-based ETL: KPIs refresh every 6 hours, fulfillment counts every 30 minutes, nightly backfills for top products, orders overview, and international geo data.\n\n• 12 dashboard views: Weekly Overview, Fulfillment KPI (4-day/7-day fill rates), Sales (MTD/YTD), Shipping Leaderboards, Orders Overview, International choropleth maps, Top Products, Unfulfilled Orders, and Skip-the-Line tracker.\n\n• Admin panel with Firebase-persisted role permissions, real-time user presence tracking, access logs, and a methodology reference documenting every data source and calculation.\n\n• TV Mode auto-rotates through dashboards for wall-mounted displays. Guided walkthrough tour, URL deep linking, dark mode, and revenue restriction by role.",
    dataIntegration:
      "Data Sources: Shopify REST API (2 stores — Retail + Wholesale), ShipStation API via Google Sheets, Firebase Realtime Database.\n\nPipeline: A Cloudflare Worker serves as the API backend, handling paginated order fetching with cursor-based pagination across both Shopify stores. Responses are cached in Cloudflare KV with 10-minute TTLs — multiple users hitting the dashboard simultaneously trigger only one Shopify API call.\n\nETL Schedule: Cron jobs refresh fulfillment KPI data every 6 hours, compute shipped order counts every 30 minutes, and run nightly backfills at 2 AM CT for top products, orders overview, and international geo data.\n\nTransformations: Revenue estimated via 250-order sampling scaled to total counts, gift card line items excluded, cross-day refunds subtracted, fill rates calculated by checking current fulfillment status at refresh time. All dates handled in Central Time with automatic DST adjustment.",
    tags: [
      { name: "shopify-api", color: "blue-text-gradient" },
      { name: "cloudflare-workers", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    techStack: [
      "JavaScript", "HTML5", "CSS3", "Shopify REST API",
      "Cloudflare Workers", "Cloudflare KV", "Cron Triggers",
      "Chart.js", "jsvectormap", "Firebase Authentication",
      "Firebase Realtime Database", "Google SSO", "Role-Based Access Control",
      "Cursor-Based Pagination", "Response Caching", "Python (Backfill Scripts)",
    ],
    image: kpipic5,
    images: [
      { src: kpipic5, caption: "Weekly Overview — Retail vs Wholesale KPIs, daily breakdown, top products and states" },
      { src: kpipic1, caption: "Fulfillment KPI — Daily order counts with 4-day and 7-day fill rates and trend charts" },
      { src: kpipic2, caption: "Sales Dashboard — Today, MTD, and YTD revenue for Retail and Wholesale" },
      { src: kpipic4, caption: "International Orders — US choropleth map with state-level order distribution" },
      { src: kpipic3, caption: "Admin Panel — Role permissions matrix, access logs, and user directory" },
    ],
    source_code_link: "https://github.com/hhowell116/Demo-RCO-Metrics-Dashboard",
    videoUrl: "",
    liveDemo: "https://hhowell116.github.io/Demo-RCO-Metrics-Dashboard/",
  },
  {
    name: "DEACOM ERP Rollout",
    description:
      "Supported the company-wide implementation of DEACOM ERP, configuring workflows, training departments, and integrating warehouse scanners via Intune.",
    detailedDescription:
      "Company-wide ERP implementation touching every department — from fulfillment and production to accounting and customer service.\n\nKey highlights:\n\n• Replaced legacy systems with DEACOM ERP as the unified platform for manufacturing, inventory, shipping, and accounting.\n\n• Configured department-specific workflows, mapping existing business processes into the ERP and adapting configurations to match how each team operates.\n\n• Deployed Intune-managed warehouse barcode scanners integrated directly with DEACOM for real-time inventory tracking on the production and shipping floor.\n\n• Trained department leads and end users with hands-on support during the transition to minimize disruption to daily operations.\n\n• Handled device provisioning, MDM policies, and ongoing scanner troubleshooting to keep warehouse operations running smoothly.",
    tags: [
      { name: "erp", color: "blue-text-gradient" },
      { name: "intune", color: "green-text-gradient" },
      { name: "infrastructure", color: "pink-text-gradient" },
    ],
    techStack: [
      "DEACOM ERP", "Microsoft Intune", "MDM", "Active Directory",
      "Barcode Scanners", "Workflow Configuration", "User Training",
      "Device Provisioning", "IT Infrastructure",
    ],
    image: deacom,
    hideVideo: true,
    source_code_link: "",
    videoUrl: "",
    liveDemo: "",
  },
  {
    name: "Google to Microsoft 365 Migration",
    description:
      "Company-wide migration from Google Workspace to Microsoft 365 with Active Directory provisioning and email migration.",
    detailedDescription:
      "Full company migration affecting every employee — email, calendar, file storage, and collaboration tools transitioned from Google to Microsoft.\n\nKey highlights:\n\n• Migrated all Google email, contacts, and calendar data to Exchange Online with minimal downtime.\n\n• Set up Active Directory-based user provisioning — new employees automatically get correct M365 licenses, email, and security groups based on role and department.\n\n• Configured the full M365 environment: Exchange Online, SharePoint, OneDrive, Microsoft Teams, and Entra ID (Azure AD) for identity management.\n\n• Implemented conditional access policies, MFA enforcement, and security defaults for compliance.\n\n• Coordinated with department leads to ensure business continuity throughout the transition. Post-migration, managed ongoing license optimization, security monitoring, and end-user support.",
    tags: [
      { name: "microsoft-365", color: "blue-text-gradient" },
      { name: "active-directory", color: "green-text-gradient" },
      { name: "cloud-migration", color: "pink-text-gradient" },
    ],
    techStack: [
      "Microsoft 365", "Exchange Online", "Active Directory", "Entra ID (Azure AD)",
      "SharePoint", "OneDrive", "Microsoft Teams", "Intune",
      "Conditional Access", "MFA", "License Management", "Email Migration",
    ],
    image: googletomicrosoft,
    hideVideo: true,
    source_code_link: "",
    videoUrl: "",
    liveDemo: "",
  },
  {
    name: "IT Help Portal",
    description:
      "Internal IT portal for Rowe Casa Organics with department-specific technology surveys, onboarding/offboarding request forms, and Firestore-backed submission tracking with domain-restricted Google SSO.",
    detailedDescription:
      "Internal IT portal streamlining request management and technology discovery across the organization.\n\nKey highlights:\n\n• Technology & Application Discovery Survey with conditional logic that adapts questions based on the user's department.\n\n• Request forms for employee onboarding, offboarding, and equipment/software needs — each submission saved to Cloud Firestore.\n\n• Role-based access control with 5 levels (IT Admin, C-Suite, Director, Manager, Staff) and configurable permissions per feature.\n\n• Google Sheets integration via Apps Script for automated data export and IT admin reporting.\n\n• Domain-restricted Google SSO authentication. Completed submissions viewable in a \"My Completed\" tab across devices.\n\n• Dark mode support, responsive design, and a direct \"Contact IT Support\" button with pre-filled Gmail compose.",
    dataIntegration:
      "Data Flow: Form submissions → Cloud Firestore → Google Apps Script → Google Sheets.\n\nUser submissions are stored in Firestore and simultaneously exported to Google Sheets via Apps Script for IT admin reporting. Authentication is handled through Firebase Google SSO restricted to the company domain.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "google-apps-script", color: "pink-text-gradient" },
    ],
    techStack: [
      "JavaScript", "HTML5", "CSS3", "Firebase Authentication", "Cloud Firestore",
      "Google Apps Script", "Google Sheets", "Google SSO", "Responsive Design",
    ],
    image: ithelpsitepic1,
    images: [
      { src: ithelpsitepic1, caption: "Request Forms — Onboarding, offboarding, equipment, and rockstar nomination forms" },
      { src: ithelpsitepic4, caption: "Roles / Access — Permission toggles and member directory by role level" },
      { src: ithelpsitepic2, caption: "Completed Submissions — Submission history with survey and form results" },
      { src: ithelpsitepic3, caption: "Google Sheets — Direct links to response spreadsheets (IT Admin only)" },
    ],
    source_code_link: "https://github.com/hhowell116/Demo-RCO-Help-Site",
    videoUrl: "",
    liveDemo: "https://hhowell116.github.io/Demo-RCO-Help-Site/",
  },
  {
    name: "Shipping Department Leaderboards",
    description:
      "Daily shipping leaderboard displayed on warehouse TVs, ranking employees by fulfillment performance with auto-scrolling and medal icons.",
    detailedDescription:
      "Displayed on TVs across the shipping department all day for the entire team to watch — also embedded as a tab in the RCO Metrics Dashboard for leadership visibility.\n\nKey highlights:\n\n• Ranks warehouse employees by fulfillment performance, segmented into Full-Time, Part-Time, and Wholesale categories.\n\n• Gold, silver, and bronze medal icons for top performers. Auto-scrolls so everyone can see their position without touching the screen.\n\n• Data sourced from Google Sheets CSV pulling from ShipStation API — Google Sheets used because BambooHR API doesn't expose full-time vs part-time status needed for categories.\n\n• Optimized for large-screen readability on wall-mounted displays with high-contrast colors and oversized text.",
    dataIntegration:
      "Data Source: ShipStation API → Google Sheets (published CSV).\n\nThe leaderboard pulls from a Google Sheet that auto-refreshes throughout the day with shipping metrics from ShipStation. A Google Sheets CSV approach was used because the BambooHR API does not expose full-time vs part-time employment status, which is required for segmenting the leaderboard categories.\n\nThis leaderboard is also embedded as a tab within the RCO Metrics Dashboard, giving C-Suite visibility into daily shipping performance alongside all other operational metrics.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css-grid", color: "green-text-gradient" },
      { name: "google-sheets", color: "pink-text-gradient" },
    ],
    techStack: [
      "HTML5", "CSS Grid", "JavaScript", "Google Sheets CSV",
      "ShipStation API", "Auto-scroll Animation", "TV Display Optimization",
    ],
    image: shippingleaderboardpic1,
    source_code_link: "https://github.com/hhowell116/shipstation-dashboard",
    videoUrl: "",
    liveDemo: "",
  },
  {
    name: "CMYK Color Analyzer",
    description:
      "React-based image color analysis tool. Upload an image via drag-and-drop to extract CMYK composition with pie charts, a top-50 color frequency grid, and individual channel isolation previews.",
    detailedDescription:
      "Built for the design team to evaluate print color accuracy before sending artwork to production.\n\nKey highlights:\n\n• Drag-and-drop image upload with instant CMYK color composition analysis.\n\n• Pie chart showing overall color distribution across Cyan, Magenta, Yellow, and Key (Black) channels.\n\n• Top-50 color frequency grid highlighting the most prominent colors in the image.\n\n• Individual channel isolation previews — view the Cyan, Magenta, Yellow, or Black layer independently.\n\n• Built with Canvas API for pixel-level image processing and Chart.js for data visualization.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "chart.js", color: "green-text-gradient" },
      { name: "canvas-api", color: "pink-text-gradient" },
    ],
    techStack: [
      "React", "Chart.js", "Canvas API", "Drag-and-Drop API",
      "CMYK Color Space", "Image Processing", "CSS3",
    ],
    image: cmykcoloranyluzer,
    imageContain: true,
    source_code_link: "https://github.com/hhowell116/CMYK-color-analyzer",
    videoUrl: "",
    liveDemoLabel: "Try It Out!",
    liveDemo: "https://hhowell116.github.io/CMYK-color-analyzer/",
  },
  {
    name: "HR Admin Control Panel",
    description:
      "Firebase-hosted admin dashboard for the HR team to manage employee recognition content, internal TV displays, and HR workflows with Firebase Authentication and Firestore backend.",
    detailedDescription:
      "Used daily by the head of HR and HR team. Display slideshows run on every TV in the facility, celebrating employees and making them feel valued in front of the entire company.\n\nKey highlights:\n\n• Monorepo with 3 packages: admin panel, Airtame-connected TV display app, and shared component library.\n\n• Birthday and anniversary slides auto-generated from employee data with personalized photos, names, and unique celebratory messages (10 rotating birthday messages, tenure-based anniversary flair).\n\n• Monthly \"Rockstar\" spotlights — recognized employees displayed on every TV with their photo and a quote from leadership.\n\n• Real-time Firestore syncing — admin edits appear on display screens instantly via onSnapshot listeners.\n\n• Role-based access control (IT Admin, HR, C-Suite). Firebase Cloud Functions for user role provisioning and data seeding.\n\n• Configurable display settings: rotation speed, transition duration, progress bar, and dot navigation. Multi-site Firebase Hosting for separate admin and display deployments.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "firestore", color: "pink-text-gradient" },
    ],
    dataIntegration:
      "Data Flow: Admin panel → Cloud Firestore (real-time) → Display app (Airtame TVs).\n\nEmployee data, campaign entries, and display configuration are stored in Firestore with real-time listeners. When HR updates a birthday, anniversary, or rockstar slide in the admin panel, the change appears on every TV display instantly via Firestore onSnapshot. Firebase Cloud Functions handle user role provisioning and data seeding.",
    techStack: [
      "React 18", "TypeScript", "Vite", "Tailwind CSS",
      "Firebase Authentication", "Cloud Firestore", "Firebase Cloud Functions",
      "Firebase Hosting (Multi-site)", "RBAC", "npm Workspaces (Monorepo)",
    ],
    image: hradmincover,
    images: [
      { src: hradminpic2, caption: "View Displays — Preview and launch Airtame-connected TV displays with Rockstar recognition" },
      { src: hradminpic1, caption: "IT Overview — Data completeness, role access matrix, and mapping tool" },
      { src: hradminpic4, caption: "Campaigns — Birthday, anniversary, and rockstar recognition campaign management" },
      { src: hradminpic3, caption: "Display Settings — Configure rotation speed, transitions, and navigation controls" },
    ],
    source_code_link: "https://github.com/hhowell116/Demo-HR-Admin-Control-Panel",
    videoUrl: "",
    liveDemo: "https://hhowell116.github.io/Demo-HR-Admin-Control-Panel/",
  },
  {
    name: "Mileage Tracker",
    description:
      "Business trip mileage tracking app with map integration, start/end trip controls, automatic distance calculation, and email reporting for employee travel between company locations.",
    detailedDescription:
      "Actively used by employees to submit gas reimbursement requests to the accounting team.\n\nKey highlights:\n\n• Interactive Texas map showing all company facility locations and trip routes.\n\n• Google Maps Distance Matrix API calculates accurate driving distances between locations in real-time.\n\n• Start Trip / End Trip controls for quick logging on the go. Trip history logged with dates, routes, and mileage totals.\n\n• Built-in reporting generates mileage summary emails sent directly to management for reimbursement processing.\n\n• Data persists in localStorage — works offline and across sessions without a backend.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "google-maps", color: "pink-text-gradient" },
    ],
    dataIntegration:
      "Data Flow: Google Maps API → Distance Matrix → Trip Log → Email Report.\n\nIntegrates with the Google Maps JavaScript API and Distance Matrix service to calculate accurate driving distances between RCO facility locations in real-time. Trip data is logged locally and compiled into mileage summary reports sent directly to the accounting team for gas reimbursement processing.",
    techStack: [
      "React", "Vite", "Tailwind CSS", "Google Maps API",
      "Distance Matrix", "localStorage", "Email Integration", "Geolocation",
    ],
    image: mileagetrackerpic1,
    hideVideo: true,
    source_code_link: "https://github.com/hhowell116/Demo-Mileage-Tracker",
    videoUrl: "",
    liveDemo: "https://hhowell116.github.io/Demo-Mileage-Tracker/",
  },
  {
    name: "3D Portfolio Site",
    description:
      "This portfolio website built with React, Three.js, and Framer Motion featuring interactive 3D models, animated sections, and a working contact form. Deployed on Firebase Hosting.",
    detailedDescription:
      "This portfolio site — built with React 18 and Vite 5, featuring a custom 3D data pipeline visualization.\n\nKey highlights:\n\n• 3D data pipeline hero built with React Three Fiber — animated particles flowing between Shopify, Cloudflare Worker, KV Cache, and Dashboard nodes.\n\n• Interactive 3D tech balls and a 3D Earth globe on the contact page powered by Three.js and Drei.\n\n• Smooth scroll animations and section transitions via Framer Motion.\n\n• Project modals with scrollable screenshot galleries, data integration sections, and tech stack badges.\n\n• Working contact form via FormSubmit.co. Styled with Tailwind CSS 3 and deployed on Firebase Hosting.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "framer-motion", color: "pink-text-gradient" },
    ],
    techStack: [
      "React 18", "Vite 5", "Three.js", "React Three Fiber", "Drei",
      "Framer Motion", "Tailwind CSS 3", "FormSubmit.co", "Firebase Hosting",
    ],
    image: portfoliopic1,
    hideVideo: true,
    source_code_link: "https://github.com/hhowell116/3D-Portfolio-Site",
    videoUrl: "",
    liveDemo: "",
  },
  {
    name: "Monthly Expense Tracker",
    description:
      "Personal and shared expense tracker with cloud-synced database, custom categories, income vs expense charts, and real-time collaboration.",
    detailedDescription:
      "A monthly expense tracking application with both personal and shared tracking modes, backed by a cloud database.\n\nKey highlights:\n\n• Shared tracker — invite others to a shared expense database so couples, roommates, or teams can track spending together in real-time. Everyone sees the same data instantly.\n\n• Personal tracker — keep a separate private budget that only you can see, running alongside the shared one.\n\n• Custom expense categories — create and manage your own spending categories (groceries, rent, utilities, etc.).\n\n• Income vs Expenses chart powered by Chart.js — visual breakdown of monthly spending patterns.\n\n• Cloud-synced database via Firestore — data persists across devices and updates in real-time. Log an expense on your phone and see it on your laptop instantly.\n\n• Google SSO authentication. Light and dark mode. Responsive design for desktop and mobile.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "chart.js", color: "pink-text-gradient" },
    ],
    techStack: [
      "JavaScript", "HTML5", "CSS3", "Chart.js",
      "Firebase Authentication", "Cloud Firestore", "Google SSO",
    ],
    image: expensetrackerpic1,
    source_code_link: "https://github.com/hhowell116/Expense-Tracker",
    videoUrl: "",
    liveDemoLabel: "Try It Out!",
    liveDemo: "https://hhowell116.github.io/Expense-Tracker/",
  },
];

export { services, technologies, tools, experiences, projects };
