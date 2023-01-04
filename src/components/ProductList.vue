<template>
    <div class="product-list">
      <div class="flex top-information">
        <h1>Коты</h1>
        <my-input v-model="searchText" />
        {{ searchText }}
        <button>
          Найти
        </button>
      </div>
      
      <ul class="list-default flex">
        <li
          v-for="(product, index) in products"
          :key="index"
        >
          <product-card
            :title="product.title"
            :price="product.price"
            :img-url="product.imgUrl"
            :count="product.count"
            @addToBasket="addToBasket(index)"
          />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue'
  import MyInput from './MyInput.vue'
  
  export default {
    name: 'ProductList',
    components: { ProductCard, MyInput },
    data() {
      return {
        searchText: '',
        products: [
          {
            title: 'Jim',
            price: 19999,
            imgUrl: 'https://go64.ru/upload/quickly/cat-2143332_1280.jpg',
            count: 30
          },
          {
            title: 'Monako',
            price: 17199,
            imgUrl: 'https://teleprogramma.pro/sites/default/files/styles/post_738x515/public/nodes/node_19852_1653762796.jpg?itok=YLl7rrjG',
            count: 20
          },
          {
            title: 'Кварт',
            price: 10999,
            imgUrl: 'https://vctr.media/wp-content/uploads/2019/02/vctr.media-1550839222.jpg',
            count: 23
          }
        ]
      }
    },
    methods: {
      addToBasket(index) {
        console.log(index)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  li {
    margin-right: 20px;
  }
  .top-information {
    align-items: center;
    h1 {
      margin-bottom: 0;
    }
}
  </style>