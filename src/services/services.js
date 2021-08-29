const endPoint = 'https://jsonplaceholder.typicode.com/posts';

const getData = () => {
    return fetch(endPoint)
            .then(response => {
                console.log(response)
                return response.json()

            })
            .then(myResponse => {
                console.log(myResponse)
                return myResponse
            })
}

export default getData