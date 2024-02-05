<template>
    <section>
        <div class="container">
            <h2>Scopri i nostri servizi</h2>
            <ServicesCard />
        </div>
    </section>
</template>

<script>
import ServicesCard from './Services-card.vue'
export default{
  components:{ServicesCard},

}

</script>

<style scoped>
    .container{
        @apply px-8 bg-white pt-8 text-center
    }

    h2{
        @apply uppercase text-4xl text-black font-bold
    }
</style>