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
        currentPage: "offers",
      });
    } catch (error) {
      console.error("error:", error);

      res.status(500).send("Internal server error");
    }
  }

  async show(req , res ){
    try{

      const showDetails = await OfferRepo.findById(req.params.id);
      if (!showDetails) {
        return res.status(404).send("not found")
      }
      res.render("offers/show" , {
        showDetails: showDetails,
      }) 

    }catch(error){
      console.error("offer details cant open" , error);
      res.status(500).send("server error ")
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
      res.status(500).send(" server error");
    }
  }


}
export default new OfferController();
