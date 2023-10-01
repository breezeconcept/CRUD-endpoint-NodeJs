// for generating unique id for each user
import { v4 as uuidv4 } from 'uuid'


// DUMMY DATA
let users = [
    {
        firstname: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstname: "Jane",
        lastName: "Diana",
        age: 23
    }
]





// get user endpoint
export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
};


// post endpoint
export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId }
    users.push(userWithId);
    res.send(`User with the name ${user.firstname} added to the database`);
};


// get with id endpoint
export const getUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
};


// delete endpoint
export const deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database`);
};


// update endpoint
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id == id);
    if (firstName) {
        user.firstName = firstName;
    } 
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the id ${id} has been updated`);
};

