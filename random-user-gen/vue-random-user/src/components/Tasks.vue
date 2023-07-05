<template>
	<div v-for="(task, id) in tasks" :key="id">
		<Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
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
		emits: ['delete-task', 'toggle-reminder'],
	}
</script>
