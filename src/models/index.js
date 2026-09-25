import Company from "./Company.js";
import Offer from "./Offer.js";
import Technology from "./Technology.js";
import OffreTechnologie from "./OffreTechnologie.js";

Company.hasMany(Offer, {
  foreignKey: "company_id",
  as: "offers",
});

Offer.belongsTo(Company, {
  foreignKey: "company_id",
  as: "company",
});

Offer.belongsToMany(Technology, {
  through: OffreTechnologie,
  foreignKey: "offer_id",
  otherKey: "technology_id",
  as: "technologies",
});

Technology.belongsToMany(Offer, {
  through: OffreTechnologie,
  foreignKey: "technology_id",
  otherKey: "offer_id",
  as: "offers",
});

export { Offer, Company, Technology, OffreTechnologie };
