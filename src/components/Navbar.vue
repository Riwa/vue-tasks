<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="hidden">Tâches critiques</router-link></li>
        <li><router-link to="hidden">Tâches masquées</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
	import {Bus} from '@/Bus.js'

	export default {
		name: 'navbar',
		created() {
			Bus.$on('addTask', () => {
				let $toastContent = $('<span><i class="material-icons">add_alert</i>Une nouvelle tâche a été créé</span>');
  			Materialize.toast($toastContent, 5000);
			}
			);
		}
	}
</script>