# 🚀 MEAN Stack Boilerplate — Angular + Node.js + Express + MongoDB

A full-featured MEAN stack boilerplate to kickstart your full-stack web apps using **Angular CLI** on the frontend, **Node.js/Express** on the backend, and **MongoDB** for the database. Clean structure, easy setup, and ready to scale.

---

### ⚙️ Tech Stack

- **Frontend:**  
  - Angular (CLI)  
  - TypeScript  

- **Backend:**  
  - Node.js  
  - Express.js  
  - MongoDB (with Mongoose)  

- **Tooling:**  
  - Angular CLI  
  - Nodemon for live-reload backend dev   
  - dotenv for environment configs

---

### 📂 Project Structure

```
/project-root
├── client/         # Angular frontend (via Angular CLI)
│   ├── src/
│   └── angular.json
├── server/         # Node/Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── ...
├── package.json    # Root scripts for dev workflow
└── README.md
```

---

### 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/ByteSynergyLabs/MEAN-boilerplate.git
cd MEAN-boilerplate
```

2. **Install dependencies**
```bash

# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. **Environment config**
Create a `.env` file inside the `server/` directory:
```
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

4. **Run the app**
From the root directory:
```bash
npm run dev
```
- Angular app will run on `http://localhost:4200`  
- Express API will run on `http://localhost:5000`

---

### 🌟 Features

- Clean and modular file structure  
- Full REST API with Express and MongoDB  
- Angular CLI for frontend development  
- Live reload for both frontend and backend during development  
- Environment-based configuration support  
- Preconfigured scripts for easy dev and production builds

---

### 📌 Scripts

| Command         | Description                          |
|----------------|--------------------------------------|
| `npm run dev`   | Run both client & server together    |
| `npm run client`| Run Angular frontend only            |
| `npm run server`| Run Node/Express backend only        |
| `npm run build` | Build Angular frontend for production|

---

### 📄 License

Licensed under [MIT](LICENSE).

---

### 🙌 Contributions

Pull requests are welcome! Let’s build better software together.
