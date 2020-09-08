<template>
    <div>
        <h3>留言板</h3>
        <input type="text" v-model="msg">
        <br>
        <button @click="add_note" >发表留言</button>
        <ul  v-for="(message,index) in mlist">
            <li>  {{index+1}} {{mlist[index]}}

                <button @click="del(index)">删除</button>
            </li>
        </ul>
        <button @click="del_all">删除全部</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: function () {
            return {
                msg: "",
                mlist: [],
            }
        },
        methods: {
            add_note() {
               this.mlist.push(this.msg)
                localStorage.notebook=JSON.stringify(this.mlist)
                this.msg=''
            },
            del(index){
                this.mlist.splice(index,1)
                localStorage.notebook=JSON.stringify(this.mlist)
            },
            del_all(){
                this.mlist=[]
                this.msg=''

            }
        }
    }
</script>

<style scoped>

</style>
