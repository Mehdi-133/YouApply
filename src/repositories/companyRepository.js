import { Company, Offer } from "../models/index.js";

class CompanyRepository {
  async findByName(name) {
    return await Company.findOne({
      where: { name : name },
    });
  }

  async create(companyData) {
    return await Company.create(companyData);
  }
}

export default new CompanyRepository();
