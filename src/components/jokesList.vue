<template>
  <div class="list">
    <h3>Jokes</h3>
    <ul>
        <li v-for="item in data" :key="item.id"> 
          <p v-html="item.joke">{{ item.joke }}</p>
          <button @click="addToFavourites(item.joke)">&hearts;</button>
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


