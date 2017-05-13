<template>
	<li class="collection-item"><div>{{ tsk.title }}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
</template>

<script>
	import {Store} from '@/Store.js'

	export default {
		name: 'task',
		props: ['tsk'],
		data(){
			return {
				tasks: Store.datas.tasks
			}
		}
	}
</script>