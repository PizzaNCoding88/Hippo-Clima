<template>

    <header>
        <div class="logo-container">
            <img src="../images/logo.png" alt="logo" />
        </div>
        <div class="burger-button">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<script>
export default{}
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
</style>