<template>
  <div class="list">
    <h3>Jokes</h3>
    <ul>
        <li v-for="item in data" :key="item.id"> 
          <p>{{ item.joke }}</p>
          <button @click="addToFavourites(item.joke)">Favourite</button>
        </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  props: {
    data: Array
  },

  methods:
  {
    addToFavourites(jokeString) 
    {
      this.$store.state.favouritedJoke.push(jokeString);
    }
  }
}
</script>


