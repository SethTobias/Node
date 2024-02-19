<template>
  <div class="about">
    <h1>This is an Info page</h1>
    <p>
      {{frontendData}}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      frontendData: {},
      // baseURL: 'http://localhost:2701'
    };
  },
  mounted() {
    axios.get(`http://localhost:2701`)
      .then(response => {
        this.responseData = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
};
</script>