<template>
  <div id="app">
    <div class="container">
      <!-- <UserForm/> -->
      <!-- <SignUp/> -->
      <UserPage/>
    </div>
    <!-- <my-component /> -->
    <!-- <user-card /> -->
    <!-- <MyComponent/> два способа писать название комппонента-->
    <!-- <ImageCat/> -->
    <!-- <ProductList/> -->
    
  </div>
</template>

<script>
// import MyComponent from "./components/MyComponent.vue";
// import UserCard from "./components/UserCard.vue";
// import ImageCat from './components/ImageCat.vue';
// import ProductList from './components/ProductList.vue';
// import UserForm from './components/UserForm.vue';
// import SignUp from './components/SignUp.vue';
import UserPage from './components/UserPage.vue';
export default {
  name: "App",
  components: {
    // MyComponent,
    // UserCard,
    // ImageCat
    // ProductList
    // UserForm
    // SignUp
    UserPage
  },
};
</script>
