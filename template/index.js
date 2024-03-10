async function get_all_book() {
  try {
      const response = await axios.get('http://127.0.0.1:8000/get_all_book');
      console.log(response.data);
      const book_list = response.data.book_list;
      console.log(book_list);
      displayBookList(book_list);
  } catch (error) {
      console.error("Error fetching books:", error);
  }
}

function page_search_by_name() {
  const input = document.getElementById("search_by_name").value;
  window.location.href = `index.html?search=${input}`;
}

async function search_by_name(event) {
  console.log("in search")
  event.preventDefault();

  const input = document.getElementById("search_by_name").value;
  const content = document.getElementById("content");

  const response = await axios.get(
    `http://127.0.0.1:8000/search_book_by_name?name=${input}`
  );

  console.log(response.data);

  const book_list = response.data.book_list;
  console.log(book_list);
  displayBookList(book_list);
}

async function search_by_name_2(input) {
  const content = document.getElementById("content");
  const response = await axios.get(
      `http://127.0.0.1:8000/search_book_by_name?name=${input}`
  );
  const book_list = response.data.book_list;
  displayBookList(book_list);
}

document.getElementById("searchButton").addEventListener("click", search_by_name);

function displayBookList(bookList) {

  const content = document.getElementById("content");
  content.innerHTML = '';

  const divRow = document.createElement('div');
  divRow.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4', 'col-md-10', 'm-auto');

  bookList.forEach(book => {
    const divCol = document.createElement('div');
    divCol.classList.add('col');

    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const a = document.createElement('a');
    a.href = `book_info.html?id=${book.id}`;

    const img = document.createElement('img');
    img.src = `images/${book.book_name}.jpg`;
    img.classList.add('card-img-top');
    img.alt = 'Book Cover';

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = book.book_name;

    const pWriter = document.createElement('p');
    pWriter.classList.add('card-text');
    pWriter.textContent = `Writer: ${book.writer_name}`;

    const pRating = document.createElement('p');
    pRating.classList.add('card-text');
    pRating.textContent = `Rating: ${book.rating}`;

    const aPrice = document.createElement('a');
    aPrice.href = '#';
    aPrice.classList.add('btn', 'btn-info');
    aPrice.dataset.bsToggle = 'tooltip';
    aPrice.dataset.bsPlacement = 'right';
    aPrice.title = 'Price';
    aPrice.textContent = 'Price';

    a.appendChild(img)
    a.appendChild(h5);
    // divCardBody.appendChild(h5);
    divCardBody.appendChild(pWriter);
    divCardBody.appendChild(pRating);
    divCardBody.appendChild(aPrice);
    divCard.appendChild(a);
    divCard.appendChild(divCardBody);
    divCol.appendChild(divCard);

    divRow.appendChild(divCol);
  });

  content.appendChild(divRow);
}



async function get_book_info(id) {
  const response = await axios.get(
    `http://127.0.0.1:8000/book_info?id=${id}`
    );
  console.log(response.data);

  const bookInfo = response.data["Book's info"];
  displayBookInfo(bookInfo);
}

function displayBookInfo(bookInfo) {
  const bookInfoDiv = document.getElementById('bookInfo');
  bookInfoDiv.innerHTML = `
    <h1>${bookInfo.book_name}</h1>
    <p>Writer: ${bookInfo.writer_name}</p>
    <p>Type: ${bookInfo.type_book}</p>
    <p>Introduction: ${bookInfo.intro}</p>
    <p>Rating: ${bookInfo.rating}</p>
`;


  const bookCover = document.getElementById('bookCover');
  bookCover.src = `images/${bookInfo.book_name}.jpg`;
  bookCover.alt = bookInfo.book_name;
}



function toggleStar(star) {
  star.classList.toggle("checked");
}

function submitFormAndAddStar() {
  add_rating();
  submitForm();
}

function submitForm() {
  const queryParams = new URLSearchParams(window.location.search);
  const bookId = queryParams.get('id');
  const link = `book_info.html?id=${bookId}`;
  window.location.href = link;
}

async function add_rating() {
  const stars = document.querySelectorAll(".fa-star.checked").length;
  console.log(stars);
  const queryParams = new URLSearchParams(window.location.search);
  const Id = queryParams.get('id');

  console.log("id", Id)
  console.log("stars", stars)

  const response = await axios.post(
    `http://127.0.0.1:8000/rating?book_id=${Id}&rating=${stars}`
  );
}