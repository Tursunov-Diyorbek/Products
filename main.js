const books = JSON.parse(localStorage.getItem("Books")) || [];

const saveToLacalStorage = () => {
  localStorage.setItem("Books", JSON.stringify(books));
};

const row = document.querySelector("#row");
const allbook1 = document.querySelector("#allbook");
const published1 = document.querySelector("#published");
const draft1 = document.querySelector("#draft");
const gorizontal1 = document.querySelector("#gorizontal");
const vertikal1 = document.querySelector("#vertikal");
const search = document.getElementById("search");

function allBooks() {
  row.innerHTML = "";

  books.map((item) => {
    row.innerHTML += `
      <div class="col-12 col-lg-6 col-xl-4 mt-4">
      <div class="card h-100">
      <img src="${item.saveImg}" alt="rasm" class="bookImg">
      <div class="p-3 bookTitls">
      ${
        item.pubDraf === "Published"
          ? `
      <p class="m-0 bg-success p-1 d-inline-block rounded-2">${item.pubDraf}</p>
      `
          : `
      <p class="m-0 bg-warning p-1 d-inline-block rounded-2">${item.pubDraf}</p>
      `
      }
      <p class="fw-bold m-0">${item.saveName}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
      <div>
      <p class="m-0">Price</p>
      <span class="fw-bold">$${item.savePrice}</span>
      </div>
      <div class="text-center">
      <p class="m-0">Sales</p>
      <span class="fw-bold">${item.saveSales}</span>
      </div>
      <div>
      <p class="m-0">Revenue</p>
      <span class="fw-bold">$${item.savePrice * item.saveSales}</span>
      </div>
      </div>
      </div>
      </div>
      `;
  });
}

const allBook = () => {
  row.innerHTML = "";

  allbook1.classList.add("active");
  published1.classList.remove("active");
  draft1.classList.remove("active");

  if (gorizontal1.className.includes("active")) {
    gorizontal();
  } else {
    allBooks();
  }
};

const published = () => {
  row.innerHTML = "";

  published1.classList.add("active");
  allbook1.classList.remove("active");
  draft1.classList.remove("active");

  let sum1 = 0;

  if (gorizontal1.className.includes("active")) {
    row.innerHTML += `
        <table>
        <thead class="table-head">
            <tr>
                <th class="p-2">
                <input type="checkbox">
                </th>
                <th>Product</th>
                <th>Status</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Revenue</th>
            </tr>
        </thead>
        <tbody>
         ${books
           .map((item2) => {
             if (item2.pubDraf === "Published") {
               sum1 += item2.saveSales * item2.savePrice;
               return `<tr>
               <td><input type="checkbox"></td>
                <td><img src="${
                  item2.saveImg
                }" alt="photo" class="gorizontalImg">
                ${item2.saveName}
                </td>
                <td><p class="m-0 bg-success p-1 d-inline-block rounded-2">${
                  item2.pubDraf
                }</p></td>
                <td>$${item2.savePrice}</td>
                <td>${item2.saveSales}</td>
                <td>$${item2.saveSales * item2.savePrice}</td>
                </tr>`;
             }
           })
           .join(" ")}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="fw-bold">Total: $${sum1}</td>
        </tr>
        </tbody>
    </table>
        `;
  } else {
    books.map((item) => {
      if (item.pubDraf === "Published") {
        row.innerHTML += `
        <div class="col-12 col-lg-6 col-xl-4 mt-4">
        <div class="card h-100">
        <img src="${item.saveImg}" alt="rasm" class="bookImg">
        <div class="p-3 bookTitls">
        ${
          item.pubDraf === "Published"
            ? `
        <p class="m-0 bg-success p-1 d-inline-block rounded-2">${item.pubDraf}</p>
        `
            : `
        <p class="m-0 bg-warning p-1 d-inline-block rounded-2">${item.pubDraf}</p>
        `
        }
        <p class="fw-bold m-0">${item.saveName}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
        <div>
        <p class="m-0">Price</p>
        <span class="fw-bold">$${item.savePrice}</span>
        </div>
        <div>
        <p class="m-0">Sales</p>
        <span class="fw-bold">${item.saveSales}</span>
        </div>
        <div>
        <p class="m-0">Revenue</p>
        <span class="fw-bold">$${item.savePrice * item.saveSales}</span>
        </div>
        </div>
        </div>
        </div>
        `;
      }
    });
  }
};

const draft = () => {
  row.innerHTML = "";

  draft1.classList.add("active");
  published1.classList.remove("active");
  allbook1.classList.remove("active");

  let sum2 = 0;

  if (gorizontal1.className.includes("active")) {
    row.innerHTML += `
    <table>
    <thead class="table-head">
        <tr>
            <th class="p-2">
            <input type="checkbox">
            </th>
            <th>Product</th>
            <th>Status</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Revenue</th>
        </tr>
    </thead>
    <tbody>
     ${books
       .map((item2) => {
         if (item2.pubDraf === "Draft") {
           sum2 += item2.saveSales * item2.savePrice;
           return ` <tr>
           <td><input type="checkbox"></td>
            <td><img src="${item2.saveImg}" alt="photo" class="gorizontalImg">
            ${item2.saveName}
            </td>
            <td><p class="m-0 bg-warning p-1 d-inline-block rounded-2">${
              item2.pubDraf
            }</p></td>
            <td>$${item2.savePrice}</td>
            <td>${item2.saveSales}</td>
            <td>$${item2.saveSales * item2.savePrice}</td>
            </tr>`;
         }
       })
       .join(" ")}
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td class="fw-bold">Total: $${sum2}</td>
    </tr>
    </tbody>
</table>
    `;
  } else {
    books.map((item) => {
      if (item.pubDraf === "Draft") {
        row.innerHTML += `
        <div class="col-12 col-lg-6 col-xl-4 mt-4">
        <div class="card h-100">
        <img src="${item.saveImg}" alt="rasm" class="bookImg">
        <div class="p-3 bookTitls">
        ${
          item.pubDraf === "Published"
            ? `
        <p class="m-0 bg-success p-1 d-inline-block rounded-2">${item.pubDraf}</p>
        `
            : `
        <p class="m-0 bg-warning p-1 d-inline-block rounded-2">${item.pubDraf}</p>
        `
        }
        <p class="fw-bold m-0">${item.saveName}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
        <div>
        <p class="m-0">Price</p>
        <span class="fw-bold">$${item.savePrice}</span>
        </div>
        <div>
        <p class="m-0">Sales</p>
        <span class="fw-bold">${item.saveSales}</span>
        </div>
        <div>
        <p class="m-0">Revenue</p>
        <span class="fw-bold">$${item.savePrice * item.saveSales}</span>
        </div>
        </div>
        </div>
        </div>
        `;
      }
    });
  }
};

const gorizontal = () => {
  row.innerHTML = "";

  gorizontal1.classList.add("active");
  vertikal1.classList.remove("active");

  allbook1.classList.add("active");
  published1.classList.remove("active");
  draft1.classList.remove("active");

  let sum = 0;

  row.innerHTML += `
    <table>
        <thead class="table-head">
            <tr>
                <th class="p-2">
                <input type="checkbox">
                </th>
                <th>Product</th>
                <th>Status</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Revenue</th>
            </tr>
        </thead>
        <tbody>
            ${books
              .map((item) => {
                sum += item.saveSales * item.savePrice;
                return `
              <tr>
                <td><input type="checkbox"></td>
                <td><img src="${
                  item.saveImg
                }" alt="photo" class="gorizontalImg">
                ${item.saveName}
                </td>
                <td>${
                  item.pubDraf === "Published"
                    ? `
                <p class="m-0 bg-success p-1 d-inline-block rounded-2">${item.pubDraf}</p>
                `
                    : `
                <p class="m-0 bg-warning p-1 d-inline-block rounded-2">${item.pubDraf}</p>
                `
                }</td>
                <td>$${item.savePrice}</td>
                <td>${item.saveSales}</td>
                <td>$${item.saveSales * item.savePrice}</td>
              </tr>
              `;
              })
              .join(" ")}
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="fw-bold">Total: $${sum}</td>
            </tr>
        </tbody>
    </table>
  `;
};

const vertikal = () => {
  row.innerHTML = "";

  vertikal1.classList.add("active");
  gorizontal1.classList.remove("active");

  allbook1.classList.add("active");
  published1.classList.remove("active");
  draft1.classList.remove("active");

  allBooks();
};

const save = () => {
  const saveImg = document.querySelector("#saveImg");
  const saveName = document.querySelector("#saveName");
  const savePrice = document.querySelector("#savePrice");
  const saveSales = document.querySelector("#saveSales");
  const pubDraf = document.querySelector("#pubDraf");

  books.push({
    saveImg: saveImg.value,
    saveName: saveName.value,
    savePrice: savePrice.value,
    saveSales: saveSales.value,
    pubDraf: pubDraf.value,
  });

  saveToLacalStorage();
  allBooks();
  saveImg.value = "";
  saveName.value = "";
  savePrice.value = "";
  saveSales.value = "";
};

search.addEventListener("input", function () {
  let b = search.value.toLowerCase();
  row.innerHTML = "";
  books.forEach((item) => {
    let s = item.saveName.toLowerCase();
    if (s.includes(b)) {
      row.innerHTML += `
      <div class="col-12 col-lg-6 col-xl-4 mt-4">
      <div class="card h-100">
      <img src="${item.saveImg}" alt="rasm" class="bookImg">
      <div class="p-3 bookTitls">
      ${
        item.pubDraf === "Published"
          ? `
      <p class="m-0 bg-success p-1 d-inline-block rounded-2">${item.pubDraf}</p>
      `
          : `
      <p class="m-0 bg-warning p-1 d-inline-block rounded-2">${item.pubDraf}</p>
      `
      }
      <p class="fw-bold m-0">${item.saveName}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
      <div>
      <p class="m-0">Price</p>
      <span class="fw-bold">$${item.savePrice}</span>
      </div>
      <div class="text-center">
      <p class="m-0">Sales</p>
      <span class="fw-bold">${item.saveSales}</span>
      </div>
      <div>
      <p class="m-0">Revenue</p>
      <span class="fw-bold">$${item.savePrice * item.saveSales}</span>
      </div>
      </div>
      </div>
      </div>
      `;
    }
  });
  if (b === "") {
    allBooks();
  }
});

const init = () => {
  allBooks();
};
