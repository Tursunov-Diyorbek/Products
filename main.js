const BookProducts = JSON.parse(localStorage.getItem("Book-Products")) || [];

const saveToLacalStorage = () => {
  localStorage.setItem("Book-Products", JSON.stringify(BookProducts));
};

const row = document.querySelector("#row");
const allbook1 = document.querySelector("#allbook");
const published1 = document.querySelector("#published");
const draft1 = document.querySelector("#draft");
const gorizontal1 = document.querySelector("#gorizontal");
const vertikal1 = document.querySelector("#vertikal");

function allBooks() {
  books.map((item) => {
    row.innerHTML += `
      <div class="col-12 col-lg-6 col-xl-4 mt-4">
      <div class="card h-100">
      <img src="${item.img}" alt="rasm" class="bookImg">
      <div class="p-3 bookTitls">
      <p class="m-0">${item.status}</p>
      <p class="fw-bold m-0">${item.title}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
      <div>
      <p class="m-0">Price</p>
      <span class="fw-bold">$${item.price}</span>
      </div>
      <div>
      <p class="m-0">Sales</p>
      <span class="fw-bold">${item.sales}</span>
      </div>
      <div>
      <p class="m-0">Revenue</p>
      <span class="fw-bold">$${item.price * item.sales}</span>
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

  allBooks();
};

const published = () => {
  row.innerHTML = "";

  published1.classList.add("active");
  allbook1.classList.remove("active");
  draft1.classList.remove("active");

  books.map((item) => {
    if (item.status === "Published") {
      row.innerHTML += `
      <div class="col-12 col-lg-6 col-xl-4 mt-4">
      <div class="card h-100">
      <img src="${item.img}" alt="rasm" class="bookImg">
      <div class="p-3 bookTitls">
      <p class="m-0">${item.status}</p>
      <p class="fw-bold m-0">${item.title}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
      <div>
      <p class="m-0">Price</p>
      <span class="fw-bold">$${item.price}</span>
      </div>
      <div>
      <p class="m-0">Sales</p>
      <span class="fw-bold">${item.sales}</span>
      </div>
      <div>
      <p class="m-0">Revenue</p>
      <span class="fw-bold">$${item.price * item.sales}</span>
      </div>
      </div>
      </div>
      </div>
      `;
    }
  });
};

const draft = () => {
  row.innerHTML = "";

  draft1.classList.add("active");
  published1.classList.remove("active");
  allbook1.classList.remove("active");

  books.map((item) => {
    if (item.status === "Draft") {
      row.innerHTML += `
      <div class="col-12 col-lg-6 col-xl-4 mt-4">
      <div class="card h-100">
      <img src="${item.img}" alt="rasm" class="bookImg">
      <div class="p-3 bookTitls">
      <p class="m-0">${item.status}</p>
      <p class="fw-bold m-0">${item.title}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
      <div>
      <p class="m-0">Price</p>
      <span class="fw-bold">$${item.price}</span>
      </div>
      <div>
      <p class="m-0">Sales</p>
      <span class="fw-bold">${item.sales}</span>
      </div>
      <div>
      <p class="m-0">Revenue</p>
      <span class="fw-bold">$${item.price * item.sales}</span>
      </div>
      </div>
      </div>
      </div>
      `;
    }
  });
};

const gorizontal = () => {
  row.innerHTML = "";

  gorizontal1.classList.add("active");
  vertikal1.classList.remove("active");

  row.innerHTML += `
    <table>
        <thead class="table-head">
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
                if (item.status === "Published") {
                  var s = "Draft";
                } else {
                  var s = "Published";
                }
                return `
              <tr>
                <td><input type="checkbox"></td>
                <td><img src="${
                  item.img
                }" alt="photo" class="gorizontalImg"></td>
                <td>${`<select class="form-select w-50" aria-label="Default select example">
                <option value="1">${item.status}</option>
                <option value="2">${s}</option>
              </select>`}</td>
                <td>${item.price}</td>
                <td>${item.sales}</td>
                <td>${item.sales * item.price}</td>
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
            <td class="fw-bold">Total: $</td>
            </tr>
        </tbody>
    </table>
    `;
  console.log(sum);
};

const vertikal = () => {
  row.innerHTML = "";

  vertikal1.classList.add("active");
  gorizontal1.classList.remove("active");
  allBooks();
};

const save = () => {
  row.innerHTML = "";
  const saveImg = document.querySelector("#saveImg");
  const saveName = document.querySelector("#saveName");
  const savePrice = document.querySelector("#savePrice");
  const saveSales = document.querySelector("#saveSales");
  const pubDraf = document.querySelector("#pubDraf");

  BookProducts.push({
    saveImg: saveImg.value,
    saveName: saveName.value,
    saveSales: saveSales.value,
    savePrice: savePrice.value,
    pubDraf: pubDraf.value,
  });

  BookProducts.map((item) => {
    row.innerHTML += `
    <div class="col-12 col-lg-6 col-xl-4 mt-4">
    <div class="card h-100">
    <img src="${item.saveImg}" alt="rasm" class="bookImg">
    <div class="p-3 bookTitls">
    <p class="m-0">${item.pubDraf}</p>
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
    <span class="fw-bold">$${item.price * item.saveSales}</span>
    </div>
    </div>
    </div>
    </div>
    `;
  });

  saveToLacalStorage();
  saveImg.value = "";
  saveName.value = "";
  savePrice.value = "";
};

const init = () => {
  allBooks();
};
