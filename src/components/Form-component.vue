<template>
    <form>
        <input type="text" name="name" id="name" placeholder="Nome">
        <label for="name"></label>
        <input type="text" name="email" id="email" placeholder="Email">
        <label for="email"></label>
        <textarea name="Messaggio" id="messaggio" cols="30" rows="10" placeholder="Scrivi il tuo messaggio qui..."></textarea>
        <button type="submit"></button>
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
        @apply flex flex-col gap-3 p-8 z-20 bg-[#818181] relative md:w-[550px] md:mx-auto
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
    
    input, textarea{
        @apply bg-[#D9D9D9] rounded-md px-3 text-[#818181]
    }

    textarea{
        @apply py-2
    }

    input{
        @apply py-1
    }

    #name::placeholder, #email::placeholder, textarea::placeholder{
        @apply text-[#818181] pl-8
    }

    textarea::placeholder{
        @apply !pl-0
    }

    #name::placeholder, #email::placeholder{
        background-repeat: no-repeat;
        background-size: 7%;
        background-position: 0% 50%;
    }

    #name::placeholder{
        background-image: url('../images/user-icon.png');
        background-size: contain;
    }
    
    #email::placeholder{
        background-image: url('../images/email-icon.png');
        background-size: contain;
    }

    button{
        @apply bg-orange w-[45%] mx-auto text-black py-4 rounded-md font-medium relative max-w-[130px]
    }

    button::before{
        content: 'Invia';
        position: absolute;
        left: 25%;
        top: 50%;
        transform: translateY(-50%);
    }

    button{
        background-image: url('../images/send-icon.png');
        background-repeat: no-repeat;
        background-position: 90% 50%;
    }
</style>