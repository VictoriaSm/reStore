export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 65,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: "You Don't Know JS: Up & Going",
            author: 'Kyle Simpson',
            price: 10,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41WdbPkuINL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 5,
            title: "You Don't Know JS: ES6 & Beyond",
            author: 'Kyle Simpson',
            price: 22,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41arrvfm3fL._SX329_BO1,204,203,200_.jpg'
        },
        {
            id: 6,
            title: 'Learning React',
            author: 'Alex Banks, Eve Porcello',
            price: 40,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51c7P2ntgwL._SX343_BO1,204,203,200_.jpg'
        },
        {
            id: 7,
            title: 'Web Development with Node and Express: Leveraging the JavaScript Stack',
            author: 'Ethan Brown',
            price: 35,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51nhZFck7cL._SX379_BO1,204,203,200_.jpg'
        }
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.75) {
                    // reject(new Error('Oops'))
                // } else 
                resolve(this.data);
            }, 700)
        });
    }
}