exports.handleImage = (req, res, db) => {
  const { id } = req.body;
  //   console.log(req.body, "this is req.body");
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      res.json(entries[0].entries);
    })
    .catch((err) => res.status(400).json("unable to get entries"));
};
