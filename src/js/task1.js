import newsApi from './news-api';
import updateArticlesMarkup from './update-article-markup';
import refs from './refs';
import loadMoreBtn from './loadMoreBtn';

// fetch('http://hn.algolia.com/api/v1/search?query=goit&tags=story')
//     .then(response => response.json())
//     .then(data => console.log(data));

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchArticles);


function searchFormSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    newsApi.query = form.elements.query.value;

    clearArticlesContainer();

    newsApi.resetPage();
    fetchArticles();
    form.reset();
}

function fetchArticles() { 
    loadMoreBtn.disable();
    
    newsApi
        .fetchArticles()
        .then(articles => {
            updateArticlesMarkup(articles);
            loadMoreBtn.show();
            loadMoreBtn.enable();
        });  
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = "";
}



