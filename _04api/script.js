document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("newsList");
  const errorMessage = document.getElementById("errorMessage");

  // Fetch all gaming news articles
  fetch("/api/gaming-news")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Clear any existing news items
      newsList.innerHTML = "";
      // Insert each news article into the list
      data.forEach(article => {
        const li = document.createElement("li");
        li.textContent = `${article.title} - ${article.author}`;
        newsList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      errorMessage.style.display = "block";
    });
});
