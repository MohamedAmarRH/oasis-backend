const express = require("express");
const router = express.Router();
const platController = require("../controllers/platController");

router.get("/", platController.getPlats);
router.post("/", platController.addPlat);
router.delete("/:id", platController.removePlat);

module.exports = router;
