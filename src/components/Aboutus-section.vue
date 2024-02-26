<template>
    <section class="container-1" id="chisiamo">
        <p
        v-motion
                :initial="{opacity:0}"
                :visibleOnce="{opacity:1,
                transition:{
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    mass: 0.5,
                    delay: 250
                }}" 
        class="experience">Con oltre 4 decenni di esperienza nel settore riscaldamento e condizionamento, siamo i leader del settore....non cercare altrove.</p>
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
    background-size: cover;
}

.container-1{
    @apply text-black py-10 flex flex-col gap-12 text-center lg:py-20
}

.container-1>*:not(:last-child){
    @apply px-8 lg:px-16
}

.experience{
    @apply font-bold text-2xl md:text-3xl lg:text-4xl
}

.container-1 :nth-child(2){
    @apply text-lg md:text-xl lg:text-2xl
}

</style>