export default function handler(req, res) {
  res.status(200).json({
    users: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Jamie" }
    ]
  });
}
