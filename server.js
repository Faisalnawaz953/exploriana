const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());
const registerRoutes = require("./routes/api/registerVistor");
mongoose
	.connect(process.env.MONGODB_URI || MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("Mongoose Connected"))
	.catch((err) => console.log(err));
//Routes

app.use("/register", registerRoutes);
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
