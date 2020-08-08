<template>
  <div class="list">
    <h3>Favourite Jokes</h3>
    <ul>
        <li v-for="item in jokeArr" :key="item"> 
          <p>{{ item }}</p>
        </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  computed: {
    jokeArr() {
      return this.$store.state.favouritedJoke;
      // console.log(this.favouritedJoke[0]);
    }
  },

  methods:
  {

  }
}
</script>


