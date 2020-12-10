<template>
  <div class="page-review">
    <button class="page-review__show-button" type="button" v-on:click="openForm" v-show="visibleButton">Добавить отзыв</button>
    <Form v-show="visible" />
  </div>
</template>
<script>
import Form from './Form'
export default {
  data() {
    return {
      visible: false,
      visibleButton: true
    }
  },
  components: {
    Form
  },
  methods: {
    openForm() {
      this.visibleButton = false;
      this.visible = true;
    }
  }
}

</script>
<style>
.page-review__show-button {
  width: 560px;
  height: 60px;
  background: #53C6D1;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #fff;
  margin-top: 30%;
}

@media screen and (max-width: 767px) {
  .page-review__show-button {
    width: 300px;
  }
}

</style>
