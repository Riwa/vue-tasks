<template>
	<li class="collection-item"><div><span class="task-title">{{ tsk.title }}</span><br><span>ETA : {{ tsk.hours }} heures</span><br><span>Priorité : {{ tsk.criticality }}</span><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
</template>

<script>
	import {Store} from '@/Store.js'

	export default {
		name: 'task',
		props: ['tsk'],
		data(){
			return {
				tasks: Store.datas
			}
		}
	}
</script>

<style scoped>
	.task-title {
		font-weight: 700;
	}
</style>