<template>
  <nav>
    <div class="nav-wrapper">
			<ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>Vous en avez pour {{ totalHours }} heures en tout ({{ averageHours }} heures par tâche en moyenne)</li>
      </ul>
      <a href="#" class="brand-logo"><i class="material-icons">done_all</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="critique">Tâches critiques</router-link></li>
        <li><router-link to="invisible">Tâches masquées</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
	import {Bus} from '@/Bus.js'
	import {Store} from '@/Store.js'

	export default {
		name: 'navbar',
		data() {
			return {
				tasks: Store.datas.tasks,
			}
		},
		created() {
			Bus.$on('addTask', () => {
				let $toastContent = $('<span><i class="material-icons">add_alert</i>Une nouvelle tâche a été créé</span>');
  			Materialize.toast($toastContent, 5000);
			}
			);
		},
		computed: {
			totalHours() {
				let total = 0;
				for(let i of this.tasks) {
					total += i.hours;
				}
				return total;
			},
			averageHours() {
				let aver = this.tasks.length;
				let total = 0;
				for(let i of this.tasks) {
					total += i.hours;
				}
				return Math.round(total / aver);
			}
		}
	}
</script>

<style scoped>
	nav i {
		font-size:50px;
	}
</style>