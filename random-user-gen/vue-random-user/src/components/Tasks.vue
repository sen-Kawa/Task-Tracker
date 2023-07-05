<template>
	<div v-for="(task, id) in tasks" :key="id">
		<h3>{{ task.text }}</h3>
	</div>
</template>

<script>
	export default {
		name: 'TasksApp',
		props: {
			tasks: Array,
		}
	}
</script>
