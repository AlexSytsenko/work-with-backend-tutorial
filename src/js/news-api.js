const apiKey = 'e4819cc6c6aa44caa2653b01f97e1426';



export default {
    searchQuery: '',
    page: 1,

    fetchArticles() {

        const url = `http://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;
        const options = {
            headers: {
                'Authorization': apiKey,
            },
        };

        return fetch(url, options)
            .then(res => res.json())
            .then(({ articles }) => {
                this.page += 1;
                return articles;
            })
            .catch(error => console.log(error));

    },

    resetPage() {
        this.page = 1;
    },

    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },


};