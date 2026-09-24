import OfferRepo from "../repositories/offerRepository.js";

class OfferController {
  async index(req, res) {
    try {
      const offers = await OfferRepo.findAll();

      console.log(offers.map((offer) => offer.toJSON()));

      res.render("offers/index" ,  {
        offers : offers
      });

      
    } catch (error) {
      console.error("error:", error);

      res.status(500).send("Internal server error");
    }
  }
}

export default new OfferController();
