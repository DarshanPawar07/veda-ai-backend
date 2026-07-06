VedaAI 🚀
An AI-powered assignment and question paper generation platform that helps educators and students create structured academic papers instantly using Generative AI.

🌐 Live Demo
Frontend: https://veda-ai-frontend-gamma.vercel.app/

Backend API: https://veda-ai-backend-production.up.railway.app/

✨ Features
Generate complete assignment papers using AI
Custom assignment title and instructions
Configure total questions and marks
Automatic question paper generation
View generated papers instantly
Assignment history dashboard
Detailed paper view with sections and questions
Responsive user interface
MongoDB-based data storage
Railway + Vercel deployment
🛠️ Tech Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
Backend
Node.js
Express.js
TypeScript
MongoDB
Mongoose
AI Integration
Groq API
Google Generative AI
Queue & Processing
BullMQ
Redis
Deployment
Vercel (Frontend)
Railway (Backend)
📂 Project Architecture
VedaAI
│
├── frontend
│   ├── src/app
│   ├── src/components
│   ├── src/lib
│   └── public
│
├── backend
│   ├── src/controllers
│   ├── src/routes
│   ├── src/models
│   ├── src/services
│   ├── src/utils
│   ├── src/config
│   └── uploads
│
└── README.md
⚙️ Installation
1. Clone Repository
git clone https://github.com/DarshanPawar07/veda-ai-backend.git
Backend Setup
cd backend

npm install
Create a .env file:

PORT=5000

MONGODB_URI=your_mongodb_uri

REDIS_URL=your_redis_url

GROQ_API_KEY=your_groq_api_key

GOOGLE_API_KEY=your_google_api_key
Run backend:

npm run dev
Frontend Setup
cd frontend

npm install
Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:5000
Run frontend:

npm run dev
🚀 Deployment
Backend (Railway)
Platform: Railway
URL:
https://veda-ai-backend-production.up.railway.app/
Environment Variables:

PORT
MONGODB_URI
REDIS_URL
GROQ_API_KEY
GOOGLE_API_KEY
Frontend (Vercel)
Platform: Vercel
URL:
https://veda-ai-frontend-gamma.vercel.app/
Environment Variable:

NEXT_PUBLIC_API_URL=https://veda-ai-backend-production.up.railway.app
📸 Application Workflow
Open the dashboard.
Enter assignment title.
Add instructions.
Select total questions.
Select total marks.
Click Generate Paper.
AI generates a complete assignment.
View generated paper.
Access previous papers through Recent Papers.
🎯 Future Improvements
User authentication
Teacher and student dashboards
Cloud storage for PDFs
Assignment sharing
Subject-wise templates
Difficulty-level customization
Export to PDF and DOCX
Analytics dashboard
👨‍💻 Author
Darshan Pawar
Software Developer | MERN Stack Developer | AI Enthusiast

GitHub: https://github.com/DarshanPawar07

LinkedIn: https://www.linkedin.com/

📄 License
This project is created for educational and portfolio purposes.

