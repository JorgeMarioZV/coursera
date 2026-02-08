var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

// console.log('Testing...');

xhr.onload = function () {
    var articles = xhr.response.articles;
    // var articles = JSON.parse(xhr.responseText); //Doesnt require xhr.responseType command above
    // console.log(articles);
    // console.log('Internal Testing...');
    var articlesDiv = document.getElementById("articles");

    articles.forEach(article => {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        articlesDiv.appendChild(articleDiv);

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(way => {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            // listItem.textContent = article.ways_to_achieve[1];
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(benefit => {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
    });
};

// console.log('External Testing...');
xhr.send();
