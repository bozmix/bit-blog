const url = 'https://jsonplaceholder.typicode.com';

const getData = () => {
    return fetch(url)
            .then(response => response.json())
            .then(myResponse => console.log(myResponse))
}