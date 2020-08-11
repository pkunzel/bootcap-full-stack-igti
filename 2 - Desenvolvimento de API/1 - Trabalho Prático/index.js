import fs from 'fs';

async function gerarArquivosJson() {
    const estados = JSON.parse(await fs.promises.readFile("Estados.json", "utf-8"));
    const cidades = JSON.parse(await fs.promises.readFile("Cidades.json", "utf-8"));

    estados.forEach(estado => {
        estado.cidades = cidades.filter(cidade => cidade.Estado == estado.ID);
        //fs.writeFile(`results/${estado.Sigla}.json`, JSON.stringify(cidades.filter(cidade => cidade.Estado == estado.ID)), function () { console.log(estado.Nome) });
    });

    fs.writeFile(`Completo.json`, JSON.stringify(estados), function () { console.log("ok") });
}

//gerarArquivosJson();

fs.readFile("Completo.json", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const estados = JSON.parse(data);

    // Estados ordem ascendete número de cidades
    const ordenaPorNumCidades = estados.sort((a, b) => a.cidades.length - b.cidades.length)
        .map(a => ({ Estado: a.Nome, Cidades: a.cidades.length }));
    // console.log(ordenaPorNumCidades);

    // Menor e Maior nomes de cidades
    const menorMaiorNomes = estados.map(estado => {
        const cidadesOrdenadas = estado.cidades.sort((a, b) => a.Nome.length - b.Nome.length);
        return {
            Estado: estado.Nome,
            MenorNome: cidadesOrdenadas[0].Nome,
            MaiorNome: cidadesOrdenadas[cidadesOrdenadas.length - 1].Nome,
        }
    });
    // console.log(menorMaiorNomes);

    // Maior nome de todos
    const EstadoCidadeMaiorNome = menorMaiorNomes.reduce((maior, atual) => maior.MaiorNome.length > atual.MaiorNome.length ? maior : atual);
    //console.log(`\nCidade com o maior de todos nomes: ${EstadoCidadeMaiorNome.MaiorNome}\n`);

    // Menor Nome de todos.
    // Ordenado do maior para o menor considerando a ordem alfabetica em caso de empate
    const EstadoCidadeMenorNome = menorMaiorNomes.sort((a, b) => {
        if (b.MenorNome.length > a.MenorNome.length) return 1;
        if (b.MenorNome.length < a.MenorNome.length) return -1;
        return b.MenorNome.localeCompare(a.MenorNome);
    });

    //console.log(`\nCidade com o maior de todos nomes: ${EstadoCidadeMenorNome[length - 1].MenorNome}\n`);


    // Só conferindo que a cidade com maior nome não tinha um empate...
    // não precisa rodar esse.
    // console.log(menorMaiorNomes.sort((a, b) => {
    //     if (b.MaiorNome.length > a.MaiorNome.length) return 1;
    //     if (b.MaiorNome.length < a.MaiorNome.length) return -1;
    //     return b.MaiorNome.localeCompare(a.MaiorNome);
    // }));
});