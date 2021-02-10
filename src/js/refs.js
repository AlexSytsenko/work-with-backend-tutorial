const articlesContainer = document.querySelector('.js-articles'),
    searchForm = document.querySelector('.js-search-form'),
    loadMoreBtn = document.querySelector('[data-action="load-more"]'),
    loadMoreBtnLabel = loadMoreBtn.querySelector('.label'),
    loadMoreBtnSpinner = loadMoreBtn.querySelector('.spinner');



export default {articlesContainer, searchForm, loadMoreBtn, loadMoreBtnLabel, loadMoreBtnSpinner};