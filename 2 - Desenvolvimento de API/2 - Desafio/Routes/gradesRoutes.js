import gradesController from "../Controller/gradesController.js";

class gradesRoutes {
	constructor(app) {
		this._app = app;
		this._gradesController = new gradesController();

		this._app
			.route("/")
			.post(async (req, res) => {
				//res.send(req.body);
				res.send(this._gradesController.insertRecord({ ...req.body }));
			})
			.put(async (req, res) => {
				res.send(this._gradesController.updateRecord({ ...req.body }));
			});

		this._app
			.route("/:id")
			.get(async (req, res) => {
				res.send(this._gradesController.getRecord(req.params.id));
			})
			.delete(async (req, res) => {
				res.send(this._gradesController.deleteRecord(req.params.id));
			});

		this._app.post("/media", async (req, res) => {
			res.send(this._gradesController.getMediaNotaSubject(req.body.subject, req.body.type));
        });
        
        this._app.post("/top3", async (req, res) => {
			res.send(this._gradesController.getMelhoresGrades(req.body.subject, req.body.type));
        });
        
        this._app.post("/nota", async (req, res) => {
			res.send(this._gradesController.getNotaTotalAluno(req.body.student, req.body.subject));
		});
	}
}

export default gradesRoutes;
