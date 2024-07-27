const sec2 = document.getElementById("section2");
const tb = document.createElement("table");
tb.className = "tb";
sec2.append(tb);
const tr1 = document.createElement("tr");
tb.appendChild(tr1);

const th1 = document.createElement("th");
tr1.appendChild(th1);
th1.textContent = "Name: ";
th1.style.backgroundColor = "brown";
th1.style.color = "white";

const th2 = document.createElement("th");
tr1.appendChild(th2);
th2.textContent = "Job";
th2.style.backgroundColor = "brown";
th2.style.color = "white";

const btn = document.getElementById("submit");
btn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;

  if (name != "" && job != "") {
    const tr1 = document.createElement("tr");
    tb.appendChild(tr1);

    const td1 = document.createElement("td");
    tr1.appendChild(td1);
    td1.textContent = name;
    td1.className = "tds";

    const td2 = document.createElement("td");
    tr1.appendChild(td2);
    td2.textContent = job;
    td2.className = "tds";

    console.log(tb);
    console.log(td2);
  }
});
