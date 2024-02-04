<template>

    <div class="landing">
        <header>
            <div class="logo-container">
                <a href="/"><img src="../images/logo.png" alt="logo" /></a>
            </div>
            <button class="burger-button" v-on:click="sidebarOpen" >
                <span :class="{ openTop: isOpen }"></span>
                <span></span>
                <span :class="{ openBottom: isOpen }"></span>
            </button>
            <div class="sidebar" :class="{ open: isOpen }">
                <ul>
                    <li class=""><a href="/">Servizi</a></li>
                    <li>Contatti</li>
                </ul>
            </div>
        </header>
        <main>
            <h1>La Temperatura Perfetta Per Ogni Stagione</h1>
            <p>Il comfort su misura per te</p>
            <button class="top-btn">Contatti</button>
            <button>Chi Siamo</button>
        </main>
        <section class="h-screen"></section>
    </div>
</template>

<script>
export default{
    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        sidebarOpen(){
            this.isOpen = !this.isOpen
        }
    },
}
</script>

<style scoped>
/* .landing{
    @apply bg-bgImage
} */

.landing{
    @apply h-[100dvh]
}
.landing::before{
    height: 100dvh;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0; 
    width: 100%;
    background: url('../images/landing-bg.webp') ;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: 45% 50%;
    opacity: 0.2;
}

header{
    @apply w-full flex flex-row justify-between items-center p-8
}
.logo-container{
    @apply w-10 h-10 z-20
}

img{
    @apply w-full h-full
}

.burger-button{
    @apply w-8 h-8 flex flex-col justify-center items-end gap-1 z-20
}

.burger-button :first-child{
    @apply w-4
}
.burger-button :nth-child(2){
    @apply w-6
}

.burger-button :nth-child(3){
    @apply w-8
}

span{
    @apply inline-block bg-orange h-[3px] duration-500 transition-all ease-in-out
}

.openTop,
.openBottom{
    @apply !w-6 duration-500 transition-all ease-in-out
}

.sidebar{ 
    @apply absolute left-0 top-0 w-full h-0 text-orange flex justify-center items-end flex-row overflow-y-hidden bg-[#27202386] transition-all duration-300 ease-in-out opacity-0
}

.sidebar ul{
    @apply flex items-center justify-center text-center text-lg font-serif font-medium w-full 
    rounded-b-xl
}

.sidebar li{
    @apply bg-orange text-black w-full rounded-xl
}


.open{
    @apply h-36 transition-all duration-300 ease-in-out opacity-100
}

main{
    @apply h-[calc(100vh-104px)] flex flex-col justify-center items-center text-center px-10 gap-[18vw]
}

h1{
    @apply uppercase text-4xl font-bold leading-tight
}

p{
    @apply text-2xl font-semibold font-serif
}

main button{
    @apply w-[40%] text-base text-orange border-[1px] border-orange rounded-md py-2 cursor-pointer
}

.top-btn{
    @apply bg-orange text-black
}

</style>