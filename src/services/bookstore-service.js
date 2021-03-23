export default class BookStoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                coverImage: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED'        
            },
            {
                id: 2,
                title: 'Release it',
                author: 'Michael T. Nygard',
                price: 45,
                coverImage: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED'        
            }
        ];
    }

}