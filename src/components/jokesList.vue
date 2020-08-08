<template>
  <div class="jokes-wrapper">
    <ul>
        <li v-for="item in data" :key="item.id"> 
          <p>{{ item.joke }}</p>
          <!-- <button @click="addToFavourites">Favourite</button> -->
        </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    data: Array 
  },

  methods:
  {
    addToFavourites()
    {
      console.log(this.data.id);
    }
  }
}
</script>


