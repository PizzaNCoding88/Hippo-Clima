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
            <ul>
                <li><a href="#contatti">Contatti</a></li>
                    <li class=""><a href="#servizi">Servizi</a></li>
                </ul>
            <div class="sidebar" :class="{ open: isOpen }">
                <ul>
                    <li class=""><a href="#servizi" v-on:click="closeSidebar">Servizi</a></li>
                    <li><a href="#contatti" v-on:click="closeSidebar">Contatti</a></li>
                </ul>
            </div>
        </header>
        <main>
            <h1>La Temperatura Perfetta Per Ogni Stagione</h1>
            <p>Il comfort su misura per te</p>
            <div class="buttons-container">
                <button type="button" class="top-btn"><a href="#contatti">Contatti</a></button>
                <button><a href="#chisiamo">Chi Siamo</a></button>
            </div>
        </main>
    </div>
</template>

<script>
export default{
    data(){
        return{
            isOpen: false,
        }
    },
    methods: {
        sidebarOpen(){
            this.isOpen = !this.isOpen
        },
        closeSidebar(){
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
    z-index: -10;
}

@media only screen and (min-width: 768px) {
    .landing::after{
        height: 100dvh;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0; 
        width: 50%;
        background: url('../images/fabric.png') ;
        background-size:cover;
        background-repeat: no-repeat;
        background-position: 45% 50%;
        opacity: 0.9;
        z-index: -10;
    }

    .landing::before{
        right:0;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 50%;
    }
    
}

header{
    @apply w-full flex flex-row justify-between items-center p-8 lg:px-16
}
.logo-container{
    @apply w-10 h-10
}

img{
    @apply w-full h-full
}

.burger-button{
    @apply w-8 h-8 flex flex-col justify-center items-end gap-1 z-20 sm:hidden
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
    @apply absolute left-0 top-0 w-full h-0 text-orange flex justify-center items-center flex-col overflow-y-hidden bg-[#272023f8] transition-all duration-[400ms] ease-in-out opacity-0 sm:hidden
}

.sidebar ul{
    @apply flex flex-col gap-24 items-center justify-center text-center text-lg font-serif font-medium w-full rounded-b-xl
}

.sidebar li{
    @apply relative rounded-xl text-3xl italic before:w-0 before:content-[''] before:h-1 before:bg-orange before:absolute before:-bottom-2 before:rounded-sm hover:before:w-full before:transition-all before:duration-[200ms]
}
.open{
    @apply h-screen transition-all duration-[400ms] ease-in-out opacity-100
}

main{
    @apply h-[calc(100vh-104px)] flex flex-col justify-center items-start text-center px-10 gap-[18vw] sm:gap-[10vw] md:text-left md:w-1/2 md:pr-5 lg:pl-16
}

h1{
    @apply uppercase text-4xl font-bold leading-tight transition-opacity lg:text-5xl
}

p{
    @apply text-2xl font-serif lg:text-3xl
}

.buttons-container{
    @apply flex flex-col w-full items-center gap-10 md:flex-row
}

main button{
    @apply w-[40%] text-base text-orange border-[1px] border-orange rounded-md py-2 cursor-pointer max-w-[185px]
}

.top-btn{
    @apply bg-orange text-black
}

header ul{
    @apply hidden sm:flex sm:flex-row gap-14 text-orange font-semibold text-xl lg:text-2xl
}

</style>