let theBookStore = new Vue({
    el: "#bookStoreVue",
    data: {
        books: [],
        search: "",
    },

    methods: {
        getData: function () {
            fetch('https://api.myjson.com/bins/zyv02')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.books = data.books;
                    console.log(this.books);
                });
        }
    },

    computed: {
        filterBooks: function () {

            return this.books.filter((item) => item.title.toLowerCase().match(this.search.toLowerCase()));
        }
    },

    created() {
        this.getData();
    },
});