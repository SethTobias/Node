<template>
  <div class="about">
    <h1>Login Bru:</h1>
    <input
      type="email"
      placeholder="Email"
      name="Email"
      required
      v-model="email"
    />

    <input
      type="password"
      placeholder="Password"
      name="Password"
      required
      v-model="password"
    />

    <button @click="submitData()">Log in</button>
  </div>
</template>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
}

input {
  border: none;
  border-bottom: 6px solid aqua;
  border-radius: 2px;
}
</style>
<script>
export default {
  data() {
    return {
      email: "hello@bye.com",
      password: "1234567890",
    };
  },
  methods: {
    submitData(){
      console.log(this.email),
      console.log(this.password),
      console.log(this.$data),

    this.$store.dispatch('loign',this.$data)
    }
  }
};
</script>
