<template>
  <div id="review">
    <h3 class="review__main-title">{{ title }}</h3>
    <img class="review__image" src="#" alt="Фото отзыва">
    <h3 class="review__title">Фоточки в свадебном платьице</h3>
    <span class="review__author">Алена Смирнова</span>
    <form class="review-form" action="#" enctype="multipart/form-data">
      <fieldset class="review__rating">
        <legend></legend>
        <label for="">Скорость</label>
        <input type="checkbox" name="" value="">
        <label for="">Скорость отдачи видео</label>
        <input type="checkbox" name="" value="">
        <label for="">Качество</label>
        <input type="checkbox" name="" value="">
        <label for="">Пунктуальность</label>
        <input type="checkbox" name="" value="">
      </fieldset>
      <textarea name="" placeholder="Комментарий"></textarea>
      <label for="">12/500</label>
      <input type="file" name="" value="">
      <button class="review-form__button" type="submit">Отправить</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'review',
  data() {
    return {
      title: 'Мой отзыв'
    }
  }
}

</script>
<style lang="scss">
#review {
  width: 560px;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: ('Montserrat', 'Arial', sans-serif);
  border-radius: 16px;
  border: 1px solid #EAECF0;
  margin: 0 calc(50% - 280px);
  margin-top: 20px;
  position: relative;

  &::before {
    content: "";
    border-bottom: 1px solid #EAECF0;
    display: block;
  }
}

.review__main-title,
.review__title {
  font-size: 16px;
  line-height: 24px;
  color: #3C3C3C;
  font-weight: 600px;
}

.review__author {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #50586A;
}

.review__rating {
  border: none;
  display: flex;
  width: 440px;
}

</style>
