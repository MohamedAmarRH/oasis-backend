const pool = require("../config/db");

exports.getAllPlats = async () => {
  const result = await pool.query("SELECT * FROM plats ORDER BY id DESC");
  return result.rows;
};

exports.createPlat = async (nom, prix) => {
  await pool.query(
    "INSERT INTO plats (nom, prix) VALUES ($1, $2)",
    [nom, prix]
  );
};

exports.deletePlat = async (id) => {
  await pool.query("DELETE FROM plats WHERE id = $1", [id]);
};
