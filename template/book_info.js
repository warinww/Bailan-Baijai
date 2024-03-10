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

document.getElementById('addToCartButton').addEventListener('click', function () {
    const queryParams = new URLSearchParams(window.location.search);
    const book_id = queryParams.get('id');
    const account_id = getLoggedInAccountId(); 

    if (book_id && account_id) {
        addToCart(account_id, book_id);
    } else {
        console.error('Book ID or Account ID is missing.');
    }
});

function addToCart(account_id, book_id) {
    fetch(`/add_cart?account_id=${account_id}&book_id=${book_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data);
            alert('Book added to cart successfully!');
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            alert('Error adding book to cart. Please try again later.');
        });
}

// แสดงรายการสินค้าในตะกร้า
function showCart(readerId) {
    fetch(`/show_cart?reader_id=${readerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // แสดงรายการสินค้าที่มีอยู่ในตะกร้า
            console.log(data);
            // ทำการแสดงผลในหน้าเว็บ
            // เช่น การสร้าง HTML เพื่อแสดงรายการสินค้าในตะกร้า
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            alert('Error fetching cart data. Please try again later.');
        });
}

window.onload = function () {
    const queryParams = new URLSearchParams(window.location.search);
    const bookId = queryParams.get('id');
    get_book_info(bookId);
};async function get_book_info(id) {
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

document.getElementById('addToCartButton').addEventListener('click', function () {
    const queryParams = new URLSearchParams(window.location.search);
    const book_id = queryParams.get('id');
    const account_id = getLoggedInAccountId(); 

    if (book_id && account_id) {
        addToCart(account_id, book_id);
    } else {
        console.error('Book ID or Account ID is missing.');
    }
});

function addToCart(account_id, book_id) {
    fetch(`/add_cart?account_id=${account_id}&book_id=${book_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data);
            alert('Book added to cart successfully!');
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            alert('Error adding book to cart. Please try again later.');
        });
}

// แสดงรายการสินค้าในตะกร้า
function showCart(readerId) {
    fetch(`/show_cart?reader_id=${readerId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // แสดงรายการสินค้าที่มีอยู่ในตะกร้า
            console.log(data);
            // ทำการแสดงผลในหน้าเว็บ
            // เช่น การสร้าง HTML เพื่อแสดงรายการสินค้าในตะกร้า
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            alert('Error fetching cart data. Please try again later.');
        });
}

window.onload = function () {
    const queryParams = new URLSearchParams(window.location.search);
    const bookId = queryParams.get('id');
    get_book_info(bookId);
};