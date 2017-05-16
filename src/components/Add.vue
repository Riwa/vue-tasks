<template>
	<div class="form">
		<form>
		<h4> Ajouter une nouvelle tâche</h4>
			<div class="input-field col s12">
				<input id="task_name" v-model="newTask.title" type="text" class="validate">
				<label for="task_name">Titre de la tâche</label>
			</div>
			<div class="input-field col s12">
				<input id="task_ETA" v-model="newTask.hours" type="number" class="validate">
				<label for="task_ETA">Temps de réalisation estimé (heures)</label>
			</div>
			<div class="input-field col s12">
				<input id="task_crit" v-model="newTask.criticality" type="number" class="validate" min="0" max="10">
				<label for="task_crit">Criticité</label>
			</div>
				<div class="switch">
			<label>
				Invisible
				<input type="checkbox" v-model="newTask.visibility">
				<span class="lever"></span>
				Visible
			</label>
			</div>
			<a class="waves-effect waves-light btn" @click="addTask()"><i class="material-icons right">add</i>Ajouter</a>
		</form>
	</div>
</template>

<script>
import {Bus} from '@/Bus.js'
import {Store} from '@/Store.js'

export default {
	data() {
		return {
			newTask: Store.datas.newTask,
		}
	},
		methods: {
		addTask() {
			console.log('Coucou');
			Bus.$emit('addTask', this.newTask);
			console.log(this.newTask);

			this.newTask = {
				title: '',
				criticality: 0,
				hours: 0,
				visibility: false,
		};

		console.log(this.newTask);
	},
}
}
</script>

<style scoped>
	.btn {
		margin-top:30px;
	}
</style>