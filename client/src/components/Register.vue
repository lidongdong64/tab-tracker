<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="email" placeholder="Please enter your email" autocomplete="off" v-model="email"><br>
    <input type="password" name="password" placeholder="Please enter your password" autocomplete="off" v-model="password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })

      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
