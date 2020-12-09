<template>
  <div id="review">
    <h3 class="review__main-title">{{ title }}</h3>
    <button class="review__close-button" type="button"></button>
    <div class="review-header">
      <img class="review__image" src="./assets/album-photo.png" width="102" height="68" alt="Главное фото отзыва">
      <div class="review__wrapper">
        <h3 class="review__title">Фоточки в свадебном платьице</h3>
        <span class="review__author">Алена Смирнова</span>
      </div>
    </div>
    <form class="review-form" action="#" enctype="multipart/form-data" autocomplete="off">
      <Rating />
      <textarea class="review-form__comment" id="comment" name="reviewer-comment" placeholder="Комментарий"></textarea>
      <label class="review-form__comment-label" for="comment">12/500</label>
      <label class="review-form__load">
        <input type="file" name="load-image">
        <span></span>
      </label>
      <button class="review-form__button" type="submit">Отправить</button>
    </form>
  </div>
</template>
<script>
import Rating from './Rating'
export default {
  name: 'review',
  components: {
    Rating
  },
  data() {
    return {
      title: 'Мой отзыв'
    }
  }
}

</script>
<style lang="scss" scoped>
@mixin title-style {
  font-size: 16px;
  line-height: 24px;
  color: #3C3C3C;
  font-weight: 600;
  margin-top: 2px;
}

$border: 1px solid #EAECF0;

#review {
  width: 560px;
  // background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  border: $border;
  margin: 0 calc(50% - 280px);
  margin-top: 20px;
  position: relative;
  padding-top: 18px;
  padding-bottom: 14px;
  margin-bottom: 30px;

  &::before,
  &::after {
    content: "";
    border-bottom: $border;
    display: block;
    position: absolute;
    top: 56px;
    width: 560px;
    left: -1px;
  }

  &::after {
    top: 0;
    bottom: 66px;
  }
}

.review__main-title {
  @include title-style;
  margin-top: 0;
  margin-left: 30px;
  align-self: baseline;
  margin-bottom: 40px;
}

.review__close-button {
  width: 14px;
  height: 14px;
  background-image: url('./assets/icon-close.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 20px;
  top: 22px;
}

.review-header {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  align-items: center;
  padding: 0 calc(50% - 248px);
}

.review__image {
  border-radius: 6px;
  margin-right: 20px;
}

.review__title {
  @include title-style;
  width: 374px;
  margin-bottom: 0;
  margin-top: -2px;
}

.review__author {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #50586A;
}

.review-form {
  width: 496px;
  display: flex;
  flex-direction: column;
}

.review-form__comment {
  width: 496px;
  height: 100px;
  border: $border;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #7F899E;
  padding-left: 10px;
  padding-top: 12px;
  margin-left: -1px;
  margin-bottom: 4px;
}

.review-form__comment-label {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7F899E;
  margin-bottom: 17px;
  align-self: flex-end;
}

.review-form__load {
  display: block;
  width: 80px;
  height: 80px;
  border: $border;
  border-radius: 6px;
  background: url('./assets/icon-plus.svg') center no-repeat,
    #F3F4F6;
  margin-bottom: 40px;

  input {
    display: none;
  }
}

.review-form__button {
  width: 105px;
  height: 36px;
  background: #53C6D1;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #fff;
  position: relative;
  left: 406px;
}

</style>
