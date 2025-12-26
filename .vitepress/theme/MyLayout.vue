<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
const { frontmatter } = useData();
const Layout = DefaultTheme.Layout;
</script>

<template>
  <div :class="frontmatter.customClass">
    <Layout />
  </div>
</template>
