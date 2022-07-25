// import express library
import express, { response } from 'express';
// intialize express server
const app = express();
app.use(express.json());
// we need to add this line above if we want to add data in the postman app

// add a new student in theory
// part of the idea of the post is to send a document. it more about the request. jus to keep things suppper simple, we will send back a response. a fake post
app.post('/students', (request, response) => {
    const newStudent = request.body;
    students.push(newStudent);
    response.status(201).send(students);

});

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

const students = [
    {firstName: 'Jonathan', lastName: 'Vegas'},
    {firstName: 'Bridgette', lastName: 'Lemus'},
    {firstName: 'Mason', lastName: 'Madaras'},
    {firstName: 'Logan', lastName: 'McCalley'},
];
//making a get request to get list of students. we made and array of objects with the first and last name of students. 
app.get('/students', (request, response) => {
    // WE MUST USE REPONSE TO SEND BACK responses. 
    response.send(students);
})

// colons mean that whatever word you type there it will be a variable. It will create 4 sepereate API point. and you can continue to add stuent info in the students array.
// for example /students/Mason
app.get('/students/:fName',(request, response) => {
    const student = students.find(stud => stud.firstName === request.params.fName);
    if(!student) {
        response.status(404).send({message: 'Student not found', success: false})
        return; 
    }
    response.send(student);
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
// .map
// .find (single element, will find the first element that matches, for example my name 'bridette)
// the .find will take a callback, a single element of the array 