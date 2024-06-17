<template>
  <div class="blue-background">
    <div class="image-container">
      <figure class="image-figure">
        <img src="@/assets/标志景点/树正沟景点.png" alt="树正沟景点" class="image">
      </figure>
    </div>

    <!-- 第一个轮播图 -->
    <div class="carousel">
      <i class="fa fa-chevron-left carousel-arrow left-arrow" aria-hidden="true" @click="prevSlide('first')"></i>
      <div class="carousel-container">
        <div v-for="(card, index) in visibleCards1" :key="index" class="carousel-card">
          <figure class="image-figure">
            <img :src="card.image" :alt="card.title" class="image">
          </figure>
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <a href="#" class="details-link">详细</a>
          </div>
        </div>
      </div>
      <i class="fa fa-chevron-right carousel-arrow right-arrow" aria-hidden="true" @click="nextSlide('first')"></i>
    </div>
    <br>

    <div class="image-container">
      <figure class="image-figure">
        <img src="@/assets/标志景点/则查洼沟景点.png" alt="则查洼沟景点" class="image">
      </figure>
    </div>

    <!-- 第二个轮播图 -->
    <div class="carousel">
<!--      <i class="fa fa-chevron-left carousel-arrow left-arrow" aria-hidden="true" @click="prevSlide('second')"></i>-->
      <div class="carousel-container">
        <div v-for="(card, index) in visibleCards2" :key="index" class="carousel-card">
          <figure class="image-figure">
            <img :src="card.image" :alt="card.title" class="image">
          </figure>
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <a href="#" class="details-link">详细</a>
          </div>
        </div>
      </div>
<!--      <i class="fa fa-chevron-right carousel-arrow right-arrow" aria-hidden="true" @click="nextSlide('second')"></i>-->
    </div>
    <br>

    <div class="image-container">
      <figure class="image-figure">
        <img src="@/assets/标志景点/日则沟景点.png" alt="日则沟景点" class="image">
      </figure>
    </div>

    <!-- 第三个轮播图 -->
    <div class="carousel">
      <i class="fa fa-chevron-left carousel-arrow left-arrow" aria-hidden="true" @click="prevSlide('third')"></i>
      <div class="carousel-container">
        <div v-for="(card, index) in visibleCards3" :key="index" class="carousel-card">
          <figure class="image-figure">
            <img :src="card.image" :alt="card.title" class="image">
          </figure>
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <a href="#" class="details-link">详细</a>
          </div>
        </div>
      </div>
      <i class="fa fa-chevron-right carousel-arrow right-arrow" aria-hidden="true" @click="nextSlide('third')"></i>
    </div>
    <br>

  </div>


</template>

<script>
import 卧龙海 from '@/assets/标志景点/卧龙海.png';
import 火花海 from '@/assets/标志景点/火花海.png';
import 老虎海 from '@/assets/标志景点/老虎海.png';
import 双龙海 from '@/assets/标志景点/双龙海.png';
import 树正寨 from '@/assets/标志景点/树正寨.png';
import 树正瀑布 from '@/assets/标志景点/树正瀑布.png';
import 树正群海 from '@/assets/标志景点/树正群海.png';
import 犀牛海 from '@/assets/标志景点/犀牛海.png';
import 盆景滩 from '@/assets/标志景点/盆景滩.png';
import 芦苇海 from '@/assets/标志景点/芦苇海.png';
import 长海 from '@/assets/标志景点/长海.png';
import 季节海 from '@/assets/标志景点/季节海.png';
import 五彩池 from '@/assets/标志景点/五彩池.png';
import 芳草海 from '@/assets/标志景点/芳草海.png';
import 原始森林 from '@/assets/标志景点/原始森林.png';
import 珍珠滩 from '@/assets/标志景点/珍珠滩.png';
import 珍珠滩瀑布 from '@/assets/标志景点/珍珠滩瀑布.png';
import 诺日朗瀑布 from '@/assets/标志景点/诺日朗瀑布.png';
import 诺日朗群海 from '@/assets/标志景点/诺日朗群海.png';
import 镜海 from '@/assets/标志景点/镜海.png';
import 孔雀河道 from '@/assets/标志景点/孔雀河道.png';
import 天鹅海 from '@/assets/标志景点/天鹅海.png';
import 箭竹海 from '@/assets/标志景点/箭竹海.png';
import 熊猫海 from '@/assets/标志景点/熊猫海.png';
import 熊猫海瀑布 from '@/assets/标志景点/熊猫海瀑布.png';
import 五花海 from '@/assets/标志景点/五花海.png';

export default {
  data() {
    return {
      currentSlide1: 0,
      currentSlide2: 0,
      currentSlide3: 0,
      cards1: [
        {
          title: "卧龙海",
          description: "海拔2220 米，长约253 米、宽2255 米、水深24 米，水底有条乳黄色的钙华堤埂，外形像沉卧在水中的巨龙。湖面平静时，透过清澈的湖水，卧龙似沉睡在水底；微风吹过湖面泛起涟漪，龙身仿佛在蠕动。风稍强时，湖面波浪起伏，卧龙像被惊醒，摇头摆尾；风强时，湖面瞬间破碎，卧龙刹时腾空而去，无影无踪。",
          image: 卧龙海
        },
        {
          title: "老虎海",
          description: "海拔2298 米，长310 米，宽194 米，深23 米。深秋季节，彩林倒映在清澈的湖水中，斑驳陆离，犹如斑斓的虎纹。深秋季节，湖岸山上层林尽染，姹紫嫣红的林木倒映在清澈的湖水中，犹如老虎身上斑斓的虎纹。",
          image: 老虎海
        },
        {
          title: "双龙海",
          description: "双龙海海拔2200 米，长290 米、宽247 米、水深9 米，透过晶莹的湖水，可见湖中有两条带状的生物钙华堤埂隐藏于水底，湖堤上部为钙华，下部为冰碛物，宛如两条蛟龙，似动似静。",
          image: 双龙海
        },
        {
          title: "树正寨",
          description: "树正寨是坐落在树正沟内的藏羌村落，村寨后有一座海拔4200米的达戈男神山，面对树正群海。寨内建有九宝莲花菩提塔，它们代表九个藏族村寨团结、祥和、幸福。这里曾建设民族文化村，可以观赏九寨沟藏式的建筑风格、彩绘及藏民的服饰，体验藏民的日常生活，感受藏民的衣、食、住、行。",
          image: 树正寨
        },
        {
          title: "火花海",
          description: "2017年九寨沟7.0级地震使火花海出水口堤坝崩塌，形成长40米、宽12米、深15米的决口，湖泊景观消失，发育裂缝100余条，裂缝最长50m、宽1m、深6.9 m。经反复论证，科研人员以震损钙华、落石、糯米灰浆等生态材料，修复了坝体、裂缝，防治了次生灾害，恢复了湖泊景观。",
          image: 火花海
        },
        {
          title: "树正瀑布",
          description: "树正瀑布海拔2295m，高11m，宽62m。瀑布呈向前凸起的圆弧状，水流多级跌落。由首尾相接的众多飞瀑组成，堤埂上的灌木，傲立于激流，长年经受流水的冲击，风姿绰约，形成特殊的植物群落和世间罕见的自然奇观。",
          image: 树正瀑布
        },
        {
          title: "树正群海",
          description: "海拔2187-2280 米。其地形是在河谷迭加泥石流堆积物基础上，再经钙华沉积，形成大小19 个湖泊，顺着沟谷层层迭迭。这里森林、湖泊、小瀑布相错相连，呈现“树在水中生，水在林间流，人在画中游”的奇特景观。",
          image: 树正群海
        },
        {
          title: "犀牛海",
          description: "犀牛海海拔2301 米的地区，长2000 米、宽225 米、深17 米，是九寨沟第二大湖泊。据说一位病重的得道高僧，骑着犀牛来到此处，喝了湖边的神泉后竟不治而愈，便将爱骑犀牛留在此处，因此而得名。春夏季节，湖水一片翠绿；秋高气爽，满山的秋色倒影于湖中，更胜实景。",
          image: 犀牛海
        },
        {
          title: "盆景滩",
          description: "海拔2190 米，长218 米、宽98 米，水深0.8 米，是进入九寨沟的第一个滩流景观。浅滩上，柳、柏、杨、松，杜鹃等植物丛生，缀以花草、石块，树干四周因钙华堆积形成略高于水面的天然盆堤，宛若一组组盆景。",
          image: 盆景滩
        },
        {
          title: "芦苇海",
          description: "海拔2192 米，高约15 米、宽约10 米，位于芦苇海东侧对面石灰岩崖壁上，因岩石自然风化痕迹和植物装饰作用，形成一幅端庄秀丽的少女脸庞，传说是九寨沟的沃洛瑟嫫女神。",
          image: 芦苇海
        }
      ],
      cards2: [
        {
          title: "季节海",
          description: "上季节海是九寨沟内独特的海子，海拔2910 米，长680 米、宽200米、深3 米，属冰川堰塞湖。湖水量会随季节变换，时盈时涸，因此而命名。一年中大部分时段干涸，仅雨季蓄水成湖，其余时段，湖水于涸、湖床上长满青草，郁郁葱葱。下季节海镶嵌于海拔2627 米的山坳里，季节性湖泊，因崩塌、泥石流堆积物阻塞河谷形成。在10 月秋季时，雨量充沛，湖水饱满，水色湛蓝。初夏季节，水位渐低，水色转为翠绿。",
          image: 季节海
        },
        {
          title: "五彩池",
          description: "位于海拔3010 米地区，长约100 米，宽60 米，深6.6 米。是九寨沟最小而艳丽的海子，人称“九寨之眼”。湖水来自地下水补给，冬季湖面也不结冰。在阳光、藻类、钙华等多种因素作用下，湖水五彩斑斓。",
          image: 五彩池
        },
        {
          title: "长海",
          description: "海拔3101 米，总长约4350 米，宽300 米，深90 米，库容4500万立方米。平面呈「S」型，属冰川堰塞湖、淡水湖，是九寨沟海拔最高、湖水最深，面积和库容最大的海子。无出水口，湖水除直接蒸发外，通过地下裂隙渗漏到五彩池、五花海等下游景点，成为核心景区的调节水库。夏秋雨季不溢堤，冬春旱季干涸，因此当地人称之为装不满，漏不干的「宝葫芦」。",
          image: 长海
        }
      ],
      cards3: [
        {
          title: "芳草海",
          description: "海拔2905m。为沼泽化湖泊，长720m、宽50-100m、深2-6m，面积4.3万m2，有水容积20万m3。常有天鹅在此短暂停留。它与芳草海的下游相连，浅滩上绿草如茵，一道清流在绿茵中蜿蜒流过，滋着这一方水草。",
          image: 芳草海
        },
        {
          title: "原始森林",
          description: "海拔2930m。植被以各种冷杉、云杉为主，树龄几百上千年，林下灌木有忍冬、杜鹃、箭竹、花楸等，苔藓深达数十厘米。负氧离子含量达3000个/cm3。在森林蓬松的绿地上长满了地衣，地衣是天然的环境检测员，只要空气中有一点点的有害物质，地衣就无法生存，地衣的出现，说明了九寨沟的空气质量非常纯净。",
          image: 原始森林
        },
        {
          title: "珍珠滩",
          description: "海拔2450 米，滩面宽112.3 米、长189 米，平均坡度20 度，相对高差15 米，是九寨沟最宽阔的滩面，为碳酸钙沉积而成的大型钙华堆积台地。阳光下，湍流在凹凸不平的滩面上宣泄而下，溅起无数水珠，宛如粒粒洁白的珍珠，晶莹夺目，故得此名。",
          image: 珍珠滩
        },
        {
          title: "珍珠滩瀑布",
          description: "海拔2433 米，均高21 米，瀑宽270 米。由第四纪冰川遗存的冰碛台地，再经钙化作用，使瀑布的坡坎更加高耸坚固，瀑面后凹呈新月型。瀑布跌落谷底，发出震耳欲聋的水声，气势磅礡。此处的负氧离子含量极为丰富，有「天然氧吧」之称。",
          image: 珍珠滩瀑布
        },
        {
          title: "诺日朗瀑布",
          description: "海拔2343 米，高24.5 米、宽320 米，是中国最宽的高山钙华瀑布。滔滔流水自诺日朗群海而来，从瀑顶树丛中倾泻而下，像数条洁白的哈达，水势浩大，声震山谷。寒冬时节，瀑布成了一幅巨大的冰幔，无数的冰柱悬挂在陡崖之上，成为罕见的冰晶世界，造型各异的冰雕迎光透着幽幽的蓝色魅惑，是九寨沟六绝之一「蓝冰」。",
          image: 诺日朗瀑布
        },
        {
          title: "诺日朗群海",
          description: "由大小20个钙华湖泊组成，发育钙华溶蚀现象。分布海拔2353m-2365m，总面积约0.03628 km2。其成因类似边石坝、彩池。诺日朗群海总体上紧密相间分布，连绵四百余米，其大小、形状、深度有所差异；最大的海子长185m，宽45m；最小的海子长仅20m，宽15m；海子水深多在7-20m之间，最深可达23m。",
          image: 诺日朗群海
        },
        {
          title: "镜海",
          description: "海拔2367 米，长1155 米、宽241 米、深31 米，是九寨沟第三大湖泊，因水面平静如镜而得名。每当晨曦初现，蓝天白云、远山飞鸟都尽收海底，清晰可见，倒影胜实景。",
          image: 镜海
        },
        {
          title: "孔雀河道",
          description: "孔雀河道是从五花海出水口深谷里的一条河道。漫步河道边，像是走在一副最浓烈的色彩创造出来的油画里，又犹如孔雀羽一样，将尘世间最美丽的蓝和绿都融合在一起。",
          image: 孔雀河道
        },
        {
          title: "天鹅海",
          description: "海拔2905m。为沼泽化湖泊，长720m、宽50-100m、深2-6m，面积4.3万m2，有水容积20万m3。常有天鹅在此短暂停留。它与芳草海的下游相连，浅滩上绿草如茵，一道清流在绿茵中蜿蜒流过，滋着这一方水草。",
          image: 天鹅海
        },
        {
          title: "箭竹海",
          description: "海拔2629m。长1184m、宽144-268m、深5-10m，面积15.1万m2，有水容积93万m3。地下有稳定的地下水补给，水位年变化小，冬季不结冰。湖畔箭竹吐翠，风平浪静时，湖水倒影迷人。",
          image: 箭竹海
        },
        {
          title: "熊猫海",
          description: "海拔2574m。总长670m、宽109-237m、均深15.6m，面积10.8万m²，有水容积180万m³。为冰川堰塞湖，因熊猫在此活动而得名。水位呈季节性变化，变幅5-7m。丰水期，水满溢出形成高瀑布；枯水期，湖岸露出大片金黄色的钙华沙滩。湖水中群聚嬉戏的嘉陵裸裂尻鱼为一大奇观。",
          image: 熊猫海
        },
        {
          title: "熊猫海瀑布",
          description: "海拔2574m。高65m、宽75m。又名高瀑布。瀑布呈三级跌水，是九寨沟落差最大的瀑布。丰水期上游来水大于渗漏量，湖泊水量充盈，翻堤形成瀑布；枯水季节，瀑布断流，瀑布下形成天然冰雕。",
          image: 熊猫海瀑布
        },
        {
          title: "五花海",
          description: "海拔2462 米，长450 米、宽313 米、深9 米，属滑坡、泥石流阻塞原冰川沟谷形成的堰塞湖。五花海是九寨沟色彩最丰富的海子，湖底的钙华、藻类、水草、枯树在对光的不同反射和折射下，加上蓝天、白云、绿草、翠林在湖中的投影，构成了鹅黄、翠绿、墨绿、天蓝、深蓝、藏青等色调交织混染的湖水，似无数块宝石镶嵌成的巨形佩饰，珠光宝气，雍容华贵。俯瞰其全貌，俨然孔雀开屏。",
          image: 五花海
        }

      ]
    };
  },
  computed: {
    visibleCards1() {
      return this.getVisibleCards(this.currentSlide1, this.cards1);
    },
    visibleCards2() {
      return this.getVisibleCards(this.currentSlide2, this.cards2);
    },
    visibleCards3() {
      return this.getVisibleCards(this.currentSlide3, this.cards3);
    }
  },
  methods: {
    getVisibleCards(currentSlide, cards) {
      const totalCards = cards.length;
      const start = currentSlide;
      const end = start + 3;
      if (end <= totalCards) {
        return cards.slice(start, end);
      } else {
        return [...cards.slice(start, totalCards), ...cards.slice(0, end - totalCards)];
      }
    },
    nextSlide(carousel) {
      if (carousel === 'first') {
        this.currentSlide1 = (this.currentSlide1 + 1) % this.cards1.length;
      } else if (carousel === 'second') {
        this.currentSlide2 = (this.currentSlide2 + 1) % this.cards2.length;
      } else if (carousel === 'third') {
        this.currentSlide3 = (this.currentSlide3 + 1) % this.cards3.length;
      }
    },
    prevSlide(carousel) {
      if (carousel === 'first') {
        this.currentSlide1 = (this.currentSlide1 - 1 + this.cards1.length) % this.cards1.length;
      } else if (carousel === 'second') {
        this.currentSlide2 = (this.currentSlide2 - 1 + this.cards2.length) % this.cards2.length;
      } else if (carousel === 'third') {
        this.currentSlide3 = (this.currentSlide3- 1 + this.cards3.length) % this.cards3.length;
      }
    }
  }
};
</script>

<style scoped>
/* 设置蓝色背景 */
.blue-background {
  background-color: rgb(126, 202, 186);
  min-height: 100vh; /* 确保背景颜色覆盖整个视口高度 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 调整为顶部对齐 */
  align-items: center;
  margin-top: 60px;
}

/* 设置图片容器的样式 */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* 图片和卡片之间的间距 */
}

.image-figure {
  margin: 0;
}

.image {
  max-width: 100%; /* 确保图片不会超出其容器的宽度 */
  max-height: 80vh; /* 设置图片最大高度为视口高度的80% */
  object-fit: contain; /* 保持图片的纵横比 */
}

/* 设置轮播图样式 */
.carousel {
  display: flex;
  align-items: center;
  position: relative;
  width: 85%;
}

.carousel-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
}

.carousel-card {
  flex: 0 0 28%;
  box-sizing: border-box;
  padding: 10px;
  background: white;
  border-radius: 10px;
  margin: 0 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex; /* 添加这个 */
  flex-direction: column; /* 添加这个 */
  justify-content: space-between; /* 添加这个 */
}

.card-content {
  flex-grow: 1; /* 使内容占据剩余空间 */
}

.card-content h2 {
  margin: 0 0 5px; /* 调整标题的外边距 */
}

.card-content p {
  font-family: domine, sans-serif, Tahoma, Geneva, Arial, "Microsoft YaHei", 微软雅黑;
  font-size: 16px;
  color: #656a7b;
  line-height: 24px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 200;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: none;
  text-align: left; /* 设置为有效的值，例如 left */
  text-indent: 0px;
}

.details-link {
  font-family: nexa;
  font-size: 14.4px;
  color: #7ecaba;
  line-height: 36px;
  vertical-align: middle;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 700;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: auto; /* 将详情链接推到卡片底部 */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 确保内容均匀分布 */
  padding: 10px; /* 调整卡片内容内边距 */
}


.details-link:hover {
  text-decoration: underline;
}

.carousel-arrow {
  font-size: 2rem; /* 调整图标大小 */
  cursor: pointer;
  color: white; /* 箭头颜色 */
  background-color: rgba(0, 0, 0, 0.5); /* 背景颜色 */
  border-radius: 50%; /* 圆形背景 */
  padding: 10px; /* 内边距 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  text-align: center; /* 确保图标居中 */
  line-height: normal; /* 重置行高，避免图标位置不正确 */
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

/* 使用Element Plus的箭头图标 */
.el-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 1;
}

.el-icon-arrow-left {
  left: 10px;
}

.el-icon-arrow-right {
  right: 10px;
}
</style>
