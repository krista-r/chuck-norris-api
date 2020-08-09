<template>
  <div id="app">
    <header>
      <h1>Chuck Norris Joke Generator</h1>
      <div class="button-wrapper">
        <button @click="fetchData(10)">FETCH JOKES</button>
     
        <button :class="{ active:currentState }" @click="fetchRandom">
          <span v-if="!currentState">RANDOMIZE OFF</span>
          <span v-else>RANDOMIZE ON</span>
        </button> 
      </div>
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

