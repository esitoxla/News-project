fetch(
  "https://newsapi.org/v2/everything?apiKey=1bf35746c622431ca07f20e24056b1d9&q=politics&pageSize=9"
)
  .then(function (response) {
    // console.log(response.body);
    return response.json();
  })
  .then(function (data) {
    //console.table(data.articles);
    //for of loop
    for (const article of data.articles) {
      //console.log(article);
      const articleDiv = document.createElement("div");
       
      const articleImg = document.createElement("img");
      articleImg.setAttribute("src", article.urlToImage);
      articleImg.setAttribute("alt", article.title);
      //linking css style to image
      articleImg.classList.add("article-img");
      articleDiv.appendChild(articleImg);

      const articleH2 = document.createElement("h2");
      articleH2.textContent = article.title;
      articleDiv.appendChild(articleH2);


       document.querySelector("#articles").appendChild(articleDiv);
    }
  });

  