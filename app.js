fetch("https://drugsapi.onrender.com/drugsapi")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((drug) => {
      let table = document.getElementById("table");
      let tr = document.createElement("tr");

      Object.values(drug).forEach((value) => {
        let td = document.createElement("td");
        td.textContent = value === null ? "N/A" : value;
        tr.appendChild(td);
      });

      table.appendChild(tr);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
