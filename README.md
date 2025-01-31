# HNG12 Public API

## 📌 Project Description
This is a simple public API built for the **HNG12 Internship**. The API provides the following details:

- Your registered email address.
- The current date and time in **ISO 8601 format** (UTC timezone).
- The GitHub URL of the project's codebase.

The API is built using **Node.js (Express.js with TypeScript)** and is deployed on **Render**.

---

## 🚀 Live API Endpoint
**Base URL:**
`https://public-api-bjnt.onrender.com`

### 📡 **GET /**  (Fetch API Data)

#### ✅ **Response Format (200 OK)**
```json
{
    "email": "ellamsbliss@gmail.com",
    "current_datetime": "2025-01-31T21:00:53.320Z",
    "github_url": "https://github.com/iamBlissMedik/public_api"
}
```

---

## 🛠️ Local Development Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/iamBlissMedik/public_api.git
cd public-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Server**
#### Development Mode:
```sh
npm run dev
```
#### Production Mode:
```sh
npm run build && npm start
```

The server will start at **`http://localhost:4000/`** by default.

---

## 📜 API Documentation
| Method | Endpoint | Description |
|--------|----------|--------------|
| `GET`  | `/`      | Returns email, current timestamp, and GitHub repo link |

---

## 🔗 Relevant Link for Hiring Node.js Developers
Looking to hire Node.js developers? Check out:
[https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

---

## 📝 License
This project is licensed under the **MIT License**.

---

💡 **Need Help?** Feel free to open an issue in the repository. 🚀

