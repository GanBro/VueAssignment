
<!-- HomePage.vue -->
<template>
  <div class="home">
    <div class="page-container">
      <Navbar />
      <el-carousel :interval="5000" height="100vh" arrow="always" class="carousel-container" motion-blur>
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <div class="fullscreen-div">
            <img :src="item.image" alt="Image"/>
          </div>
          <!-- 添加一个包含大字的div -->
          <div class="text-container">
            <div class="big-text1">
              {{ item.title }}
            </div>
            <div class="big-text2">
              {{ item.subtitle }}
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="content-container">
        <div class="news-header">新闻 · 政务</div>
        <el-row :gutter="20">
          <el-col :span="13">
            <div class="news-section">
              <h3>景区新闻</h3>
              <ul>
                <li v-for="(news, index) in newsList" :key="index">
                  <span>{{ news.title }}</span>
                  <span>{{ news.date }}</span>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="announcement-section">
              <h3>景区公告</h3>
              <ul>
                <li v-for="(announcement, index) in announcements" :key="index">
                  <span>{{ announcement.title }}</span>
                  <span>{{ announcement.date }}</span>
                </li>
              </ul>
            </div>
            <div class="visitor-stats" style="margin-top: -15px">
              <ul>
                <li v-for="(stat, index) in visitorStats" :key="index">
                  <span>{{ stat.title }}</span>
                  <span>{{ stat.date }}</span>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <!-- 新增部分 -->
        <el-row :gutter="0" class="special-section">
          <el-col :span="15">
            <el-row :gutter="0">
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special1.png" alt="九寨沟世界自然遗产地APP">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special2.png" alt="第十八届国际冰瀑旅游节">
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special3.png" alt="二十大专题">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special4.png" alt="日寨文化节">
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="0">
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special5.png" alt="阿坝州全域旅游">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="special-item">
                  <img src="@/assets/首页/special6.png" alt="云游九寨实景景观直播">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="special-item">
                  <img src="@/assets/首页/special7.png" alt="更多专题...">
                </div>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="9">
            <el-row>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special8.png" alt="书记信箱">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special9.png" alt="局长信箱">
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special10.png" alt="旅游咨询">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special11.png" alt="旅游投诉">
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special12.png" alt="游客意见调查表">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="special-item">
                  <img src="@/assets/首页/special13.png" alt="游客满意度调查">
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>

      <el-row>
        <el-col :span="8" class="custom-text" style="margin-left: 50px">
          视频
          <img src="@/assets/首页/视频.png" alt="视频" style="height: 70%;width: 80%">
        </el-col>
        <el-col :span="15" class="custom-text">
          热点资讯
          <el-carousel :interval="5000" indicator-position="none" motion-blur>
            <el-carousel-item v-for="item in items1" :key="item.id">
              <img :src="item.src" :alt="item.alt" style="height: 100%;">
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>

      <el-row class="news-header" style="margin-left: 42%">
        旅行 · 服务
      </el-row>

      <el-row>
        <img src="@/assets/首页/旅行服务.png" style="margin-left: 10%; width: 80%">
      </el-row>

    </div>
    <el-backtop :right="100" :bottom="100" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '@/components/AppNavbar.vue';
import image1 from '@/assets/首页/春深似海.png';
import image2 from '@/assets/首页/一碧千里.png';
import image3 from '@/assets/首页/碧水微澜.png';
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppFooter,
    Navbar,
  },
  data() {
    return {
      items: [
        {
          image: image1,
          title: '春深似海',
          subtitle: '纸条发芽，花开遍地，万物在春风中摇曳生长。',
        },
        {
          image: image2,
          title: '一碧千里',
          subtitle: '绿意盎然的盛夏，谱写一场夏天的故事。',
        },
        {
          image: image3,
          title: '碧水微澜',
          subtitle: '湛蓝的水，青翠的树，山中画，画中意，犹如仙境。',
        },
      ],
      items1: [
        { id: 1, src: "src/assets/首页/热点资讯1.png", alt: "热点资讯1" },
        { id: 2, src: "src/assets/首页/热点资讯2.png", alt: "热点资讯2" },
        { id: 3, src: "src/assets/首页/热点资讯3.png", alt: "热点资讯3" },
      ],
    };
  },
  computed: {
    ...mapState({
      newsList: state => state.newsList,
      announcements: state => state.announcements,
      visitorStats: state => state.visitorStats,
      specialItems: state => state.specialItems,
    }),
  },
};
</script>

<style>
.home {
  position: relative; /* 确保父容器有相对定位或绝对定位 */
  min-height: 100vh; /* 确保内容高度至少为视口高度，以便页脚可以在底部 */
  padding-bottom: 360px; /* 为页脚预留空间，避免内容覆盖 */
}
.page-container {
  position: relative;
  width: 100vw;
  overflow-y: auto; /* 允许垂直滚动 */
  overflow-x: hidden; /* 禁止水平滚动 */
}

.carousel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* 确保轮播图占满视口 */
  overflow-x: hidden; /* 禁止水平滚动 */
}

.fullscreen-div {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.fullscreen-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10%;
  padding-top: 10%; /* 调整这个值来调高文字位置 */
  pointer-events: none; /* 确保文字不会影响用户交互 */
}

.big-text1 {
  font-size: 5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.big-text2 {
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  margin-top: 1rem;
}

.content-container {
  margin: auto 80px;
  padding: 20px;
  overflow-x: hidden; /* 禁止水平滚动 */
}

.news-header {
  font-family: 'Muli', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 36px;
  color: #666666;
  line-height: 54px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0);
  text-align: center; /* 使文字居中 */
  margin-bottom: 20px; /* 增加下边距 */
}

.news-section, .announcement-section, .visitor-stats {
  font-family: 'Muli', sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微雅黑;
  font-size: 16px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  line-height: 24px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: left;
  padding: 20px;
}

.news-section {
  background-color: rgb(39, 159, 186);
}

.announcement-section {
  background-color: #f5a623;
  margin-bottom: 10px; /* 增加下边距 */
}

.visitor-stats {
  background-color: #f56342;
  margin-top: -20px; /* 调整这个值以匹配左侧高度 */
}

.news-section h3, .announcement-section h3, .visitor-stats h3 {
  margin-bottom: 10px;
}

.news-section ul, .announcement-section ul, .visitor-stats ul {
  list-style: none;
  padding: 0;
}

.news-section li, .announcement-section li, .visitor-stats li {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

/* 新增部分 */
.special-section {
  margin-top: 20px;
}

.special-item {
  text-align: center;
  padding: 1px;
  border-radius: 5px;
}

.special-item img {
  width: 100%;
  height: auto;
}

.special-item p {
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
}
.custom-text {
  font-family: muli, sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 24px;
  color: #666666;
  background-color: rgba(0, 0, 0, 0);
  line-height: 60px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 700;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(102, 102, 102);
  text-align: center;
  text-indent: 0px;
}

.custom-text img {
  display: block;
  margin: 0 auto;
}
</style>
