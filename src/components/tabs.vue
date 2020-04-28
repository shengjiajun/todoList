<template>
	<div class="nav">
		<span class="nav-left">{{counts}}  left</span>
		<span class="nav-tabs">
			<span v-for="tab in tabs"
						:key="tab"
						:class="[currentTab === tab ? 'actived' : '']"
						@click='changeTab(tab)'>
						{{tab}}
			</span>
		</span>
	</div>
</template>

<script>
	export default{
				props: {
				todolist    :{
						type    : Array,
						required: true
				},
        currentTab: {
            type    : String,
            required: true
        }
    },
		data(){
			return{
				tabs: ['all','active','completed']
			}
		},
		methods:{
			changeTab(tab){
				this.$emit('changeTab', tab)
			}
		},
		computed:{
			counts(){
				return this.todolist.filter(list => !list.completed).length
			}
		}
	}
</script>

<style lang="scss" scoped>
    .nav {
				height: 42px;
				width: 100%;
        font-weight: 100;
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        line-height: 30px;
        background: #ffffff;
        font-size: 14px;
				position: absolute;
				bottom: 0px;
        &-left,&-right,&-tabs {
            padding: 0 10px;
            box-sizing: border-box
        }
        &-left,&-right {
            width: 150px
        }
        &-left {
            text-align: left
        }
        &-right {
            text-align: right;
            cursor: pointer;
        }
        &-tabs {
            width: 200px;
            display: flex;
            justify-content: space-around;
            * {
                display: inline-block;
                padding: 0 10px;
                cursor: pointer;
                border: 1px solid rgba(175,47,47,0);
                &.actived {
                    border-color: rgba(175,47,47,0.4);
                    border-radius: 5px;
                }
            }
        }
    }
</style>