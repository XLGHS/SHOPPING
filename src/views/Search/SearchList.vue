<!--  -->
<template>
  <div class="searchlist">
    <Head title="搜索结果" :left="left" :right="right" />
    <SearchList :lists="searchlist" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SearchList from "@/components/List.vue";
import Head from "@/components/Head.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    SearchList,
    Head,
  },
  computed: {
    searchlist() {
      return this.$store.state.searchList;
    },
  },
  data() {
    //这里存放数据
    return {
      left: true,
      right: false,
    };
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.$store.state.searchList);
  },
};
</script>
<style>
</style>