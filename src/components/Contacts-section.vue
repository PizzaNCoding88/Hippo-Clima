<template>
    <section class="container-1" id="contatti">
        <p>Per un preventivo gratuito o maggiori informazioni, inviaci un messaggio utilizzando il modulo qui sotto, risponderemo al piú presto</p>
        <Form />
        <p class="copyright">&#169; Hippo Clima Srl</p>
    </section>
</template>

<script>
import Form from './Form-component.vue';
export default{
    components:{Form}
}
</script>

<style scoped>

.container-1{
    @apply  py-10 px-8 flex flex-col gap-12 text-center relative lg:py-20 lg:px-16
}
.container-1{
    background-image: url('../images/contacts-bg.webp');
    background-size: cover;
    background-position: 60%;
}

.container-1::before{
    content: "";
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    width: 100%;
    background: black;
    opacity:0.3;
}

p{
    @apply text-2xl font-semibold z-20 md:text-3xl lg:text-4xl
}

.copyright{
    @apply text-lg md:text-xl
}
</style>