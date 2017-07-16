<template>

    <div id="app">
        <h1>{title}}</h1>
        <ul>
            <li v-for="(todo,index) in todos" :id="index">
                <label for="">{{index+1}}.{{todo.value}}</label>
            </li>
        </ul>
    </div>

</template>
<style>

</style>
<script>
    export default{
        name: 'app',
        data (){
            return{
                title:'vue-tools',
                todos:[{value:"阅读一本前端开发的书",done:false},{value:"补充示例代码",done:true},{value:'写心得',done:false}]
            }

        }
    }
</script>