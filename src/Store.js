export const Store = {
	datas: {
		tasks: [
			{
				id: 1,
				title: 'Créer le formulaire de contact',
				criticality: 3,
				hours: 14,
				visibility: true,
			},
			{
				id: 2,
				title: 'Valider la maquette',
				criticality: 8,
				hours: 5,
				visibility: true,
			},
			{
				id: 3,
				title: 'Acheter de l\'uranium bio',
				criticality: 6,
				hours: 17,
				visibility: false,
			},
			{
				id: 4,
				title: 'Régler l\'issue #44',
				criticality: 9,
				hours: 5,
				visibility: true,
			},
			{
				id: 5,
				title: 'Corriger les liens morts',
				criticality: 5,
				hours: 19,
				visibility: true,
			},
			{
				id: 6,
				title: 'Valider le compte rendu',
				criticality: 2,
				hours: 10,
				visibility: true,
			},
			{
				id: 7,
				title: 'Remplacer les pneus du caniche',
				criticality: 1,
				hours: 2,
				visibility: false,
			},
			{
				id: 8,
				title: 'Supprimer les branches inutiles sur GitHub',
				criticality: 6,
				hours: 17,
				visibility: true,
			},
			{
				id: 9,
				title: 'Eplucher le hamster',
				criticality: 9,
				hours: 16,
				visibility: false,
			},
			{
				id: 10,
				title: 'Rédiger les mentions légales',
				criticality: 1,
				hours: 12,
				visibility: true,
			}
		],

		newTask: {
			title: '',
			criticality: 0,
			hours: 0,
			visibility: false,
		},
		counter: 0
	}
}