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
//do something.... the .status is not necessary to have in the code.
    console.log('xxx Hello World 🌎!')
    response.status(200).send('Hello World🌎!');
})

//making a get request to get list of students. we made and array of objects with the first and last name of students. 
app.get('/students', (request, response) => {
    const students = [
        {firstName: 'Jonathan', lastName: 'Vegas'},
        {firstName: 'Bridgette', lastName: 'Lemus'},
        {firstName: 'Mason', lastName: 'Madaras'},
        {firstName: 'Logan', lastName: 'McCalley'},
    ];
    // WE MUST USE REPONSE TO SEND BACK responses. 
    response.send(students);
})

// start listening on a port. to start loistening on a port. 
app.listen(3001, ()=> {
    console.log('now listening on port 3001');
})



//methods of get
//get all
//get one by id
//get by search
//update osne by id
//delete one by id
//create one by id