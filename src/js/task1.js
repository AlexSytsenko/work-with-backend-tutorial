import fetchArticles from './fetch-articles';
import updateArticlesMarkup from './update-article-markup';

// fetch('http://hn.algolia.com/api/v1/search?query=goit&tags=story')
//     .then(response => response.json())
//     .then(data => console.log(data));

const refs = {
    articlesContainer: document.querySelector('.js-articles'),
    searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.query.value;

    refs.articlesContainer.innerHTML = "";

    form.reset();
    fetchArticles(inputValue).then(updateArticlesMarkup);
    
});




