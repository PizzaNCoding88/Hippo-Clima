<script>
import Landing from './components/Landing-section.vue'
import Services from './components/Services-section.vue'
import AboutUs from './components/Aboutus-section.vue'
import ContactsSection from './components/Contacts-section.vue'
export default{
  components:{Landing,Services,AboutUs, ContactsSection}
}
</script>

<template>
    <Landing />
    <Services />
    <AboutUs />
    <ContactsSection />
</template>

