 <template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import app_header from '@/components/Header/'
import app_aside from '@/components/SlideBar/'
export default {
  name: 'App',
  components: {
    app_header,
    app_aside
  }
}
</script>
<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    height: 100%;
    min-width: 1024px;
    > .container {
      height: 100%;
      > .header {
        display: block;
        height: 50px;
        background-color: blue;
      }
      > .content {
        display: flex;
        height: calc(100% - 50px);
        > .aside {
          width: 100px;
          background-color: seagreen;
        }
        > .main {
          flex: 1;
          overflow: hidden;
          box-sizing: border-box;
          overflow: auto;
        }
      }
    }
  }
</style>
