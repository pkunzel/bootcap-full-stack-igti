import fs from "fs";

class dataModel {
	constructor() {
		this._gradesFilePath = "./Database/grades.json";
		this._dataset = JSON.parse(fs.readFileSync(this._gradesFilePath, "utf-8"));
	}

	_commit() {
		fs.writeFile(this._gradesFilePath, JSON.stringify(this._dataset), function(){ console.log("commit");});
	}

	/*
	 	1) Crie um endpoint para criar uma grade. Este endpoint deverá receber como parâmetros
		os campos student, subject, type e value conforme descritos acima. Esta grade deverá ser
		salva no arquivo json grades.json, e deverá ter um id único associado. No campo
		timestamp deverá ser salvo a data e hora do momento da inserção. O endpoint deverá
		retornar o objeto da grade que foi criada. A API deverá garantir o incremento automático
		deste identificador, de forma que ele não se repita entre os registros. Dentro do arquivo
		grades.json que foi fornecido para utilização no desafio o campo nextId já está com um
		valor definido. Após a inserção é preciso que esse nextId seja incrementado e salvo no
		próprio arquivo, de forma que na próxima inserção ele possa ser utilizado.
	*/
	insertRecord(newRecord) {
		newRecord.id = this._dataset.nextId++;
		this._dataset.grades.push(newRecord);
		this._commit();
	}

	/*
		2) Crie um endpoint para atualizar uma grade. Este endpoint deverá receber como
		parâmetros o id da grade a ser alterada e os campos student, subject, type e value. O
		endpoint deverá validar se a grade informada existe, caso não exista deverá retornar um
		erro. Caso exista, o endpoint deverá atualizar as informações recebidas por parâmetros
		no registro, e realizar sua atualização com os novos dados alterados no arquivo
		grades.json.
	*/
	updateRecord(updatedRecord) {
		let index = this._dataset.grades.findIndex(grade => grade.id == updatedRecord.id);

		if(index > -1){
			let current = this._dataset.grades[index];
			this._dataset.grades[index] = { ...current, ...updatedRecord };
			this._commit();
		}else{
			console.log("Não encotrado");
		}
		
	}

	/*
		Crie um endpoint para excluir uma grade. Este endpoint deverá receber como
		parâmetro o id da grade e realizar sua exclusão do arquivo grades.json.
	*/
	deleteRecord(recordId) {
		let recordIndex = this._dataset.grades.findIndex((grade) => grade.id == recordId);

		if (recordIndex > -1) {
			this._dataset.grades.splice(recordIndex, 1);
			this._commit();
		}
	}

	/*
		Crie um endpoint para consultar uma grade em específico. Este endpoint deverá
		receber como parâmetro o id da grade e retornar suas informações.
	*/
	getRecord(id) {
		return this._dataset.grades.filter((grade) => grade.id == id);
	}

	getAllRecords() {
		return this._dataset.grades;
	}

	getAllMatches(searchObject){
		return this._dataset.grades.filter((grade) => {
			let isMatch = true;
			Object.keys(searchObject).forEach(key => {
				if(searchObject[key] != grade[key]){
					isMatch = false;
					return;
				}
			});
			return isMatch;
		});
	}
}

export default dataModel;
