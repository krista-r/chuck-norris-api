<template>
  <div id="app">
    <header>
      <h1>Chuck Norris Joke</h1>
      <button @click="fetchData(10)">Fetch Jokes</button>
     
      <button @click="fetchRandom">
        <span v-if="!currentState">Off</span>
        <span v-else>On</span>
      </button> 
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
      data: [],
      currentState: false,
      timer: null
    }
  },

  methods: {
    fetchRandom()
    {
      this.currentState = !this.currentState;

      if( !this.timer )
      {
        this.timer = setInterval(() => this.fetchData(1), 5000);
      }else{
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    fetchData(n)
    {
      const baseURL = 'http://api.icndb.com/jokes/random/' + n
      this.$http.get(baseURL)
      .then((results) =>{
        const response = results.data.value
        if(response.length === 1){
          this.$store.state.favouritedJoke.push(response[0].joke);
        }else{
          this.data = response;
        }
      })
    }
  }

}
</script>

