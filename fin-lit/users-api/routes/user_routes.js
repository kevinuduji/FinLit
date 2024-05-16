const router = require("express").Router();
const{
    getUserByName,
    createAccount,
    updateUser,
    deleteUser, 
} = require("../controllers/users_controller");

// GET user by username
router.get("/:user", (req, res) => {
    const username = req.params.user;
    const user = getUserByName(username);
    res.json(user);
});

// POST user with username, password, and default score of 0
router.post("/", (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
        credit_score: 0,
    };
    createAccount(newUser);
    res.status(201).json(newUser);
});

// PUT user with updated details
router.put("/:user", (req, res) => {
    const updatedUser = {
        username: req.body.username,
        password: req.body.password,
        credit_score: req.body.credit_score,
    }
    updateUser(req.params.user, updatedUser);
    res.json(updatedUser);
});

//DELETE user
router.delete("/:user", (req, res) => {
    res.json(deleteUser(req.params.user))
});

module.exports = router;