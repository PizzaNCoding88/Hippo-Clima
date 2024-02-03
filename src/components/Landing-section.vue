<template>

    <header>
        <div class="logo-container">
            <img src="../images/logo.png" alt="logo" />
        </div>
        <div class="burger-button" v-on:click="sidebarOpen" >
            <span :class="{ openTop: isOpen }"></span>
            <span></span>
            <span :class="{ openBottom: isOpen }"></span>
        </div>
        <div class="sidebar" :class="{ open: isOpen }">
            <ul>
                <li class="z-50"><a href="/">Servizi</a></li>
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
    @apply w-10 h-10
}

img{
    @apply w-full h-full
}

.burger-button{
    @apply w-8 h-8 flex flex-col justify-center items-end gap-1
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
    @apply absolute left-0 top-0 w-full h-0 -z-10 text-orange flex justify-center items-end flex-row overflow-y-hidden bg-slate-300 rounded-b-xl
}

.sidebar ul{
    @apply z-50 flex items-center justify-center gap-[50%] text-xl font-serif pb-4
}

.open{
    @apply h-40 transition-all duration-500 opacity-40
}

</style>