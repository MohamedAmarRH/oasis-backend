const platModel = require("../models/platModel");

exports.getPlats = async (req, res) => {
  try {
    const plats = await platModel.getAllPlats();
    res.json(plats);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.addPlat = async (req, res) => {
  try {
    const { nom, prix } = req.body;
    await platModel.createPlat(nom, prix);
    res.json({ message: "Plat ajouté" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.removePlat = async (req, res) => {
  try {
    await platModel.deletePlat(req.params.id);
    res.json({ message: "Plat supprimé" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
