<template>
  <div class="container">
    <app_header class="header"></app_header>
    <div class="content">
      <app_aside class="aside"></app_aside>
      <main class="main">
        <transition name="router-fade" mode="out-in">
          <!-- include只有名字匹配的路由会缓存 -->
          <!--<keep-alive :include="cachedViews">-->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
  import app_header from '@/components/Header/'
  import app_aside from '@/components/SlideBar/'
  export default {
    name: 'index',
    components: {
      app_header,
      app_aside
    }
  }
</script>

<style scoped>
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
