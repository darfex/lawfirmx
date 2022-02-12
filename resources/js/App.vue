<template>
	<div>
		<navbar></navbar>
		<dashboard></dashboard>
	</div>
</template>

<script>
	import home from './components/home.vue';
	import navbar from './components/navbar.vue';
	import dashboard from './components/dashboard.vue';

	export default {
		components:{
			home,
			navbar,
			dashboard
		}
			
	}
</script>