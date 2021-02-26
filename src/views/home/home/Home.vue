<template>
  <el-container>
    <el-header height="150%">
      <div>
        <Search/>
      </div>
      <el-divider></el-divider>
    </el-header>
    <el-main>
      <div>
        <Index/>
<!--        <Carousel/>-->
      </div>
      <el-divider></el-divider>
      <div>
        <Recommend/>
      </div>
      <div>
        <Recommend>
          <h3 class="title" slot="title">新品上架</h3>
        </Recommend>
      </div>
      <div>
        <Recommend>
          <h3 class="title" slot="title">猜你喜欢</h3>
        </Recommend>
      </div>
    </el-main>
    <el-footer>

    </el-footer>
  </el-container>



</template>

<script>
import Search from 'components/content/search/Search';
//import Carousel from "views/home/home/carousel/Carousel";
import Index from "views/home/home/CarouselModules/Index"
import Recommend from "components/content/goods/Recommend";
export default {
name: "Home",
  components:{
    Search,
    //Carousel,
    Index,
    Recommend
  }
}
</script>

<style>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>