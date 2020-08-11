import gradeModel from '../Model/gradesModel.js';


class gradesController {
	constructor() {
		this._gradesModel = new gradeModel();
	}

	insertRecord(newRecord) {
        this._gradesModel.insertRecord(newRecord);
	}

	updateRecord(updatedRecord) {
		this._gradesModel.updateRecord(updatedRecord);
	}

	deleteRecord(recordId) {
		this._gradesModel.deleteRecord(recordId);
	}

	getRecord(id) {
		return this._gradesModel.getRecord(id);
	}

	getNotaTotalAluno(student, subject) {
		return this._gradesModel.getNotaTotalAluno(student, subject);
	}

	getMediaNotaSubject(subject, type) {
		return this._gradesModel.getMediaNotaSubject(subject, type);
	}

	getMelhoresGrades(subject, type) {
		return this._gradesModel.getMelhoresGrades(subject, type);
	}
}
export default gradesController;
