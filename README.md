# YouApply

YouApply is a responsive web application for discovering, following, creating, and managing internship and work-study offers. The current version uses Express and EJS for server-rendered pages, Sequelize for data access, and MySQL for persistent offer data.

## Current Features

- Display offers dynamically from MySQL.
- Display company and technology information through Sequelize associations.
- Search offers by keyword and city.
- Filter offers by contract type, with server-side support for technology filtering.
- Open a complete server-rendered offer details page.
- Follow and unfollow offers using browser `localStorage`.
- View followed offers and filter them by contract type.
- Create offers and assign technologies through a shared form.
- Edit offer, company, and technology information.
- Delete offers from the administration page.
- Display custom `404` and `500` error pages.
- Use responsive layouts and mobile navigation.

## Tech Stack

- Node.js 18 or newer
- Express 5
- EJS
- Sequelize
- MySQL and `mysql2`
- Vanilla JavaScript with ES modules
- Tailwind CSS through the CDN
- Browser `localStorage`
- Nodemon for local development

## How the Application Works

```text
Browser request
    -> Express route
    -> Controller
    -> Repository
    -> Sequelize model
    -> MySQL database
    -> EJS view rendered as HTML
```

Offer, company, and technology data is stored in MySQL. Followed offer IDs are stored separately in the visitor's browser under the `followedOffers` localStorage key.

## Run the Project Locally

### Prerequisites

- Git
- Node.js 18+
- npm
- MySQL Server
- MySQL Workbench, SQLTools, or another MySQL client

### 1. Clone and install

```bash
git clone https://github.com/Mehdi-133/YouApply.git
cd YouApply
npm install
```

### 2. Create the database

Open [`database/schema.sql`](database/schema.sql) in your MySQL client and run the database and table creation blocks at the top of the file:

- `company`
- `offer`
- `technology`
- `offre_technologie`

The remaining blocks in `schema.sql` are development queries and should be executed individually only when needed.

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=youapply
```

Do not commit your real `.env` file or database password.

### 4. Add demonstration data

Run this command once on empty tables:

```bash
npm run db:seed
```

To clear and reseed the existing data:

```bash
npm run db:reset
npm run db:seed
```

> `db:reset` deletes all rows from the four application tables.

### 5. Start the application

```bash
npm run dev
```

Open:

```text
http://localhost:3000/offers
```

## Application Routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/offers` | List and search offers. |
| `GET` | `/offers/:id/show` | Display one offer. |
| `GET` | `/followed-offers` | Display offers saved in this browser. |
| `GET` | `/offers/new` | Display the offer creation form. |
| `POST` | `/offers` | Create an offer. |
| `GET` | `/admin` | Display the offer administration page. |
| `GET` | `/offers/:id/edit` | Display the offer editing form. |
| `POST` | `/offers/:id/edit` | Update an offer. |
| `DELETE` | `/offers/:id` | Delete an offer. |

The offer list accepts query parameters such as:

```text
/offers?search=developer&city=Casablanca&contract=stage&technology=JavaScript
```

## npm Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Express with Nodemon. |
| `npm run db:seed` | Insert demonstration companies, offers, technologies, and relationships. |
| `npm run db:reset` | Remove all application data and reset table IDs. |

## Project Structure

```text
YouApply/
|-- database/              # MySQL schema, seed data, and reset scripts
|-- docs/                  # Requirements, diagrams, Jira, and data documentation
|-- js/                    # Shared browser modules and localStorage helpers
|-- public/
|   |-- css/               # Application styles
|   `-- js/                # Browser interactions for EJS pages
|-- src/
|   |-- config/            # MySQL and Sequelize configuration
|   |-- controllers/       # Request handling and view rendering
|   |-- models/            # Sequelize models and associations
|   |-- repositories/      # Database queries
|   |-- routes/            # Express routes
|   `-- app.js             # Application entry point
|-- views/
|   |-- admin/             # Administration view
|   |-- errors/            # 404 and 500 pages
|   |-- offer-form/        # Shared create and edit form
|   |-- offers/            # Offer list, details, and followed offers
|   `-- partial/           # Shared head, header, and footer
|-- data/ and pages/       # Original static frontend prototype
|-- package.json
`-- README.md
```

## Database Model

The application uses four tables:

- `company`: stores company information.
- `offer`: stores offers and references a company.
- `technology`: stores unique technology names.
- `offre_technologie`: links offers and technologies through a many-to-many relationship.

See the [data dictionary](docs/data-dictionary.md) for field-level documentation.

## Testing

There is no automated test suite yet. Use these syntax checks after changing server code:

```bash
node --check src/app.js
node --check src/controllers/offerController.js
node --check src/controllers/adminController.js
```

Recommended manual smoke test:

1. Open `/offers` and confirm that database offers appear.
2. Test keyword, city, and contract searches.
3. Open an offer details page.
4. Follow an offer, refresh the page, and check `/followed-offers`.
5. Create an offer from `/offers/new`.
6. Edit and delete an offer from `/admin`.
7. Open an unknown route and confirm that the custom 404 page appears.

## Current Limitations

- There is no authentication or role-based access control; admin routes are currently public.
- Followed offers are stored only in the current browser and are not synchronized between devices.
- Some presentation controls, including duration filtering, sorting, and pagination, are not fully connected to the server yet.
- There is no automated test suite.
- The files in `pages/` and `data/offers.json` belong to the original static prototype; the active application starts from `src/app.js` and renders files from `views/`.

## Project Documentation

- [Requirements analysis](docs/analyse-cahier-des-charges.md)
- [Data dictionary](docs/data-dictionary.md)
- [Figma reference](docs/figma-link.md)
- [Jira export](docs/jira-export.md)
- [Relational model](docs/relational-model.drawio)
- [Use-case diagram](docs/uml/useCase-diagram.drawio)
- [Class diagram](docs/uml/class-diagram.drawio)
- [Sequence diagram](docs/uml/sequence-diagram.png)
