<template>
  <div id="app">
      <h1>Chuck Norris Joke</h1>
      <button @click="fetchData">Fetch Joke</button> 
      <ul>
        <li v-for="item in data" :key="item.id"> 
          <p>{{ item.joke }}</p>
        </li>
      </ul>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>


export default {
  name: 'App',

  data ()
  {
    return {
      data: []
    }
  },

  methods: {
    fetchData()
    {
      // console.log('fetching');
      const baseURL = 'http://api.icndb.com/jokes/random/10'
      this.$http.get(baseURL)
      .then((results) =>{
        this.data = results.data.value;

        // console.log( this.data );
      })
    }
  }

}
</script>

