# alx-project-0x00-setup
Mastering Next.js Setup-fundamentals of building modern web applications using React, TypeScript, and Next.js.


Summary: Task 0 – Scaffolding a Next.js Project with TypeScript
🔧 1. Environment Preparation
Ensure Node.js v16+ and npm are installed.

Launch a new instance of Visual Studio Code (VS Code).

Open the terminal: Terminal → New Terminal.

Navigate to your desired working directory.

🏗️ 2. Create the Next.js Project
Run the scaffold command:
bash
Copy
Edit
npx create-next-app@latest alx-project-0x00 --typescript
When prompted, select:
✅ ESLint: Yes

✅ Tailwind CSS: Yes

✅ Import alias: Yes → enter: @/*

❌ /src directory: No

❌ App Router: No

❌ Turbopack: No

📁 3. Navigate into the Project Folder
bash
Copy
Edit
cd alx-project-0x00
🧪 4. Start the Development Server
bash
Copy
Edit
npm run dev -- -p 3000
Visit http://localhost:3000 to confirm your project is running.

📦 5. Troubleshooting (if needed)
If you encounter:

bash
Copy
Edit
npm ERR! Missing script: "dev"
✅ Do the following:

Make sure you're inside the alx-project-0x00 directory.

Run npm run to confirm available scripts.

If the "dev" script is missing, reinstall dependencies:

bash
Copy
Edit
rm -rf node_modules package-lock.json
npm install
If that fails, simply re-run the scaffold command from Step 2.

🗂️ 6. Project Structure Overview
Your project should now include:

bash
Copy
Edit
alx-project-0x00/
├── components/        # For reusable components
├── pages/             # Page-based routing
├── public/            # Static assets (images, fonts)
├── styles/            # Tailwind/global styles
├── tsconfig.json      # TypeScript config
├── next.config.js     # Next.js settings
├── tailwind.config.js # Tailwind CSS config
└── package.json       # Project dependencies & scripts