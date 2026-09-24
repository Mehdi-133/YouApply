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
    res.render("offer-form/index");
  }

  async create(req, res) {
    try {
      let company = await CompanyRepo.findByName(req.body.company);

      if (!company) {
        company = await CompanyRepo.create({
          name: req.body.company,
          description: req.body.description,
        });
      }

      const offerData = {
        company_id: company.id,
        job_title: req.body.job_title,
        opp_type: req.body.opp_type,
        location: req.body.location,
        missions: req.body.missions,
        profile: req.body.profile,
        start_date: req.body.start_date,
        duration: req.body.duration,
        work_mode: req.body.work_mode,
        salary: req.body.salary || null,
        email: req.body.email,

        published_at: new Date(),
        status: "published",
      };

      const offer = await OfferRepo.create(offerData);

      console.log("Offer created:", offer.id);

      res.redirect("/offers");
    } catch (error) {
      console.error("Error creating offer:", error);
      res.status(500).send("Internal server error");
    }
  }
}

export default new OfferController();
