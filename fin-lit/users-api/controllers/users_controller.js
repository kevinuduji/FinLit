const USERS = require("../data/USER_DATA");

// Searches for a user by their username and returns the user object
function getUserByName(name){
    const result = USERS.filter((user) => user.username == name);
    return result[0];
}

// Adds account to dataset, throws error if username already exists
function createAccount(user){
    if(getUserByName(user.username) !== undefined){
        USERS.push(user);
        return "Successfully added user!";
    }

    throw new Error(`Username already exists.`);
}

// Updates user information, throws error if user not found
function updateUser(username, updatedUser){
    const index = USER.findIndex(user => user.username === username);
    if(index > -1){
        USERS[index] = updatedMovie;
        return updatedMovie;
    }

    throw new Error(`User with username ${username} does not exist.`);
}

// Deletes user from data, throws error if user not found
function deleteUser(user){
    const index = USERS.findIndex(user => user.username === user);

    if(index > -1){
        return USERS.splice(index, 1)[0];
    }                 

    throw new Error(`User with username ${user} does not exist.`)
}

module.exports = {
    getUserByName,
    createAccount,
    updateUser,
    deleteUser,  
};