const express = require("express");
const user_app = express();
const PORT = 8080;
const cors = require('cors');

user_app.use(cors());
user_app.use(express.json());

// Quick about for API
user_app.get("/about", (req, res) => {
	res.send("This is an API database for users of FinLit");
});

// Adds user_routes paths
const userRouter = require('./routes/user_routes');
user_app.use('/users', userRouter);

// Port information
user_app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});