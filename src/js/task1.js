import newsApi from './news-api';
import updateArticlesMarkup from './update-article-markup';
import LoadMoreBtn from './components/load-more-button';
import refs from './refs';

// fetch('http://hn.algolia.com/api/v1/search?query=goit&tags=story')
//     .then(response => response.json())
//     .then(data => console.log(data));



const loadMoreBtn = new LoadMoreBtn({
    selector: 'button[data-action="load-more"]',
    hidden: true,
});

console.log(loadMoreBtn);

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);


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



