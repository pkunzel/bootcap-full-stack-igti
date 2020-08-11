const inputPesquisar = document.querySelector("#inputPesquisa");
const btnPesquisar = document.querySelector("#btnPesquisar");
const areaResultsFound = document.querySelector("#areaResultsFound");
const detalheResultados = areaResultsFound.firstElementChild;
const totaisResultados = areaResultsFound.lastElementChild;
const areaResultsNotFound = document.querySelector("#areaResultsNotFound");
let usuarios;

window.addEventListener("load", function () {
	getUsers();

	inputPesquisar.addEventListener("keypress", filtrarUsuarios);
	btnPesquisar.addEventListener("click", filtrarUsuarios);
});

function getUsers() {
	fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((response) => {
			response.results.forEach(
				(result) => (result.name.full = `${result.name.first} ${result.name.last}`)
			);

			usuarios = response.results;
		})
		.catch((error) => {
			console.error("There has been a problem with your fetch operation:", error);
		});
}

function filtrarUsuarios() {
	if (inputPesquisar.value != "") {
        clearResults();
		const usuariosFiltrados = usuarios.filter((user) =>
			user.name.full.toLowerCase().includes(inputPesquisar.value.toLowerCase())
		);

		if (usuariosFiltrados.length > 0) {
			let total = {
				female: 0,
				male: 0,
				age: 0,
				ageAvg: 0,
			};

			usuariosFiltrados.forEach((user) => {
                detalheResultados.innerHTML += `<p>${user.name.full} ${user.dob.age}</p>`;
				total.female += user.gender == "female" ? 1 : 0;
				total.male += user.gender == "male" ? 1 : 0;
				total.age += user.dob.age;
			});

            total.ageAvg = total.age / usuariosFiltrados.length;
            
            totaisResultados.innerHTML = 
            `<ul>
                <li><strong>Sexo Masculino:</strong> ${total.male}</li>
                <li><strong>Sexo Feminino :</strong> ${total.female}</li>
                <li><strong>Soma das Idades:</strong> ${total.age}</li>
                <li><strong>Média de Idades:</strong> ${total.ageAvg}</li>
            </ul>`;

            areaResultsNotFound.style.display = "none";
		} else {
            clearResults();
            areaResultsNotFound.style.display = "block";
		}
	}
}

function clearResults(){
    detalheResultados.innerHTML = "";
    totaisResultados.innerHTML = "";
}