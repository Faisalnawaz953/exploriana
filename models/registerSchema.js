const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Register = new Schema({
	FirstName: {
		type: String,
		required: true,
	},
	LastName: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
		unique: true,
	},
	Phone: {
		type: Number,
		required: true,
	},
	City: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Register", Register);
