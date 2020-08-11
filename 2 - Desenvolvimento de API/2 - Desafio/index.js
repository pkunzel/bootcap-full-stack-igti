import express from "express";
import gradesRoutes from "./Routes/gradesRoutes.js"

const app = express();
app.use(express.json());

const rotas = new gradesRoutes(app);

app.listen(3000, function () {
	console.log("iniciou");
});
