<template>
  <div id="app">
    <!-- <my-component /> -->
    <!-- <user-card /> -->
    <!-- <MyComponent/> два способа писать название комппонента-->
    <ImageCat/>
  </div>
</template>

<script>
// import MyComponent from "./components/MyComponent.vue";
// import UserCard from "./components/UserCard.vue";
import ImageCat from './components/ImageCat.vue';
export default {
  name: "App",
  components: {
    // MyComponent,
    // UserCard,
    ImageCat
  },
};
</script>
