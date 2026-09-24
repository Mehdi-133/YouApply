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

  async update(id, companyData) {
    const company = await Company.findByPk(id);

    if (!company) {
      return null;
    }

    await company.update(companyData);

    return company;
  }
}

export default new CompanyRepository();
