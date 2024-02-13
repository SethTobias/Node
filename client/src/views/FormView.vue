<template>
  <div class="form">
    <form action="">

      <input 
      placeholder="Your Name"
      type="text"
      name="Name"
      required
      >
      <input 
      placeholder="Your Age"
      type="number"
      name="Name"
      required
      >

      <input 
      placeholder="Your Email"
      type="Email"
      name="Email"
      required
      >
      <input 
      placeholder="Your Password"
      type="password"
      name="Password"
      required
      >

<button type="submit">Submit</button>

    </form>
  </div>
</template>

<style scoped>
   .form form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;  
    align-content: center;
    justify-content: space-around ;
    height: 250px;
    width: 250px;
  }
</style>

<script>

</script>
