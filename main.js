import data from "./ALL_URLS";


const tableBody = document.getElementById("table-body");
const cards = document.getElementById("cards");

data.forEach((item) => {
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


