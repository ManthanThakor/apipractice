const newsContainer = document.getElementById('news-container');

const articles = [
    {
        title: "Redfall DLC Launch: Redfall Missing DLC Characters 1 Year After its Launch",
        image: "redfall.jpg",
        summary: "Players are wondering where the DLC they paid for is, noting it's been a stably disappointing situation.",
        author: "Brett Dyoll",
        timestamp: "1 hour ago"
    },
    {
        title: "Lollipop Chainsaw RePOP: Producer Has Good News For Fans Missing Anticipated Summer 2024 Remaster",
        image: "lollipop-chainsaw.jpg",
        summary: "The producer of the upcoming Lollipop Chainsaw RePOP has encouraging news for fans eagerly awaiting its re-release.",
        author: "Trulaman",
        timestamp: "2 hours ago"
    }
];

articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('news-article');

    articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <img src="${article.image}" alt="">
        <p>${article.summary}</p>
        <p class="author">Author: ${article.author} - ${article.timestamp}</p>
    `;

    newsContainer.appendChild(articleElement);
});