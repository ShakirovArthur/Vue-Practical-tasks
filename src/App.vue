<template>
  <div id="app">
    <!-- <my-component /> -->
    <!-- <user-card /> -->
    <!-- <MyComponent/> два способа писать название комппонента-->
    <!-- <ImageCat/> -->
    <ProductList/>
  </div>
</template>

<script>
// import MyComponent from "./components/MyComponent.vue";
// import UserCard from "./components/UserCard.vue";
// import ImageCat from './components/ImageCat.vue';
import ProductList from './components/ProductList.vue';
export default {
  name: "App",
  components: {
    // MyComponent,
    // UserCard,
    // ImageCat
    ProductList
  },
};
</script>
