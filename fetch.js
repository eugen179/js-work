const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

for(let i = 0; i<urls.length; i++){
    fetch(urls[i])
    .then(response => response.json())
    .then(data =>{
        console.log('Title: ${data.title} \nCompleted: ${data.completed}\n');
    })
}