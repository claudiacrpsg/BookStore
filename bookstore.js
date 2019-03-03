getData();

function getData() {
    fetch('https://api.myjson.com/bins/zyv02')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data = data;
            console.log(data);
            getBooks(data);
        });
}

function getBooks(data) {
    var bookCase = document.getElementById("bookCase");
    var bookData = data.books;
    // bookCase.innerHTML = "";
    var template = "";
    for (var i = 0; i < bookData.length; i++) {
        template += `  
    <div class="flip-card" id="flipCard">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="${bookData[i].cover}" alt="">
        </div>
        <div class="flip-card-back">
            <h4 id="bookTitle">${bookData[i].title}</h4>
            <h5>${bookData[i].description}</h5>
            <a href="${bookData[i].detail}" data-lightbox="coverImage"><button type="button" class="btn btn-dark">More info</button></a>
        </div>
    </div>
    </div>
    `;
        bookCase.innerHTML = template;

    }
}



