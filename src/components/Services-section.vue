<template>
    <section>
        <div class="container-1" id="servizi">
            <h2>Scopri i nostri servizi</h2>
            <ul>
                <li v-for="(card,i) in cardsItems" v-bind:key="i" 
                v-motion
                :initial="{opacity:0, y:200}"
                :visibleOnce="{opacity:1, y:0,
                transition:{
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    mass: 0.5,
                }}"
                >
                    <ServicesCard v-bind:src="card.src" :title="card.title" :text="card.text" :alt="card.alt" />
                </li>
            </ul>
        </div>
    </section>
</template>
<!-- <template>
    <section>
        <div class="container-1" id="servizi">
            <h2>Scopri i nostri servizi</h2>
            <ul>
                <li v-for="(card,i) in cardsItems" v-bind:key="i" v-motion-slide-visible-once-bottom>
                    <ServicesCard v-bind:src="card.src" :title="card.title" :text="card.text" :alt="card.alt" />
                </li>
            </ul>
        </div>
    </section>
</template> -->

<script>
import ServicesCard from './Services-card.vue'
export default{
  components:{ServicesCard},
  data(){
    return{
        cardsItems:[
            {
                src: '/images/boiler.png',
                alt: 'boiler',
                title: 'Installazione ed assistenza caldaie',
                text: 'Installazione nuove caldaie, manutenzione e riparazione di impianti esistenti. Ricorda che la manutenzione annuale delle caldaie é d’obbligo per legge.'
            },
            {
                src: '/images/aircon.png',
                alt: 'aircon',
                title: 'Installazione impianti di condizionamento',
                text: 'Grazie alle nostre certificazioni gas, siamo abilitati all’installazione di impianti di condizionamento adatti al vostro ambiente'
            },
            {
                src: '/images/tools.png',
                alt: 'tools',
                title: 'Manutenzione e sanificazione impianti di condizionamento',
                text: 'La manutenzione e sanificazione degli impianti di condizionamento non vanno sottovalutate, al fine di avere delle unitá che funzionano sempre al meglio'
            },
            {
                src: '/images/radiator.png',
                alt: 'radiator',
                title: 'Installazione e manutenzione impianti di riscaldamento',
                text: 'Cosí come la manutenzione caldaie, anche la manutenzione degli impianti di riscaldamento é obbligatoria per legge.'
            },
        ]
    }
  }
}

</script>

<style scoped>
    .container-1{
        @apply px-8 bg-white py-10 text-center lg:px-16 lg:py-20
    }

    .container-1{
        background-image: url('../images/white-brick.webp');
        background-size: cover;        
    }

    h2{
        @apply uppercase text-4xl text-black font-bold
    }

    .container-1 ul{
        @apply md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:mt-10 md:justify-items-center lg:gap-10 lg:max-w-[80%] lg:mx-auto xl:max-w-[75%]
    }
</style>