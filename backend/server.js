const express = require("express");
const admin = require("./firebaseAdmin");
const { getAuth } = require("firebase/auth");

const app = express();
app.use(express.json());

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Check if the user exists
    const userRecord = await admin.auth().getUserByEmail(email);

    // If user exists, send password reset email
    const auth = getAuth();
    await auth.sendPasswordResetEmail(email);

    res.status(200).json({ message: "Password reset email sent!" });
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      res.status(404).json({ error: "Email not registered" });
    } else {
      res.status(500).json({ error: "An error occurred, please try again later" });
    }
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
