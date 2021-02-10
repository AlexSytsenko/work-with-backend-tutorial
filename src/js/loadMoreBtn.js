import refs from './refs';

const loadMoreBtn = {
    enable() {
        refs.loadMoreBtn.disabled = false;
        refs.loadMoreBtnLabel.textContent = 'Показать еще';
        refs.loadMoreBtnSpinner.classList.add('is-hidden');
    },

    disable() {
        refs.loadMoreBtn.disabled = true;
        refs.loadMoreBtnLabel.textContent = 'Загружаем...';
        refs.loadMoreBtnSpinner.classList.remove('is-hidden');
    },

    show() {
        refs.loadMoreBtn.classList.remove('is-hidden');
    }
    
};

export default loadMoreBtn;