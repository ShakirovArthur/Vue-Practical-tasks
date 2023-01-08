<template>
    <form class="sign-up" @submit.prevent="checkForm">
      <div class="form-group">
        <label for="login">Логин:</label>
        <input
          id="login"
          class="form-control"
          :class="form.login.$error ? 'is-invalid' : ''"
          v-model.trim="form.login"
        >
        <p v-if="form.login.$dirty && !form.login.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="form.login.$dirty && !form.login.minLength" class="invalid-feedback">
          Здесь должно быть больше 5-и символов
        </p>
      </div>
      <div class="form-group">
        <label for="login">Почта:</label>
        <input
          id="email"
          type="email"
          class="form-control"
          :class="form.email.$error ? 'is-invalid' : ''"
          v-model.trim="form.email"
        >
        <p v-if="form.login.$dirty && !form.email.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="form.login.$dirty && !form.email.email" class="invalid-feedback">
          Email неккоректный
        </p>
      </div>
      <div class="form-group">
        <label for="login">Пароль:</label>
        <input
          id="password"
          type="password"
          class="form-control"
          :class="form.password.$error ? 'is-invalid' : ''"
          v-model.trim="form.password"
        >
        <p v-if="form.login.$dirty && !form.password.required" class="invalid-feedback">
          Обязательное поле
        </p>
      </div>
      <div class="form-group">
        <label for="country">Страна проживания:</label>
        <select id="country" class="form-control" v-model="form.country">
          <option
           v-for="(country, index) in countries"
           :value="country.value"
           :key="index"
          >
            {{ country.label }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="themes">Любимые темы:</label>
        <select id="themes" class="form-control" v-model="form.favoiriteThemes" multiple>
          <option
           v-for="(theme, index) in themes"
           :value="theme.value"
           :key="index"
          >
            {{ theme.label }}
          </option>
        </select>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="notification" v-model="form.agreeWithSendEmail">
        <label class="form-check-label" for="notification">Уведомлять меня о новых курсах</label>
      </div>
      <div class="flex">
        <div class="form-check">
          <input class="form-check-input" type="radio" value="male" name="exampleRadios" id="male" v-model="form.gendere" >
          <label class="form-check-label" for="male">
            Мужчина
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" value="female" name="exampleRadios" id="female" v-model="form.gendere">
          <label class="form-check-label" for="female">
            Женщина
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
  </template>
  
  <script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, minLength, email } from '@vuelidate/validators'
  
  export default {
    setup(){
        return {v$: useVuelidate()}
    },
    data() {
      return {
        form: {
          login: '',
          email: '',
          password: '',
          country: 'Russia',
          favoiriteThemes: ['IT'],
          agreeWithSendEmail: false,
          gendere: 'male'
        },
        countries: [
          {
            label: 'Россия',
            value: 'Russia'
          },
          {
            label: 'Украина',
            value: 'Ukraine'
          },
          {
            label: 'США',
            value: 'USA'
          }
        ],
        themes: [
           {
            label: 'Технологии',
            value: 'IT'
          },
          {
            label: 'Языки',
            value: 'languages'
          },
          {
            label: 'Математика',
            value: 'mathematics'
          }
        ]
      }
    },
    validations: {
      form: {
        login: { required, minLength: minLength(5)},
        email: { required, email },
        password: { required },
      }
    },
    methods: {
      checkForm() {
        this.form.$touch()
        if (!this.form.$error) {
          console.log('Валидация прошла успешно')
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .form-control {
    width: 400px;
  }
  .form-check {
    margin-right: 10px;
  }
  button {
    margin-top: 15px;
  }
  </style>
  