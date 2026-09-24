import { Company, Offer } from "../models/index.js";

class OfferRepo {
  async findAll() {
    return await Offer.findAll({
      include: {
        model: Company,
        as: "company",
      },

      order: [["published_at", "DESC"]],
    });
  }

  async create(offerData) {
    return await Offer.create(offerData);
  }

  async findById(id) {
    return await Offer.findByPk(id, {
      include: {
        model: Company,
        as: "company",
      },
    });
  }

  async update(id, offerData) {
    const offer = await this.findById(id);

    if (!offer) {
      return null;
    }

    await offer.update(offerData);

    return offer;
  }

  async delete(id) {
    const offer = await this.findById(id);

    if (!offer) {
      return null;
    }

    await offer.destroy();

    return offer;
  }
}

export default new OfferRepo();
