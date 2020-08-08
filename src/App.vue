<template>
  <div id="app">
    <header>
      <h1>Chuck Norris Joke</h1>
      <button @click="fetchData">Fetch Jokes</button> 
    </header>

    <div class="lists-wrapper">
      <jokes-list :data="data"></jokes-list>
      <favourites-list></favourites-list>
    </div>
  </div>
</template>

<style lang="scss">
  @import './styles/app.scss';
</style>

<script>

import JokesList from '@/components/jokesList'; 
import FavouritesList from '@/components/favouriteList'; 

export default {
  name: 'App',

  components: {
    'jokes-list': JokesList,
    'favourites-list': FavouritesList
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
    }
  }

}
</script>

