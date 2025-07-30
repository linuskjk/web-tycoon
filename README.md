# 💼 WebTycoon – Idle Business Simulator

**WebTycoon** is a browser-based idle simulation game where you build and grow your own online empire. Upgrade your infrastructure, unlock new business models, earn passive income, and compete with others on the leaderboard.

---

## 🚀 Features

- 🏢 Build and upgrade your virtual business
- 🔓 Unlock new departments and business areas
- 💰 Earn money passively over time (idle mechanic)
- 🧠 Strategic upgrade system to increase efficiency
- 📈 Leaderboards and competitions
- 💾 Progress saved securely on the server
- 🔐 Account system with login & registration

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Data Storage**: JSON files on your own server or NAS

---

## 📦 File Structure

WebTycoon/
├── index.html
├── style.css
├── script.js
├── /php/
│ ├── login.php
│ ├── register.php
│ ├── save_progress.php
│ └── leaderboard.php
├── /data/
│ ├── users.json
│ └── leaderboard.json
└── README.md

yaml
Copy
Edit

---

## 🔑 Setup Instructions

1. Clone or download the project to your server.
2. Make sure PHP is installed and running.
3. Ensure the `/data/` folder has write permissions.
4. Open the project in your browser (e.g. `http://localhost/WebTycoon/`).
5. Register a new account and start building your empire!

---

## 🧠 Game Mechanics

- Every second, your business earns money depending on your upgrades.
- You can upgrade **Marketing**, **Servers**, **Employees**, and more.
- Each upgrade increases your idle income or unlocks new features.
- Leaderboard ranks players by total net worth or growth rate.

---

## 💾 Save System

- All user data (progress, upgrades, money) is stored in `users.json`
- The server handles all money updates and upgrades to avoid cheating.
- Leaderboards are generated dynamically based on saved data.

---

## 📋 To-Do / Future Ideas

- 🏆 Daily and weekly challenges
- 🧑‍💼 Staff management system
- 🏙️ Expand to multiple businesses (e.g. web hosting, streaming, e-commerce)
- 🛒 In-game store (cosmetics only)
- ☁️ Cloud save support

---

## 📃 License

MIT License – Feel free to use, modify, and expand this project for your own purposes.

---

## 🙌 Created by

Linus – self-hosted projects & web-based games enthusiast 🚀 
