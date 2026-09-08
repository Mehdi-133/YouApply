# Requirements Analysis — YouApply

## 1. Project Context
The 2026/2027 MERN cohort needs a dedicated internal web portal. The purpose of this portal is to gather and display relevant internship and work-study offers for web development students.

## 2. Problem Statement
Currently, internship and work-study offers are scattered across multiple channels (messages, shared documents, various links). This dispersion makes searching inefficient: it is difficult to quickly find a matching offer and complicated to keep track of interesting opportunities.

## 3. Product Need
* **For whom?** Primarily for Merners looking for an internship or work-study program.
* **What is the need?** To have a single space to browse, sort, and save professional announcements.
* **Why?** To save time, facilitate the search using filters, and ensure no relevant offer is lost.

## 4. Objectives
* Centralize all internship and work-study offers in a single space.
* Facilitate quick searching of announcements through combinable filters.
* Allow users to keep track of offers that interest them (saved offers).
* Provide a simple interface to add and manage these announcements.

## 5. Users and Needs

| User | Core Need |
| :--- | :--- |
| **Merners** | Browse offers, filter results according to their skills/needs, and save offers to track them later. |
| **Visitor** | Browse the public list to see the types of opportunities available (read-only). |
| **Administrator** | Manage the portal's content: add, edit, delete offers, and associate technologies with the announcements. |

## 6. Core Features
* Display of a global list of offers, sorted by date (newest first).
* Display of a detailed page for each offer (mission description, required profile, contact).
* Keyword search engine (title, company, description).
* Combinable filters (by city, technology, contract type).
* Browser-based bookmarking system ("Saved offers") allowing users to find their offers without an account.
* Administration interface for managing announcements (submission, modification, deletion).

## 7. Scope

**Included**
* Public browsing of offers and their details.
* Multi-criteria search and filtering.
* "Saved offers" feature (functioning without requiring authentication).
* Basic management interface to create, edit, or delete offers.

<!-- **Excluded**
* User account creation and login (authentication).
* Advanced role or permission management.
* The ability to apply directly online or upload a resume.
* Built-in messaging between candidates and companies.
* Automated email sending.
* Dedicated management spaces for companies. -->

## 8. Questions / Points to Clarify
* **Administrator access:** The specifications state there is no authentication, including for administration. How will we secure access to the offer submission and deletion page to prevent any visitor from modifying the list?
* **Technology categorization:** It is mentioned that a technology can have an "optional category." What are these categories (e.g., Front-end, Back-end, Database)? Should we provide a fixed list, or can the administrator create new ones?
* **Lifespan of saved offers:** Since tracking relies on the browser (without an account), what happens if the administrator deletes the offer in the meantime? Should the saved offer disappear, or display a message indicating it is no longer available?

## Conclusion
The YouApply project addresses the need to centralize and organize the search for internships and work-study programs for MERN learners. The goal is to deliver a simple, smooth, and fast public portal that allows users to filter announcements and save them without creating an account. The scope focuses strictly on distributing and consulting information, intentionally excluding complex processes like online applications or messaging.
