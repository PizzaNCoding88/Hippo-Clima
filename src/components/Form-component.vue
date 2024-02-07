<template>
    <form>
        <input type="text" name="name" id="name" placeholder="Nome">
        <label for="name"></label>
        <input type="text" name="email" id="email" placeholder="email">
        <label for="email"></label>
        <textarea name="Messaggio" id="messaggio" cols="30" rows="10" placeholder="Scrivi il tuo messaggio qui..."></textarea>
        <button type="submit">Invia</button>
        <span class="decorations first">
            <span></span>
        </span>
        <span class="decorations second"><span></span></span>
        <span class="decorations third"><span></span></span>
        <span class="decorations fourth"><span></span></span>
    </form>
    
</template>

<script>
export default{}
</script>

<style scoped>
    form{
        @apply flex flex-col gap-3 p-8 z-20 bg-[#818181] relative
    }

    .decorations{
        @apply w-2 h-2 rounded-full bg-orange absolute
    }

    .decorations span{
        @apply w-[0.35rem] h-[0.35rem] rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    }

    .first{
        @apply top-2 left-2
    }

    .second{
        @apply top-2 right-2
    }

    .third{
        @apply bottom-2 left-2
    }

    .fourth{
        @apply bottom-2 right-2
    }

</style>