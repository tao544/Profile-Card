# 🌟 HNG Frontend Challenge — Stage 1: Multi-Page Profile App

This project is an upgrade of my **Stage 0 Profile Card**, now extended into a **multi-page application** with added **About Me** and **Contact Us** pages.  
Built using **semantic HTML**, **accessible form elements**, **responsive CSS**, and **modular JavaScript**, this project follows the requirements of the **HNG Frontend Stage 1 Task**.

---

## 🚀 Features Overview

### 🏠 Home Page (from Stage 0)
- Clean, semantic, and accessible **Profile Card**
- Displays **current time** using `Date.now()`
- Organized structure with headings, lists, and alt text
- Contains **navigable social links** and **keyboard accessibility**
- Fully responsive across screen sizes

### 🧍‍♂️ About Me Page
- Reflective page sharing personal insights and progress  
- Structured with proper `<main>` and `<section>` tags  
- Includes the following data-testid sections:
  | Section | Test ID |
  |----------|----------|
  | Bio | `test-about-bio` |
  | Goals | `test-about-goals` |
  | Areas of Low Confidence | `test-about-confidence` |
  | Note to Future Self | `test-about-future-note` |
  | Extra Thoughts | `test-about-extra` |

- Accessible headings (`<h2>`, `<h3>`) and semantic layout  
- Consistent navbar across all pages  

### 💬 Contact Us Page
A fully functional contact form with validation.

#### Fields (with data-testid attributes)
| Field | Test ID |
|--------|----------|
| Full Name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |
| Error Messages | `test-contact-error-<field>` |
| Success Message | `test-contact-success` |

#### Validation Rules
- All fields are required  
- Valid email format (e.g. `name@example.com`)  
- Message must contain **at least 10 characters**  
- Success message appears only on valid submission  

#### Accessibility
- Each input is associated with a `<label for="">`  
- Error messages linked using `aria-describedby`  
- Fully keyboard navigable and screen-reader friendly  

---

## ♿ Accessibility & Responsiveness
- Semantic tags: `<header>`, `<main>`, `<section>`, `<form>`, `<footer>`
- Logical heading structure for screen readers  
- Descriptive alt text and labels  
- Mobile-first responsive layout with media queries  
- Flexbox and Grid for adaptive design  

---

## 🛠 Tools & Technologies
- **HTML5** — for semantic structure  
- **CSS3** — for layout and responsiveness  
- **JavaScript (ES6)** — for form validation  
- **Git & GitHub** — for version control  
- **Netlify / GitHub Pages** — for deployment  

---
## 🌐 Live Preview
🔗 **[View Live Site on Netlify](https://taoheeda-profile-card.netlify.app/)**  

## 🔗 Repository
📂 **[GitHub Source Code](https://github.com/tao544/Profile-Card)**

## 👤 Author
**Adepoju Taoheed**  
Frontend Developer | HNG Internship Participant  


