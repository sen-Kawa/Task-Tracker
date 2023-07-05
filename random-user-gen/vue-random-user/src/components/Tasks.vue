<template>
	<div v-for="(task, id) in tasks" :key="id">
		<Task :task="task" />
	</div>
</template>

<script>
	import Task from './Task'

	export default {
		name: 'TasksApp',
		props: {
			tasks: Array,
		},
		components: {
			Task,
		},
	}
</script>
