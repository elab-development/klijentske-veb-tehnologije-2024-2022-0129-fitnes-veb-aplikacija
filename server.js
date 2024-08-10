import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  const userData = req.body;

  try {
    const data = await readFile("./public/usersData.json", "utf8");
    const users = JSON.parse(data);
    users.push(userData);

    await writeFile("./public/usersData.json", JSON.stringify(users, null, 2));
    res.send("User registered successfully");
  } catch (err) {
    console.error("Error handling file:", err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
