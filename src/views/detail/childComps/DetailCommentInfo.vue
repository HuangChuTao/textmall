<template>
  <div class="deta-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="rate-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rate-uimg">
      <img :src="commentInfo.user.avatar" alt="" />
      <span class="uimg-span">{{ commentInfo.user.uname }}</span>
      <p>{{ commentInfo.content }}</p>
      <div class="uimg-rate">
        <span>{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="rate-uimgs" v-for="(img, index) in commentInfo.images" :key="index">
      <img :src="img" alt="" />
    </div>
  </div>
    <div class="nulls" v-else>此宝贝暂无评论</div>
</template>

<script>
import { formatDate } from "@/common/utlis";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  filters: {
    showDate(value) {
      let data = new Date(value * 1000);
      return formatDate(data, "yyyy-MM-dd hh:mm:ss");
    }
  },
};
</script>

<style>
.deta-comment-info {
  padding-bottom: 30px;
  border-bottom: 5px solid #f2f5f8;
}

.rate-top {
  height: 74px;
  line-height: 74px;
  border-bottom: 5px solid #f2f5f8;
}

.rate-top span:nth-child(1) {
  float: left;
}

.rate-top span:nth-child(2) {
  float: right;
}

.rate-uimg {
  margin-top: 20px;
}

.rate-uimg img {
  width: 54px;
  border-radius: 50%;
  vertical-align: middle;
}

.rate-uimg .uimg-span {
  display: inline-block;
  padding-left: 8px;
}

.rate-uimg p {
  margin-top: 20px;
}

.uimg-rate {
  margin-top: 10px;
  /* color: #ccc; */
  font-size: 16px;
}
.uimg-rate span {
  padding-right: 8px;
}

.rate-uimgs {
  display: inline-block;
  margin-top: 10px;
}

.rate-uimgs img {
  padding-right: 8px;
  width: 100px;
}

.nulls {
  margin-top: 20px;
  
}
</style>