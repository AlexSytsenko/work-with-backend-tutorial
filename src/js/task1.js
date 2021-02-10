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
    fetchArticles();
    form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchArticles);

function fetchArticles() {
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.spinner.classList.remove('is-hidden'); 
    
    newsApi.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
        refs.loadMoreBtn.classList.remove('is-hidden');

        console.log(document.documentElement.offsetHeight);

//         window.scrollTo({
//     top: document.documentElement.offsetHeight,
//     behavior: "smooth"
// });
        
    }).finally(() => {
        refs.spinner.classList.add('is-hidden');
    });
}




