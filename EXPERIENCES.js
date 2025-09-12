import experiences from "./EXPERIENCES.js";

const tableBody = document.getElementById("table-body");
const cards = document.getElementById("cards");

experiences.forEach((item) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td><a href="${item.link}" target="_blank">${item.title}</a></td>
        <td>${item.description}</td>
        <td>
          <div class="chips">
            ${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </div>
        </td>
      `;
  tableBody.appendChild(tr);

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>${item.description}</p>
        <div class="chips">
          ${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
        </div>
      `;
  cards.appendChild(card);
});

const experiences = [
  {
    title: "Frontend Developer",
    link: "https://example.com/frontend-role",
    description: "Built responsive UI components and improved performance.",
    tags: ["React", "CSS", "Performance"]
  },
  {
    title: "Backend Engineer",
    link: "https://example.com/backend-role",
    description: "Designed REST APIs and optimized database queries.",
    tags: ["Node.js", "API", "PostgreSQL"]
  },
  {
    title: "Intern - Web Development",
    link: "https://example.com/internship",
    description: "Contributed to internal tools and automation scripts.",
    tags: ["JavaScript", "Automation", "Tooling"]
  }
];

export default experiences;


