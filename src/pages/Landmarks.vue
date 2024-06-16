<template>
  <div id="app" class="blue-background">
    <div class="image-container">
      <figure class="image-figure">
        <img src="@/assets/标志景点/树正沟景点.png" alt="树正沟景点" class="image">
      </figure>

    </div>


  </div>

</template>

<style scoped>
/* 设置蓝色背景 */
.blue-background {
  background-color: rgb(126, 202, 186);
  min-height: 100vh; /* 确保背景颜色覆盖整个视口高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 设置图片容器的样式 */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 设置图片的样式 */
.image-figure {
  margin: 0;
}

.image {
  max-width: 100%; /* 确保图片不会超出其容器的宽度 */
  max-height: 80vh; /* 设置图片最大高度为视口高度的80% */
  object-fit: contain; /* 保持图片的纵横比 */
}
</style>
