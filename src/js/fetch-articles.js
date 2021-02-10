const apiKey = 'e4819cc6c6aa44caa2653b01f97e1426';

function fetchArticles(searchQuery, page = 1) {

    const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=3&page=${page}`;
    const options = {
    headers: {
        'Authorization': apiKey,
    },
    };

 return fetch(url, options)
     .then(res => res.json())
     .then(({articles}) => articles)
     .catch(error => console.log(error));

}

export default fetchArticles;