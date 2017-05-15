<template>
	<div class="form">
		<form>
		<h4> Ajouter une nouvelle tâche</h4>
			<div class="input-field col s12">
				<input id="task_name" type="text" class="validate">
				<label for="task_name">Titre de la tâche</label>
			</div>
			<div class="input-field col s12">
				<input id="task_ETA" type="number" class="validate">
				<label for="task_ETA">Temps de réalisation estimé (heures)</label>
			</div>
			<div class="input-field col s12">
				<input id="task_crit" type="number" class="validate" min="0" max="10">
				<label for="task_crit">Criticité</label>
			</div>
				<div class="switch">
			<label>
				Invisible
				<input type="checkbox">
				<span class="lever"></span>
				Visible
			</label>
			</div>
		</form>
	</div>
</template>

<script>

</script>