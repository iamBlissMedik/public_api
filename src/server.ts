import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "your-email@example.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/yourusername/your-repo",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
``