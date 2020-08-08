<template>
  <div id="app">
      <h1>Chuck Norris Joke</h1>
      <button @click="fetchData">Fetch Jokes</button> 
      
      <jokes-list :data="this.data"></jokes-list>
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

import JokesList from '@/components/jokesList'; 
export default {
  name: 'App',

  components: {
    'jokes-list': JokesList
  },

  data ()
  {
    return {
      data: []
    }
  },

  methods: {
    fetchData()
    {
      const baseURL = 'http://api.icndb.com/jokes/random/10'
      this.$http.get(baseURL)
      .then((results) =>{
        this.data = results.data.value;
      })
    },

    addToFavourites()
    {
      var id = this.data.id;
      console.log(id);

    }
  }

}
</script>

