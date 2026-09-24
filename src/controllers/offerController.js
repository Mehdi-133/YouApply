import { json } from "body-parser";
import OfferRepo from "../repositories/offerRepository.js";
import CompanyRepo from "../repositories/companyRepository.js";

class OfferController {
  async index(req, res) {
    try {
      const offers = await OfferRepo.findAll();

      console.log(offers.map((offer) => offer.toJSON()));

      res.render("offers/index", {
        offers: offers,
      });
    } catch (error) {
      console.error("error:", error);

      res.status(500).send("Internal server error");
    }
  }

  new(req, res) {
    res.render("offer-form/index", {
      offer: null,
    });
  }

}

export default new OfferController();
