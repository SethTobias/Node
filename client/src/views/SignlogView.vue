<template>
  <form action="">
    <h1>Sign Up/Log In Page:</h1>
    <input placeholder="Your Name" type="text" name="Name" v-model="name" required />
    <input placeholder="Your Password" type="text" name="Password" v-model="Password" required />
    <div class="form-buttons">
      <button type="submit" @click="Signup">Sign Up</button>
      <button type="submit" @click="Login()">Log In</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
 return {
 name:null,
 password:null,
 }
    },
    // Passing as parameter/arguments will be when we use methods
    methods: {

    },
    // One time changes
    computed: {
        signup() {
            this.$store.dispatch('signup',this.$data)
        }
    }
}
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
</script>

<style scoped>
form {
  /*  */
  color: aliceblue;
  /*  */
  background: darkcyan;
  /*  */

  /*  */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  /*  */
  margin: 0 auto;
  padding: 10px;
  /*  */

  /*  */
  height: 300px;
  width: 25%;
}

.form-buttons {
  /*  */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.form-buttons button {
  /*  */
  width: 100px;
  height: 50px;
  /*  */
  border: 5px outset aqua;
  border-radius: 20px;
  /*  */
  background: rgb(255, 255, 0);
}
.form-buttons button:hover {
  /*  */
  border: 5px inset rgb(255, 255, 0);
  /*  */
  background: aqua;
}
</style>
