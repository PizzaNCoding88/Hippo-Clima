<template>
    <div class="container-card">
        <!-- {{console.log(src)}} -->
        <img v-bind:src="src" alt="card-img">
       <!-- <img src=" '../images' + src" alt=""> -->
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </div>
</template>

<script>

export default{
    props: ['src','title', 'text'],
    
}
</script>

<style scoped>
    .container-card{
        @apply text-black
    }
</style>