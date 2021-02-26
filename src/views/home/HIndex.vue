<template>
  <div>
    <topbar/>
    <router-view/>
  </div>

</template>

<script>
import topbar from "components/content/topbar/Topbar";

export default {
  name: "hindex",
  components: {
    topbar,
  },
  methods:{

  }
}
</script>

<style scoped>

</style>