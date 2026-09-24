import { Company, Offer } from "../models/index.js";

class OfferRepo {
   async findAll() {
    return  await  Offer.findAll({
      include: {
        model: Company,
        as: "company",
      },

      order: [["published_at" , "DESC"]]
    });
  }
}


export default new OfferRepo()