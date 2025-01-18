const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(), // Use service account for production
});

module.exports = admin;
