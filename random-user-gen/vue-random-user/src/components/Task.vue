<template>
	<h3>{{ task.text }}</h3>
</template>

<script>
	export default {
		name: 'TaskApp',
		props: {
			task: Object,
		}
	}
</script>
