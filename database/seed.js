import "dotenv/config";
import mysql from "mysql2/promise";
import pool from "../src/config/connection.js";
import {
  companies,
  technologies,
  offers,
  offerTechnologies,
} from "./seed-data.js";

async function getCompany() {
  const results = await pool.query("select * from company");
  const fisrtRow = results[0];
  return fisrtRow;
}

async function getOffers() {
  const results = await pool.query("select * from offer");
  const firstRow = results[0];
  return firstRow;
}

async function getTechs() {
  const results = await pool.query("select * from technology");
  const firstRow = results[0];
  return firstRow;
}

async function companiesSeed(companies) {
  for (const [name, description] of companies) {
    await pool.execute(
      "INSERT INTO company (name, description) VALUES (?, ?)",
      [name, description],
    );
  }
}

async function technoSeed(technologies) {
  for (const technology of technologies)
    await pool.execute("INSERT INTO technology (name) VALUES (?)", [
      technology,
    ]);
}

async function offersSeed(offers) {
  for (const [
    companyId,
    jobTitle,
    oppType,
    location,
    missions,
    profile,
    startDate,
    duration,
    workMode,
    salary,
    email,
    status,
  ] of offers) {
    await pool.execute(
      `INSERT INTO offer (
        company_id,
        job_title,
        opp_type,
        location,
        missions,
        profile,
        start_date,
        duration,
        work_mode,
        salary,
        email,
        status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        companyId,
        jobTitle,
        oppType,
        location,
        missions,
        profile,
        startDate,
        duration,
        workMode,
        salary,
        email,
        status,
      ],
    );
  }
}

async function offerTechnologiesSeed(offerTechnologies) {
  for (const [offerId, technologyId] of offerTechnologies) {
    await pool.execute(
      `INSERT INTO offre_technologie (offer_id, technology_id)
       VALUES (?, ?)`,
      [offerId, technologyId],
    );
  }
}

const offer = await getOffers();
const company = await getCompany();
const tech = await getTechs();

await companiesSeed(companies);
await offersSeed(offers);
await technoSeed(technologies);
await offerTechnologiesSeed(offerTechnologies);

console.log("data seed successfully");
await pool.end();

// console.log(company);
// console.log(offer);
// console.log(tech);
