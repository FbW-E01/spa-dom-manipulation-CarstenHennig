const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

// for (book in books) {
//   console.log(books.title);
// }
// console.log(books[0].title);
console.log(books[0].author.split(" "));

const list = document.querySelector(".book-list");
for (i in books) {
  const bookList = document.createElement("li");
  if (books[i].alreadyRead == true) {
    bookList.innerHTML = `
  <img class="book-cover" src="${books[i].img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${books[i].title}</h5>
    <p class="card-text">${books[i].author}</p>
    <p class="btn btn-primary">${books[i].alreadyRead}</p>
  </div>
</div>`;
  } else {
    bookList.innerHTML = `
  <img class="book-cover" src="${books[i].img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${books[i].title}</h5>
    <p class="card-text">${books[i].author}</p>
    <p class="btn btn-secondary">${books[i].alreadyRead}</p>
  </div>
</div>`;
  }
  bookList.className = ``;
  list.appendChild(bookList);
}

// bookList.innerHTML = books;
// bookList.innerText = books[0].title;
// list.innerHTML = books;
