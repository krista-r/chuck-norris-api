<template>
  <div class="list">
    <h3>Favourite Jokes</h3>
    <ul>
        <li v-for="(item, index) in favourites.slice(0, 10)" :key="index"> 
          <p v-html="item">{{ item }}</p>
          <button @click="removeItem(item)">&#10006;</button>
        </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {

  data()
  {
    return{
      favourites: [],
      favs: []
    }
  },

  mounted() 
  {
    this.favourites = this.$store.state.favouritedJoke;
  },

  // computed: {
  //   favouritesArr() {
  //     return this.$store.state.favouritedJoke;
  //   }
  // },

  methods: {
    removeItem(item)
    {
      this.favourites.splice(item, 1);
    }
  }
}
</script>


