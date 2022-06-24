// // Maiores de 18 anos

// masculino: Array(2)
// 0: { nome: "João", sexo: "masculino", idade: 18 }
// 1: { nome: "José", sexo: "masculino", idade: 32 }
// length: 2
// feminino: Array(1)
// 0: { nome: "Julia", sexo: "feminino", idade: 23 }
// length: 1

const pessoas = [
	{ nome: 'Lucas', sexo: 'masculino', idade: 18 },
	{ nome: 'Jonathan', sexo: 'masculino', idade: 32 },
	{ nome: 'Igor', sexo: 'feminino', idade: 11 },
	{ nome: 'Debora', sexo: 'feminino', idade: 23 },
];

const maioresPorGenero = (pessoas) =>
	pessoas.filter((p) => p.idade >= 18).reduce(
		(a, b) => ({
			...a,
			[b.sexo]: [ ...(a[b.sexo] || []), b ],
		}),
		{}
	);

console.log(maioresPorGenero(pessoas));
