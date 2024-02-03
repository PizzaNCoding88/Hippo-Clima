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
    @apply inline-block bg-orange h-[3px]
}

.openTop,
.openBottom{
    @apply !w-6 duration-500 transition-all ease-in-out
}

.sidebar{ 
    @apply absolute left-0 top-0 w-full h-0 text-orange flex justify-center items-end flex-row overflow-y-hidden rounded-b-xl
}

.sidebar ul{
    @apply flex items-center justify-center gap-[35%] text-lg font-serif font-medium pb-4
}

.sidebar li{
    @apply border-[1px] border-orange px-3 py-1 rounded-xl
}

.open{
    @apply h-40 transition-all duration-500
}

</style>