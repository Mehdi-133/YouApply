import { json } from "body-parser";
import OfferRepo from "../repositories/offerRepository.js";
import CompanyRepo from "../repositories/companyRepository.js";
import TechnologyRepo from "../repositories/technologyRepository.js";

class OfferController {
  async index(req, res) {
    try {
      const { city, contract, technology, search, sort } = req.query;
      const filters = {
        city,
        contract,
        technology,
        search,
        sort,
      };

      const offers = await OfferRepo.findAll(filters);

      console.log(offers.map((offer) => offer.toJSON()));

      res.render("offers/index", {
        offers: offers,
        currentPage: "offers",
        selectedContract: contract || "all",
      });
    } catch (error) {
      console.error("error:", error);

      res.status(404).render("/errors/404");
    }
  }

  async followed(req, res) {
    try {
      const offers = await OfferRepo.findAll();

      res.render("offers/followed", {
        offers,
        currentPage: "followed-offers",
      });
    } catch (error) {
      console.error("Error loading followed offers:", error);
      return res.status(500).render("errors/500", {
        currentPage: null,
      });
    }
  }

  async show(req, res) {
    try {
      const showDetails = await OfferRepo.findById(req.params.id);
      if (!showDetails) {
        return res.status(404).send("not found");
      }
      res.render("offers/show", {
        showDetails: showDetails,
      });
    } catch (error) {
      console.error("offer details cant open", error);
      res.status(404).render("/errors/404");
    }
  }

  async new(req, res) {
    try {
      const technologies = await TechnologyRepo.findAll();
      res.render("offer-form/index", {
        offer: null,
        technologies,
        currentPage: "create-offer",
      });
    } catch (error) {
      console.error(" loading error ", error);
      res.status(404).render("/errors/404");
    }
  }
}
export default new OfferController();
