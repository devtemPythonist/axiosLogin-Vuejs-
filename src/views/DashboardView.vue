<script setup>
import router from '@/router';

const logout = () => {
    localStorage.removeItem('token')
    router.push('/')
}

</script>

<template>
    <div>
        <h1>Welcome to admin overview dashboard</h1>
    </div>
    <router-link :to="{name:'Home'}">Home</router-link>
    <br>
    <router-link :to="{name:'testPage'}">Test</router-link>
    <br>
    <button @click="logout">
        Log out
    </button>
</template>

<script>
</script>

<style>
</style>