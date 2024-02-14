<template>
    <div v-for="pseduoName in $store.state.friends" :key="pseudoName.id">
        <p>{{item.id}}</p>
        <p></p>
        <p></p>
        <!-- 
            button @click="delMate('pseudoName'item.name'parameterName')"
            button @click="editMate(item.id)"
         -->
    </div>
</template>

<script>
// Export default
// data() {
// return {
// name:null
// age:null
// }}
// methods: {
// this.$store.dispatch('delFriend',name)
// editMate(id) {
// let edit = {
// id:id,
// name:this.name,
// age:this.age
// }
// this.$store.dispatch('editMate',edit)
// }
// 
// computed: {
// getNameOfData(){
// this.$store.dispatch('') Calling a function to make it run
// }
// }

// lifestyle Hook() {
// this.nameofdata
//  addFriend() {
// this.$store.dispatch('addMate',this.$data)
// }
// 
// }
// More ways??
</script>
