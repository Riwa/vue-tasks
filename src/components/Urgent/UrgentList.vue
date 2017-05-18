<template>
	<ul class="collection with-header left-align">
		<li class="collection-header center-align"><h4>Tâches urgentes</h4></li>
		<task v-for="task in tasks.tasks" :tsk="task" :key="task.id" v-if="task.criticality >=7"></task>
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