<template>
    <div class="product-card">
        <img :src="imgUrl"
        >
        <div class="product-card__info">
            <h2>{{ title }}</h2>
            <p class="price">{{ price }}</p>
            <p class="count">Доступно: {{ count }}шт</p>
            <button type="button" @click="addToBasket">Добавить в корзину</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        title: {
            type: String,
            validator(value){
                return value.length < 20
            }
        },
        price: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String,
            default: 'https://avatars.dzeninfra.ru/get-zen_doc/195447/pub_5da9d9b8ba281e00b00e791e_5da9daf03d873600ad154a61/scale_1200'
        },
        count: {
            type: Number,
            default: 0
        }
    },
    methods: {
        addToBasket(){
            this.$emit('addToBasket')
        }
    }
    
}
</script>

<style lang="scss" scoped>
.product-card {
  border: 1px solid rgb(211, 211, 211);
  padding: 20px 15px;
  &__info {
    margin-top: 20px;
    h2, .price {
      font-weight: 500;
    }
    .count {
      color: rgb(143, 143, 143);
    }
    button {
      background-color: rgb(221, 56, 56);
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 14px;
      display: block;
      cursor: pointer;
      margin-top: 20px;
    }
  }
}
</style>
