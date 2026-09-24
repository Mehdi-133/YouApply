import OfferRepo from "../repositories/offerRepository.js";
import CompanyRepo from "../repositories/companyRepository.js";
import { log } from "node:console";

class AdminController {
  async index(req, res) {
    try {
      const offers = await OfferRepo.findAll();

      res.render("admin/index", {
        offers,
      });
    } catch (error) {
      console.error("Error loading admin offers:", error);
      res.status(500).send("server error");
    }
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
      res.status(500).send("server error");
    }
  }

  async edit(req, res) {

    // console.log(req.params.id);

    try {
      const offer = await OfferRepo.findById(req.params.id);
      console.log(offer);


      if (!offer) {
        return res.status(404).send("Offer not found");
      }
      res.render("offer-form/index", {
        offer,
      });
    } catch (error) {
      console.error("cant edit this offer", error);
      res.status(500).send("server error");
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const offerData = {
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
      };

      const companyData = {
        name: req.body.company,
        description: req.body.description,
      };

      const offer = await OfferRepo.update(id, offerData);

      console.log(offerData);

      if (!offer) {
        return res.status(404).send("Offer not found");
      }

      const company = await CompanyRepo.update(offer.company_id, companyData);

      if (!company) {
        return res.status(404).send("Company not found");
      }

      res.redirect("/admin");
    } catch (error) {
      console.error("error updating offer:", error);
      res.status(500).send("Server error");
    }
  }
}

export default new AdminController();
