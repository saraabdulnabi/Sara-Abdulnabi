const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/items", require("./routes/itemRoutes"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
