<template>
	<li class="collection-item"><div><span class="task-title">{{ tsk.title }}</span><br><span>ETA : {{ tsk.hours }} heures</span><br><span>Priorité : {{ tsk.criticality }}</span><a @click="deleteTask(tsk)" class="btn-floating btn-large waves-effect waves-light secondary-content"><i class="material-icons">delete</i></a></div></li>
</template>

<script>
	import {Store} from '@/Store.js'
	import {Bus} from '@/Bus.js'

	export default {
		name: 'task',
		props: ['tsk'],
		data(){
			return {
				tasks: Store.datas
			}
		},
		methods: {
			deleteTask(item) {
				Store.datas.counter += 1;
				console.log(Store.datas.counter);
				if(Store.datas.counter >= 3) {
					Bus.$emit('alert3');
				}
				console.log(item);
				this.tasks.tasks.splice(this.tasks.tasks.indexOf(item), 1);
			}
		}
	}
</script>

<style scoped>
	.task-title {
		font-weight: 700;
	}
</style>