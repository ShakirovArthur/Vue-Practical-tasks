<template>
  <div class="root">
    <label>
      Введите email:
      <input type="email" :value="email" @input="emailInput" />
    </label>
    <label>
      Введите пароль:
      <input type="password" :value="password" @input="passwordInput" />
    </label>
    email: {{ email }} password: {{ password }}
    Кол-во продуктов:
    <button @click="addCount">+</button>
    <input type="text" :value="count" />
    <button @click="removeCount">-</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      email: "example@mail.ru",
      password: "12345",
      count: 0,
    };
  },
  methods: {
    emailInput(e) {
      this.email = e.target.value;
    },
    passwordInput(e) {
      this.password = e.target.value;
    },
    addCount() {
      this.count++;
    },
    removeCount() {
      this.count--;
    },
  },
};
</script>
