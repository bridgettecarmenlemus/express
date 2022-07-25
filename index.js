// import express library
import express from 'express';
// intialize express server
const app = express();

//200x = ok
//300x = redirect
//400x = you f'd up. make a request that you're not allowed to make 
//500x = we f'd u, server down, database not connecting for example 
// list requests that we want express to respond to 
app.get('/hello', (request, response) => {
//do something....
    response.status(200).send('Hello World🌎!');
})



// start listening on a port. to start loistening on a port. 
app.listen(3001, ()=> {
    console.log('now listening on port 3001');
})