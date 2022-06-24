import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';

const maioresPorGenero = () => (source$) =>
	source$.pipe(
		filter((e) => e.idade >= 18),
		reduce(
			(a, b) => ({
				...a,
				[b.sexo]: [...(a[b.sexo] || []), b],
			}),
			{}
		)
	);

const pessoas = [
	{ nome: 'João', sexo: 'masculino', idade: 18 },
	{ nome: 'José', sexo: 'masculino', idade: 32 },
	{ nome: 'Maria', sexo: 'feminino', idade: 11 },
	{ nome: 'Julia', sexo: 'feminino', idade: 23 },
];

from(pessoas).pipe(maioresPorGenero()).subscribe((e) => console.log(e), (err) => console.error(err));
