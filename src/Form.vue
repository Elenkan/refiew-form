<template>
  <div class="review" v-show="showReview">
    <div class="review__header">
      <h3 class="review__main-title review__main-title--pseudo">{{ title }}</h3>
      <button class="review__close-button" type="button" v-on:click="closeReviewForm"></button>
    </div>
    <form class="review-form" action="#" enctype="multipart/form-data" method="post" autocomplete="off" v-on:submit.prevent="handeleSubmit">
      <div class="review-form__rating-part">
        <div class="form-header">
          <img class="form-header__image" src="./assets/images/album-photo.png" width="102" height="68" alt="Главное фото отзыва">
          <div class="form-header__wrapper">
            <h3 class="form-header__title">Фоточки в свадебном платьице</h3>
            <span class="form-header__author">Алена Смирнова</span>
          </div>
        </div>
        <Rating v-bind:categories="categories" />
        <button class="review-form__button-continue" type="button">Продолжить</button>
      </div>
      <div class="review-form__comment-part">
        <div class="review__header review__header--mobile">
          <h3 class="review__main-title review__main-title--mobile">{{ title }}</h3>
          <button class="review__close-button review__close-button--mobile" type="button" v-on:click="closeReviewForm"></button>
        </div>
        <textarea class="review-form__comment" id="comment" name="reviewer-comment" v-model="comment"></textarea>
        <label class="review-form__comment-label" for="comment">12/500</label>
        <div class="review-form__gallery">
          <input class="review-form__load-input" id="load-input" type="file" name="load-image">
          <label class="review-form__load-label" for="load-input">
          </label>
          <img v-bind:src="photo" v-for="photo of photos" alt="Фото галереи" width="80" height="80">
          <button class="review-form__delete-image" type="button"></button>
        </div>
        <button class="review-form__button" type="submit">Отправить</button>
      </div>
    </form>
  </div>
</template>
<script>
import Rating from './Rating'
export default {
  components: {
    Rating
  },
  data() {
    return {
      title: 'Мой отзыв',
      width: 0,
      showReview: true,
      comment: 'Комментарий',
      categories: [
        { title: 'Скорость' },
        { title: 'Скорость отдачи видео' },
        { title: 'Качество' },
        { title: 'Пунктуальность' }
      ],
      photos: [require('./assets/images/image-venice.png'),
        require('./assets/images/image-walk.png'),
        require('./assets/images/image-swimsuit.png'),
        require('./assets/images/image-couple.png'),
        require('./assets/images/image-bride.png')
      ]
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.width = window.innerWidth;
    if (this.width <= 768) {
      this.title = "Новый отзыв";
      this.categories = [
          { title: 'Скорость' },
          { title: 'Скорость отдачи видео' },
          { title: 'Исполнитель солнышка?' },
          { title: 'Исполнитель солнышка?' }
        ];
    }
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      if (this.width <= 768) {
        this.title = "Новый отзыв";
        this.categories = [
          { title: 'Скорость' },
          { title: 'Скорость отдачи видео' },
          { title: 'Исполнитель солнышка?' },
          { title: 'Исполнитель солнышка?' }
        ];

      } else {
        this.title = "Мой отзыв";
        this.categories = [
          { title: 'Скорость' },
          { title: 'Скорость отдачи видео' },
          { title: 'Качество' },
          { title: 'Пунктуальность' }
        ];
      }
    },
    closeReviewForm() {
      this.showReview = false;
    },
    handeleSubmit() {
      alert("Спасибо, отзыв опубликован!");
      this.showReview = false;
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

@mixin button-style {
  background: #53C6D1;
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #fff;
}

@mixin pseudo-style {
  content: "";
  border-bottom: $border;
  display: block;
  position: absolute;
  width: 560px;
  height: 1px;
  left: -1px;
}

$border: 1px solid #EAECF0;

.review {
  width: 560px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  border: $border;
  margin-top: 56px;
  position: relative;
  padding-top: 18px;
  padding-bottom: 14px;
  margin-bottom: 30px;

  &::before {
    @include pseudo-style;
    top: 54px;
  }

  &::after {
    @include pseudo-style;
    bottom: 66px;

  }
}

.review__header {
  width: 555px;
  display: flex;
  margin-bottom: 39px;
}

.review__main-title {
  @include title-style;
  margin-top: -2px;
  margin-left: 30px;
  margin-bottom: 0;
  align-self: baseline;
  position: relative;
}

.review__main-title--mobile {
  display: none;
}

.review__close-button--mobile {
  display: none;
}

.review__main-title--mobile::before {
  content: "";
  display: none;
  position: absolute;
  right: 129px;
  top: 3px;
  width: 16px;
  height: 15px;
  background: url('./assets/images/arrow.svg') no-repeat;
}

.review__main-title--mobile::after {
  content: "";
  border-bottom: $border;
  display: block;
  position: absolute;
  top: 38px;
  width: 320px;
  left: -52px;
}

.review__close-button {
  width: 20px;
  height: 20px;
  background-image: url('./assets/images/icon-close.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 17px;
  top: 17px;
}

.form-header {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  align-items: center;
  padding: 0 calc(50% - 248px);
}

.form-header__image {
  border-radius: 6px;
  margin-right: 20px;
}

.form-header__title {
  @include title-style;
  width: 374px;
  margin-bottom: 0;
  margin-top: 2px;
}

.form-header__author {
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

.review-form__rating-part,
.review-form__comment-part {
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
  padding-left: 12px;
  padding-top: 12px;
  margin-bottom: 4px;
  margin-top: -31px;
}

.review-form__comment-label {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7F899E;
  margin-bottom: 17px;
  align-self: flex-end;
}

.review-form__load-label {
  display: block;
  width: 80px;
  height: 80px;
  border: $border;
  border-radius: 6px;
  margin-right: 8px;
  background: url('./assets/images/icon-plus.svg') center no-repeat,
    #F3F4F6;
  cursor: pointer;
  position: relative;
}

.review-form__load-input {
  width: 80px;
  height: 80px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: 10;
}


input[type="file"]:focus+label {
  outline: 1px solid #000;
}

.review-form__gallery {
  display: flex;
  margin-bottom: 40px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    border-radius: 4px;
  }

  img:last-of-type {
    display: none;
  }
}

.review-form__delete-image {
  position: absolute;
  right: 72px;
  top: 8px;
  width: 32px;
  height: 32px;
  background: url('./assets/images/delete-sign.svg') no-repeat;
}

.review-form__button {
  @include button-style;
  width: 105px;
  height: 36px;

  position: relative;
  left: 406px;
}

.review-form__button-continue {
  display: none;
}

@media screen and (max-width: 767px) {
  .review {
    width: 320px;
    padding-top: 19px;

    &::before {
      top: 504px;
      width: 320px;
    }

    &::after {
      width: 320px;
    }
  }

  .review__header {
    width: 320px;
    margin-bottom: 16px;
  }

  .review__header--mobile {
    margin-bottom: 15px;
  }

  .review__main-title {
    margin-top: -4px;
    margin-left: 17px;
    margin-bottom: 0;
  }

  .review__main-title--pseudo::before {
    content: "";
    position: absolute;
    bottom: 34px;
    left: 131px;
    width: 24px;
    height: 3px;
    background: #CFD3DD;
    border-radius: 4px;
  }

  .review__main-title--mobile {
    display: block;
    margin-top: -2px;
    margin-left: 37px;
    position: relative;
  }

  .review__main-title--mobile::before {
    display: block;
  }

  .form-header {
    width: 290px;
    flex-direction: column;

    align-items: flex-start;
    margin-bottom: 24px;
    padding: 0;

    &__image {
      width: 84px;
      height: 56px;
      margin-bottom: 12px;
    }
  }

  .review-form {
    width: 289px;
  }

  .review-form__comment-part::before{
    content: "";
    display: block;
    width: 320px;
    height: 1px;
    right: 15px;
    bottom: 12px;
    position: relative;
    border-bottom: $border;
  }
  .review-form__button-continue {
    display: block;
    @include button-style;
    width: 120px;
    height: 36px;
    align-self: flex-end;
    margin-bottom: 20px;
  }

  .review__close-button--mobile {
    display: block;
    top: 575px;
  }

  .review-form__comment {
    width: 288px;
    margin-top: 14px;
    height: 146px;
    padding-top: 16px;
  }

  .review-form__delete-image {
    display: none;
  }

  .review-form__gallery {
    flex-wrap: wrap;
    padding-bottom: 111px;

    img:last-of-type {
      display: block;
    }
  }

  .review-form__load-label {
    margin-right: 10px;
    margin-bottom: 8px
  }

  .review-form__button {
    left: 184px;
  }
}

</style>
