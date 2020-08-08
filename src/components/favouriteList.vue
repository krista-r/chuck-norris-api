<template>
  <div class="list">
    <h3>Favourite Jokes</h3>
    <ol>
        <li v-for="item in favouritesArr.slice(0, 10)" :key="item"> 
          <p>{{ item }}</p>
          <button @click="removeItem(item)">remove</button>
        </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  computed: {
    favouritesArr() {
      return this.$store.state.favouritedJoke;
    }
  },

  methods: {
    removeItem(item)
    {
      this.favouritesArr.splice(item, 1);

      // console.log(this.favouritesArr);
    }
  }
}
</script>


