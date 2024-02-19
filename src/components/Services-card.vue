<template>
    <div class="card-container">
            <img v-bind:src="src" :alt="alt">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </div>
</template>

<script>

export default{
    props: ['src','title', 'text', 'alt'],
    
}
</script>

<style scoped>
    .card-container{
        @apply text-black my-14 flex flex-col gap-6 px-4 md:bg-[rgba(0,0,0,0.35)] md:py-8 md:h-full md:my-0 md:rounded-lg lg:max-w-[460px]
    }

    .card-container h3{
        @apply uppercase text-2xl text-orange font-bold lg:text-3xl
    }

    .card-container p{
        @apply lg:text-xl
    }

    img{
        @apply mx-auto
    }
</style>