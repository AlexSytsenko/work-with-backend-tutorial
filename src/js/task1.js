import newsApi from './news-api';
import updateArticlesMarkup from './update-article-markup';
import refs from './refs';

// fetch('http://hn.algolia.com/api/v1/search?query=goit&tags=story')
//     .then(response => response.json())
//     .then(data => console.log(data));



refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    newsApi.query = form.elements.query.value;

    refs.articlesContainer.innerHTML = "";

    newsApi.resetPage();

    form.reset();
    newsApi.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
    });
    
});


refs.loadMoreBtn.addEventListener('click', ()=> {
newsApi.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
    });
})




