<template>
    <section class="container-1" id="chisiamo">
        <p class="experience">Con oltre 4 decenni di esperienza nel settore riscaldamento e condizionamento, siamo i leader del settore....non cercare altrove.</p>
        <p>Qui sotto trovi alcuni dei marchi ed aziende con le quali abbiamo lavorato...contattaci per maggiori informazioni.
        </p>
        <ImagesSlider />
    </section>
</template>

<script>
import ImagesSlider from './Images-slider.vue'
export default{
    components:{ImagesSlider}
}
</script>

<style scoped>
.container-1{
    background-image: url('../images/background.png');
}

.container-1{
    @apply text-black py-10 flex flex-col gap-12 text-center
}

.container-1>*:not(:last-child){
    @apply px-8
}

.experience{
    @apply font-bold text-2xl md:text-3xl
}

.container-1 :nth-child(2){
    @apply text-lg md:text-xl 
}
</style>