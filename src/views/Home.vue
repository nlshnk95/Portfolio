<template>
  <div class="home">
    <Sidebar />
    <Navbar />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "home",
  components: {
    Sidebar,
    Navbar
  }
};
</script>
