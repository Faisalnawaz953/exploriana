const express = require("express");
const router = express.Router();

const Register = require("../../models/registerSchema");

router.post("/", async (req, res) => {
	const email = req.body.Email;
	Register.findOne({ Email: email }, (err, existinguser) => {
		if (!existinguser) {
			const register = new Register(req.body);
			try {
				const regist = register.save();
				if (!regist) throw Error("Something went wrong during registration");
				res.status(200).json({ register: register });
			} catch (err) {
				res.status(400).json({ msg: err });
			}
		} else {
			res.status(500).json({ msg: "Visitor already Registered" });
		}
	});
});

module.exports = router;
