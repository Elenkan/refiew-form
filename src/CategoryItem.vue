<template>
  <div class="review-rating__item">
    <span>{{ category.title }}</span>
    <label class="review-rating__checkbox">
      <input type="checkbox" name="rating-choice">
    </label>
    <label class="review-rating__checkbox">
      <input type="checkbox" name="rating-choice">
    </label>
    <label class="review-rating__checkbox">
      <input type="checkbox" name="rating-choice">
    </label>
    <label class="review-rating__checkbox">
      <input type="checkbox" name="rating-choice">
    </label>
    <label class="review-rating__checkbox">
      <input type="checkbox" name="rating-choice">
    </label>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}

</script>
<style lang='scss' scoped>

.review-rating__item {
  width: 220px;
  height: 60px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  display: flex;

  span {
    display: block;
    width: 100%;
    margin-bottom: 5px;

  }
}

input[type="checkbox"] {
  display: none;
}

.review-rating__checkbox {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-right: 8px;
  margin-left: 4px;

  background: url('./assets/images/star.svg') no-repeat;
  /*
  &:hover {
   background: url('./assets/color-star.svg') no-repeat;
   cursor: pointer;
 }
*/
}

@media screen and (max-width: 767px) {
  .review-rating__item {
    margin-bottom: 16px;
  }
  .review-rating__checkbox {
    margin-right: 10px;
  }
}

</style>
