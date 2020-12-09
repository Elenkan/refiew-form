<template>
  <fieldset class="review-rating">
    <legend></legend>
    <CategoryItem
    v-for="category of categories"
    v-bind:category="category"
    />
  </fieldset>
</template>
<script>
  import CategoryItem from './CategoryItem'
  export default {
    props: ['categories'],
    components: {
      CategoryItem
    }
  }
  </script>


  <style lang="scss" scoped>

  .review-rating {
    display: flex;
    flex-wrap: wrap;
    width: 496px;
    height: 136px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #3C3C3C;
    margin: 0 0 31px 0;
    padding: 0;
    border: none;
  }

  </style>
