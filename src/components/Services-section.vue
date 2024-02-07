<template>
    <section>
        <div class="container">
            <h2>Scopri i nostri servizi</h2>
            <ul>
                <li v-for="(card,i) in cardsItems" v-bind:key="i">
                    <ServicesCard v-bind:src="card.src" :title="card.title" :text="card.text " />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import ServicesCard from './Services-card.vue'
export default{
  components:{ServicesCard},
  data(){
    return{
        cardsItems:[
            {
                src: '/images/boiler.png',
                title: 'Installazione ed assistenza caldaie',
                text: 'Installazione nuove caldaie, manutenzione e riparazione di impianti esistenti. Ricorda che la manutenzione annuale delle caldaie é d’obbligo per legge.'
            },
            {
                src: '/images/aircon.png',
                title: 'Installazione impianti di condizionamneto',
                text: 'Grazie alle nostre certificazioni gas, siamo abilitati all’installazione di impianti di condizionamento adatti al vostro ambiente'
            },
            {
                src: '/images/tools.png',
                title: 'Manutenzione e sanificazione impianti di condizionamento',
                text: 'La manutenzione e sanificazione degli impianti di condizionamento non vanno sottovalutate, al fine di avere delle unitá che funzionano sempre al meglio'
            },
            {
                src: '/images/radiator.png',
                title: 'Installazione e manutenzione impianti di riscaldamento',
                text: 'Cosí come la manutenzione caldaie, anche la manutenzione degli impianti di riscaldamento é obbligatoria per legge.'
            },
        ]
    }
  }
}

</script>

<style scoped>
    .container{
        @apply px-8 bg-white py-10 text-center
    }

    h2{
        @apply uppercase text-4xl text-black font-bold
    }
</style>