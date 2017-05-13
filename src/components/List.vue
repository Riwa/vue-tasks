<template>
	<ul class="collection with-header">
		<li class="collection-header"><h4>Tâches en attente</h4></li>
		<task v-for="task in tasks" :tsk="task"></task>
	</ul>
</template>

<script>
import {Store} from '@/Store.js'
import Task from '@/components/Task'

export default {
	components: {
		task: Task,
	},
	data() {
		return {
			tasks: Store.datas.tasks,
		}
	}
}

</script>