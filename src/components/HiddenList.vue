<template>
	<ul class="collection with-header left-align">
		<li class="collection-header center-align"><h4>Tâches masquées</h4></li>
		<task v-for="task in tasks.tasks" :tsk="task" v-if="task.visibility === false"></task>
	</ul>
</template>

<script>
import {Store} from '@/Store.js'
import {Bus} from '@/Bus.js'
import Task from '@/components/Task'

export default {
	components: {
		task: Task,
	},
	data() {
		return {
			tasks: Store.datas,
		}
	},
	methods: {

	}, 

	created() {
			// Bus.$on('addTask', (content) => {
			// 	if(content.visibility === false){
			// 		console.log('Hello from List.vue');
			// 		this.tasks.tasks.push(content);
			// 	} else {
			// 		console.log(`Ce n'est pas mon problème`)
			// 	}

			// 	//console.log(this.tasks);
			// }
			// );
	}
}

</script>