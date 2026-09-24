import OfferRepo from "../repositories/offerRepository.js";

class AdminController {
  async index(req, res) {
    try {
      const offers = await OfferRepo.findAll();

      res.render("admin/index", {
        offers,
      });
    } catch (error) {
      console.error("Error loading admin offers:", error);
      res.status(500).send("Internal server error");
    }
  }
}

export default new AdminController();
