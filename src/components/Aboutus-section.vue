<template>
    <div class="container">
        <p class="experience">Con oltre 4 decenni di esperienza nel settore riscaldamento e condizionamento, siamo i leader del settore....non cercare altrove.</p>
        <p>Qui sotto trovi alcuni dei marchi ed aziende con le quali abbiamo lavorato...contattaci per maggiori informazioni.
        </p>
        <ImagesSlider />
    </div>
</template>

<script>
import ImagesSlider from './Images-slider.vue'
export default{
    components:{ImagesSlider}
}
</script>

<style scoped>
.container{
    background-image: url('../images/background.png');
}

.container{
    @apply text-black py-10 px-8 flex flex-col gap-12 text-center
}

.experience{
    @apply font-bold text-2xl
}

.container :nth-child(2){
    @apply text-lg
}
</style>