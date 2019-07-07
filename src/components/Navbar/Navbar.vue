<template>
  <div class="main-navbar">
    <div class="brand">
      <span>&lt;</span>
      <span class="name">&nbsp;Nilesh&nbsp;</span>
      <span>/&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.main-navbar {
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px 25px;
  width: 100%;
  .brand {
    font-weight: 700;
    span {
      font-size: 24px;
      color: #5918df;
      display: inline-block;
      vertical-align: middle;
    }
    .name {
      color: #fff;
      font-size: 36px;
      display: inline-block;
      vertical-align: middle;
      height: 22px;
      text-transform: uppercase;
    }
  }
}
</style>
