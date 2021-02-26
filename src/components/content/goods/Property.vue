<!--商品属性-->
<template>
  <li>
    <slot name="propertyName"></slot>
    <slot name="propertyContent"></slot>
  </li>
</template>

<script>
export default {
name: "Property",
}
</script>

<style scoped>
li{
  height: 42px;
  line-height: 42px;
  list-style: none;
}
</style>