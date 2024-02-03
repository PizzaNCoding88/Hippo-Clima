<!-- <template>

    <header>
        <div class="logo-container">
            <a href="/"><img src="../images/logo.png" alt="logo" /></a>
        </div>
        <button class="burger-button" v-on:click="sidebarOpen" >
            <span :class="{ openTop: isOpen }"></span>
            <span></span>
            <span :class="{ openBottom: isOpen }"></span>
        </button>
        <Transition>
            <div class="sidebar" v-show="isOpen">
                <ul>
                    <li class=""><a href="/">Servizi</a></li>
                    <li>Contatti</li>
                </ul>
            </div>
        </Transition>
    </header>
    <main class="">

    </main>
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

.v-enter-from{
height: 0;
}
.v-leave-active {
  transition: height 1s ease-in-out;
}

.v-enter-to{
    height: 300px;
}

.v-leave-from{
    height:300px;
}
.v-leave-to {
  height: 300px;
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
    @apply inline-block bg-orange h-[3px]
}

.openTop,
.openBottom{
    @apply !w-6 duration-500 transition-all ease-in-out
}

.sidebar{ 
    @apply absolute left-0 w-full text-orange flex justify-center items-end flex-row overflow-y-hidden rounded-b-xl bg-[#27202386]
}

.sidebar ul{
    @apply flex items-center justify-center gap-[35%] text-lg font-serif font-medium pb-4 
}

.sidebar li{
    @apply border-[1px] border-orange px-2 py-[0.25px] rounded-sm
}
/* 
.open{
    @apply h-36 transition-all duration-300 ease-in-out
} */

</style> -->



<template>

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
    <main class="">

    </main>
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
    @apply absolute left-0 top-0 w-full h-0 text-orange flex justify-center items-end flex-row overflow-y-hidden rounded-b-xl bg-[#27202386] transition-all duration-300 ease-in-out
}

.sidebar ul{
    @apply flex items-center justify-center gap-[35%] text-lg font-serif font-medium pb-4 
}

.sidebar li{
    @apply border-[1px] border-orange px-2 py-[0.25px] rounded-sm
}

.open{
    @apply h-36 transition-all duration-300 ease-in-out
}

</style>