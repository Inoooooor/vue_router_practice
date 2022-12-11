<template>
  <div class="work_window">
    <nav>
      <router-link to="/">Zoo Entry</router-link>
      <router-link to="/squirrel">Squirrel</router-link>
      <router-link to="/dog">Dauggy</router-link>
      <router-link to="/monkey">Monkey</router-link>
      <router-link to="/fullstackers">Fullstackers</router-link>
    </nav>
    <transition name="img_changing">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style>
*, *::after, *::before {
  padding: 0;
  margin: 0;
}

html {
  font-family: Rubik Vinyl, sans-serif;
  color: white;
}

#app {
  background-color: rgb(59, 59, 59);
  height: 100vh;
  display: grid;
  grid-template: repeat(12, 1fr) / repeat(12, 1fr);
  font-size: 1.3rem;
}

.work_window {
  background-image: url(./images/texture.JPG);
  background-size: cover;
  border: 5px solid white;
  border-radius: 50px;
  grid-area: 3 / 3 / -3 / -3;
  display: grid;
  grid-template: 5% 1fr 5% / 5% 1fr 4fr 5%;
  min-width: 1100px;
}

nav {
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: ; */
}

a {
  color: white;
  font-size: 1.5em;
  text-decoration: none;
}

.img_changing-enter-active {
  animation: bounce-in 0.5s;
}
.img_changing-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
