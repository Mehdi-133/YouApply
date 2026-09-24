import Company from "./Company.js";
import Offer  from "./Offer.js";

Company.hasMany(Offer , {
    foreignKey: "company_id",
    as: "offers",
})

Offer.belongsTo(Company, {
    foreignKey: "company_id",
    as: "company"
})

export  {Offer , Company}