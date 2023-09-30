// To import the express framework
import express from "express";

// To import the router module from the express framework
const router = express.Router();

// importing the logic for the routes from controllers folder
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js";






// GET ENDPOINT
router.get('/', getUsers);

// Post endpoint
router.post('/', createUser);


// Get with id endpoint
router.get('/:id', getUser);


// Delete endpoint
router.delete('/:id', deleteUser);



// update endpoint
router.patch('/:id', updateUser);


// TO export the content of this file 
export default router;












