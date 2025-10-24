const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 5050;

const NVIDIA_API_URL = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";
const NVIDIA_API_KEY = "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";

// Add explicit CORS config
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Changed to 3000
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Handle preflight OK
  }
  next();
});

app.use(express.json());

app.post("/api/generate", async (req, res) => {
  console.log("🔄 Received request at /api/generate");
  console.log("📦 Payload:", req.body);

  try {
    const response = await fetch(NVIDIA_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NVIDIA_API_KEY}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    console.log("✅ Response from NVIDIA:", data);
    res.json(data);
  } catch (error) {
    console.error("❌ Proxy server error:", error);
    res.status(500).json({ error: "Failed to fetch from NVIDIA API" });
  }
});

app.get("/ping", (req, res) => {
  console.log("📡 Ping received");
  res.send("✅ Server is running");
});

// Always-on mode
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
});
