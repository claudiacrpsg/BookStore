function eachBook (){
        var bookCase = document.getElementById("bookCase");
        var bookData = data.books;
        bookCase.innerHTML = "";
        var template = "";
        for (var i = 0; i < bookData.length; i++) {
            template += `  
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${bookData[i].cover}" alt="">
                </div>
                <div class="flip-card-back">
                    <h4 id="li">${bookData[i].title}</h4>
                    <h5>${bookData[i].description}</h5>
                    <a href="${bookData[i].detail}" data-lightbox="coverImage"><button type="button" class="btn btn-dark">More info</button></a>
                </div>
            </div>
            </div>
            `;
        }
        bookCase.innerHTML = template;
  }
eachBook();


function bookSearch(){
    var search = document.getElementById("mySearch");
    var input = search.value;
    console.log(input);

    var bookData = data.books;
    console.log(bookData);

    var bookTitle = data.books[0].title;
    console.log(bookTitle);

    var empty = [];
    for(var i = 0; i < bookTitle.length; i++){
       
    }
}

bookSearch();


