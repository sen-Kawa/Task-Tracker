<template>
	<header>
		<h1>{{ title }}</h1>
		<Button text="Add Task" color="green" />
		<Button text="Update Task" color="blue" />
		<Button text="Remove Task" color="red" />
	</header>
</template>

<script>
import Button from './Button'
export default {
	name: 'HeaderApp',
	props: {
		title: {
			type: String,
			default: 'Hello',
		},
	},
	components: {
		Button
	},
}
</script>

<style scoped>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
</style>
