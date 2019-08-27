<template>
  <div class="container">

    <h1>Калькулятор темпа {{name}}</h1>

    <form>
      <div class="form-group">
        <label for="pace">Темп</label>
        <input
                type="text"
                class="form-control"
                id="pace"
                placeholder="Темп"
                aria-describedby="paceHelp"
        >
        <small id="paceHelp" class="form-text text-muted">Введите темп в формате МИНУТЫ:СЕКУНДЫ (например 5:40 мин/км)</small>
      </div>

      <div class="form-group">
        <label for="time">Время</label>
        <input
                type="text"
                class="form-control"
                id="time"
                placeholder="Время"
                aria-describedby="timeHelp"
        >
        <small id="timeHelp" class="form-text text-muted">Введите предпологаемое время забега в формате ЧАСЫ:МИНУТЫ:СЕКУНДЫ или ЧАСЫ:МИНУТЫ или МИНУТЫ (например 1:30)</small>
      </div>

      <div class="form-group">
        <label for="distance">Дистанция</label>
        <input
                type="text"
                class="form-control"
                id="distance"
                placeholder="Дистанция"
                aria-describedby="distanceHelp"
        >
        <small id="distanceHelp" class="form-text text-muted">Введите или выберите дистанцию забега (например 10 км)</small>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style>

</style>
