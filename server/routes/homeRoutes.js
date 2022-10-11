const router = require("express").Router();

// Handle GET requests to /api route
router.get("/api", (req, res) => {
  res.json({ message: "the website development of Bernie McKnight" });
});

// All other GET requests not handled before will return our React app
router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = router;
