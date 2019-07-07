<template>
  <div>
    <div class="main-sidebar" :class="{ active: isVisible }">
      <ul class="lists">
        <li v-for="item in sidebarList" v-bind:key="item.id">
          <router-link to>{{ item.listName }}</router-link>
        </li>
      </ul>
    </div>
    <div
      class="hamburger-menu"
      @click="slideInOut"
      :class="{ active: isVisible }"
    >
      <span></span>
      <br />
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: function() {
    return {
      isVisible: false,
      sidebarList: [
        { listName: "Home" },
        { listName: "About" },
        { listName: "Skills" },
        { listName: "Projects" },
        { listName: "Conatct Me" }
      ]
    };
  },
  methods: {
    slideInOut: function() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(to right, #5918df, #7733ff);
  height: 100vh;
  width: 100%;
  transform: translateX(-100%);
  transition: transform 0.8s ease-in-out;
  &.active {
    transform: translateX(0);
  }
  ul {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    li {
      padding: 28px 0;
      a {
        color: #fff;
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
.hamburger-menu {
  position: fixed;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  span {
    display: inline-block;
    width: 46px;
    height: 1px;
    background: linear-gradient(to right, #5918df, #7733ff);
    transition: all 0.3s linear;
  }
  &.active {
    span {
      background: linear-gradient(rgb(255, 255, 255), rgb(235, 235, 235));
      &:first-child {
        transform: rotate(45deg);
      }
      &:last-child {
        transform: translateY(-19px) rotate(-45deg);
      }
    }
  }
}
</style>
