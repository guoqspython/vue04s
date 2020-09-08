<template>
    <div>
        用户详情页：需要接受到当前要查看的用户的id--->：{{$route.params.id}}
        <br>

        <button>返回首页</button>
        <button>返回用户列表页</button>

    </div>
</template>

<script>
    export default {
        name: "UserDetail"
    }
</script>

<style scoped>

</style>
