<template>
  <div id="app">
    <ti-button @click="getInfo" type="default" disabled>禁止点击</ti-button>
    <ti-button @click="getInfo" type="default" >点击触发事件</ti-button>
    <div class="row">
      <ti-button type="default" >默认按钮</ti-button>
      <ti-button type="primary">主要按钮</ti-button>
      <ti-button type="success">成功按钮</ti-button>
      <ti-button type="info">信息按钮</ti-button>
      <ti-button type="warning">警告按钮</ti-button>
      <ti-button type="danger">危险按钮</ti-button>
    </div>
    <div class="row">
      <ti-button plain type="default">朴素按钮</ti-button>
      <ti-button plain type="primary">主要按钮</ti-button>
      <ti-button plain type="success">成功按钮</ti-button>
      <ti-button plain type="info">信息按钮</ti-button>
      <ti-button plain type="warning">警告按钮</ti-button>
      <ti-button plain type="danger">危险按钮</ti-button>
    </div>
    <div class="row">
      <ti-button round type="default">圆角按钮</ti-button>
      <ti-button round type="primary">主要按钮</ti-button>
      <ti-button round type="success">成功按钮</ti-button>
      <ti-button round type="info">信息按钮</ti-button>
      <ti-button round type="warning">警告按钮</ti-button>
      <ti-button round type="danger">危险按钮</ti-button>
    </div>
    <div class="row">
      <ti-button icon="ti-icon-search" circle type="default"></ti-button>
      <ti-button icon="ti-icon-star-off" circle type="primary"></ti-button>
      <ti-button icon="ti-icon-edit" circle type="success"></ti-button>
      <ti-button icon="ti-icon-check" circle type="info"></ti-button>
      <ti-button icon="ti-icon-message" circle type="warning"></ti-button>
      <ti-button icon="ti-icon-delete" circle type="danger"></ti-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'APP',
  methods: {
    getInfo () {
      alert('点击事件触发')
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .ti-button {
    margin-right: 20px;
  }
}
</style>
