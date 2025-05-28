const url = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(url);

promise
    .then((response) => {
        console.log(response); // objeto Response
        return response.json(); // valor de retorno es una nueva promesa
    })
    .then((json) => {
        console.log(json);
        // crear elementos html...
    });