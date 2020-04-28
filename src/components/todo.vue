<template>
	<div class="container">
		<input type="text" class="container-input" 
		autofocus placeholder="接下去要做什么?" @keyup.enter="addToodo" />
		<Item v-for="todo in todoFilter"
					:key="todo.id"
					:todo="todo"
					></Item>
		<Tab  :currentTab="filter"
					:todolist=todos
					@changeTab="changeTab"></Tab>
	</div>
</template>

<script>
	import Tab from 'c/tabs';
	import Item from 'c/item';
	
	export default{
		data(){
			return{
				todos  :[],
				filter : 'all',
				id     : 0
			}
		},
		methods:{
			addToodo(e){
				if(e.target.value.trim() == ''){
					alert('please input');
					return;
				}
				
				this.todos.unshift({
						id: this.id++,
						content: e.target.value.trim(),
						completed: false
				})
				e.target.value = ''
			},
		changeTab(tab){
			this.filter = tab
		}
		},
		components:{
			Item,
			Tab
		},
		computed:{
			todoFilter(){
				if(this.filter === 'all'){
					return this.todos
				}
				let completed = this.filter === 'completed'
				let filterlist = this.todos.filter(list => completed === list.completed);
				console.log(this.filter)
				console.log(filterlist)
				return filterlist
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
			width: 600px;
			height: 500px;
			margin: 0 auto;
			box-shadow: 0 0 5px #666666;
			background-color: white;
			position: relative;
			overflow-y: scroll;
			&-input {
					width: 100%;
					font-size: 24px;
					outline: none;
					padding: 16px;
					border: none;
					box-sizing: border-box
			}
	}
</style>
