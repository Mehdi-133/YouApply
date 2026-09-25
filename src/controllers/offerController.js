import { json } from "body-parser";
import OfferRepo from "../repositories/offerRepository.js";
import CompanyRepo from "../repositories/companyRepository.js";
import TechnologyRepo from "../repositories/technologyRepository.js";

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

  async new(req, res) {
    try {
      const technologies = await TechnologyRepo.findAll();
      res.render("offer-form/index", {
        offer: null,
        technologies,
      });
    } catch (error) {
      console.error(" loading error ", error);
      res.status(500).send(" server error");
    }
  }
}
export default new OfferController();
