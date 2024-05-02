(async () => {
    const url = 'https://esportapi1.p.rapidapi.com/api/esport/search/ATK';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a7d906860dmsha9e0fd650cdd6cap18af61jsn7b13dd16c19f',
            'X-RapidAPI-Host': 'esportapi1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        displayData(result);
    } catch (error) {
        console.error(error);
    }
})();

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.textContent = data;
}
