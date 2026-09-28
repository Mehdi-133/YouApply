import { Op } from "sequelize";
import { Company, Offer, Technology } from "../models/index.js";

class OfferRepo {
  async findAll(filters = {}) {
    const where = {};
    if (filters.city) {
      where.location = filters.city;
    }
    if (filters.contract) {
      where.opp_type = filters.contract;
    }
    if (filters.search) {
      where[Op.or] = [
        {
          job_title: {
            [Op.like]: `%${filters.search}%`,
          },
        },
        {
          location: {
            [Op.like]: `%${filters.search}%`,
          },
        },
      ];
    }
    return await Offer.findAll({
      where,
      include: [
        {
          model: Company,
          as: "company",
        },
        {
          model: Technology,
          as: "technologies",
          where: filters.technology ? { name: filters.technology } : undefined,
          required: Boolean(filters.technology),
          through: {
            attributes: [],
          },
        },
      ],

      order: [["published_at", "DESC"]],
    });
  }

  async create(offerData) {
    return await Offer.create(offerData);
  }

  async findById(id) {
    return await Offer.findByPk(id, {
      include: [
        {
          model: Company,
          as: "company",
        },
        {
          model: Technology,
          as: "technologies",
        },
      ],
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
