import "dotenv/config";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const companies = [
  ["TechNova", "Digital solutions and web development company."],
  ["CodeLab", "Software development and technology consulting company."],
  ["WebCraft", "Company specialized in modern web applications."],
  ["DataFlow", "Company focused on data and digital solutions."],
  ["NextGen", "Technology company building innovative digital products."],
];

const offers = [
  [
    1,
    "Frontend Developer Intern",
    "stage",
    "Casablanca",
    "Develop and improve responsive web interfaces.",
    "Student with basic knowledge of frontend development.",
    "2026-10-01",
    "6 months",
    "hybride",
    "3000 MAD",
    "jobs@technova.ma",
    "published",
  ],
  [
    1,
    "React Developer",
    "alternance",
    "Casablanca",
    "Build reusable React components and integrate APIs.",
    "Student comfortable with JavaScript and React.",
    "2026-10-15",
    "12 months",
    "hybride",
    "4000 MAD",
    "jobs@technova.ma",
    "published",
  ],
  [
    2,
    "Backend Developer Intern",
    "stage",
    "Rabat",
    "Develop backend services and work with databases.",
    "Student familiar with Node.js and SQL.",
    "2026-11-01",
    "6 months",
    "presentiel",
    "3200 MAD",
    "careers@codelab.ma",
    "published",
  ],
  [
    2,
    "Full Stack Developer",
    "alternance",
    "Rabat",
    "Develop frontend and backend features for web applications.",
    "Student with JavaScript, Node.js and database knowledge.",
    "2026-10-20",
    "12 months",
    "hybride",
    "4200 MAD",
    "careers@codelab.ma",
    "published",
  ],
  [
    3,
    "Web Developer Intern",
    "stage",
    "Marrakech",
    "Create and maintain responsive websites.",
    "Student with HTML, CSS and JavaScript fundamentals.",
    "2026-11-10",
    "4 months",
    "presentiel",
    "2800 MAD",
    "jobs@webcraft.ma",
    "published",
  ],
  [
    3,
    "UI Developer",
    "alternance",
    "Marrakech",
    "Transform interface designs into responsive web pages.",
    "Student interested in frontend development and UI design.",
    "2026-10-10",
    "12 months",
    "hybride",
    "3500 MAD",
    "jobs@webcraft.ma",
    "published",
  ],
  [
    4,
    "Junior Data Developer",
    "stage",
    "Casablanca",
    "Work with application data and SQL databases.",
    "Student with basic SQL and programming knowledge.",
    "2026-11-01",
    "6 months",
    "remote",
    "3500 MAD",
    "careers@dataflow.ma",
    "published",
  ],
  [
    4,
    "Node.js Developer",
    "alternance",
    "Casablanca",
    "Develop server-side features and REST APIs.",
    "Student familiar with JavaScript and Node.js.",
    "2026-10-15",
    "12 months",
    "hybride",
    "4500 MAD",
    "careers@dataflow.ma",
    "published",
  ],
  [
    5,
    "JavaScript Developer Intern",
    "stage",
    "Tangier",
    "Develop interactive features for web applications.",
    "Student with solid JavaScript fundamentals.",
    "2026-11-15",
    "6 months",
    "remote",
    "3000 MAD",
    "jobs@nextgen.ma",
    "published",
  ],
  [
    5,
    "Frontend Developer",
    "alternance",
    "Tangier",
    "Build modern frontend interfaces.",
    "Student familiar with React, HTML and CSS.",
    "2026-10-25",
    "12 months",
    "hybride",
    "4000 MAD",
    "jobs@nextgen.ma",
    "published",
  ],
  [
    1,
    "Web Integration Intern",
    "stage",
    "Casablanca",
    "Integrate responsive pages from UI designs.",
    "Student comfortable with HTML and CSS.",
    "2026-12-01",
    "3 months",
    "presentiel",
    "2500 MAD",
    "jobs@technova.ma",
    "published",
  ],
  [
    2,
    "Junior Node.js Developer",
    "stage",
    "Rabat",
    "Assist in developing APIs and backend functionality.",
    "Student with JavaScript and Node.js fundamentals.",
    "2026-12-01",
    "6 months",
    "hybride",
    "3300 MAD",
    "careers@codelab.ma",
    "published",
  ],
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MySQL",
  "Git",
  "Figma",
];

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

const offer = await getOffers();
const company = await getCompany();
const tech = await getTechs();

// await offersSeed(offers);
// await companiesSeed(companies);
// await technoSeed(technologies);
// console.log("techs seed successfully");

// console.log(company);
// console.log(offer);
console.log(tech);
