const express = require("express");
const router = express.Router();
const Item = require("../models/Item");


// CREATE
router.post("/", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});

module.exports = router;
