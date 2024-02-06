<template>
    <div class="card-container">
            <img v-bind:src="src" alt="card-img">
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
    .card-container{
        @apply text-black my-14 flex flex-col gap-6 px-4
    }

    .card-container h3{
        @apply uppercase text-2xl text-orange font-bold
    }

    img{
        @apply mx-auto
    }
</style>