<script setup>
import overview from "./overview";
import { Link } from "@element-plus/icons-vue";
import { withBase } from 'vitepress'

const props = defineProps({
  name: String
});

let data = {};
overview.forEach((item) => {
  item.items.forEach((list) => {
    if (list.link === props.name) {
    return (data = list);
  }
  });
});
</script>

<template>
  <h1 :id="data.text">
    {{ data.text }}
    <a class="header-anchor" :href="`#${data.text}`" :aria-label="`Permalink to &quot;${data.text}&quot;`">​</a>
    <Badge v-for="(item,i) in data.tag" :key="i" :type="item.type" :text="item.text" />
  </h1>

  <p>{{ data.synopsis }}</p>

  <p>
    <a
      v-for="(item, i) in data.links"
      :key="i"
      :href="item.url"
      :target="item.target||'_blank'"
      class="button"
    >
      <el-button type="primary">
        {{ item.type }}
        <el-icon class="el-icon--right"><Link /></el-icon>
      </el-button>
    </a>
  </p>

  <el-image v-for="(item, i) in data.imgs" :key="i" :src="withBase(item)" />
</template>
<style scoped>
.button + .button {
  margin-left: 12px;
}
</style>
