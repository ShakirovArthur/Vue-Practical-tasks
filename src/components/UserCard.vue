<template>
  <div class="user-card">
    <h1>Какой то текст</h1>
    <div class="main-information">
      <div class="info">
        <h2>{{ getAuthorFullName }}</h2>
        <strong>Какая то профессия</strong>
        <ul>
          <li>Чему то учу</li>
          <li>какой то текст(x2)</li>
          <li>какой то текст (x3)</li>
        </ul>
      </div>
    </div>
    <p>Участников: {{ users.length }}</p>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ `${index + 1} ${getFullName(user)}` }}
      </li>
      <!-- <li v-for="(value,key,index) in users[0]" 
            :key="index">
            {{ value }}
            </li> -->
    </ul>
    <button type="button" @click="currentPage--">Prev</button>

    <button
      v-for="page in pages"
      :key="page"
      type="button"
      @click="currentPage = page"
    >
      {{ page }}
    </button>

    <button type="button" @click="currentPage++">Next</button>

    <p>Страница: {{ currentPage }} из {{ pages }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      firstName: "Артур",
      secondName: "Радикович",
      lastName: "Шакиров",
      users: [
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
      ],
      pages: 3,
      currentPage: 1,
    };
  },
  computed: {
    getAuthorFullName() {
      return `${this.firstName}  ${this.secondName}  ${this.lastName}`.toUpperCase();
    },
  },
  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.secondName} ${user.lastName}`;
    },
    loadUser(page) {
      console.log(`Загрузка пользователей страница ${page}`);
    },
  },
  watch: {
    currentPage(page) {
      this.loadUser(page);
    },
  },
};
</script>

<style lang="css" scoped>
.user-card {
  margin-top: 40px;
}
.info {
  margin-left: 50px;
}
h2 {
  margin-bottom: 14px;
}
</style>
