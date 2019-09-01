<template>

  <div class="container-fluid">

    <div class="card mb-4" style="margin-top: 15px; max-width: 30rem">
      <div class="card-header">
        Калькулятор темпа
      </div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <form>
          <div class="form-group">
            <label for="pace">Темп</label>
            <input
                    class="form-control"
                    id="pace"
                    :placeholder="calcPace"
                    aria-describedby="paceHelp"
                    v-model="pace"
                    onfocus="(this.type='time')" onblur="(this.type='text')"

            >
            <small id="paceHelp" class="form-text text-muted">Введите темп в формате МИНУТЫ:СЕКУНДЫ (например 05:40 мин/км)</small>
          </div>

          <div class="form-group">
            <label for="time">Время</label>
            <input
                    type="time"
                    step="1"
                    class="form-control"
                    id="time"
                    :placeholder="calcTime"
                    aria-describedby="timeHelp"
                    v-model="time"
                    onfocus="(this.type='time')" onblur="(this.type='text')"

            >
            <small id="timeHelp" class="form-text text-muted">Введите предпологаемое время забега в формате ЧАСЫ:МИНУТЫ:СЕКУНДЫ (например 02:20:42)</small>
          </div>

          <div class="form-group">
            <label for="distance">Дистанция</label>
            <input
                    type="number"
                    class="form-control"
                    id="distance"
                    :placeholder="calcDistance"
                    aria-describedby="distanceHelp"
                    v-model="distance"
            >
            <small id="distanceHelp" class="form-text text-muted">Введите или выберите дистанцию забега (например 21.1 или 5 км)</small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pace: '',
      time: '',
      distance: '',
    }
  },
  computed: {
    calcPace(){
      if (this.distance == '' || this.time == '') {
        return '00:00/км';
      } else {

        let timeArray = [0, 0, 0],
                timeMinutes = 0,
                minutes = 0,
                seconds = 0;

        timeArray = this.time.split(":");

        console.log(timeArray);

        if(timeArray[2])
          timeMinutes = +timeArray[0] * 60 + +timeArray[1] + timeArray[2] / 60;
        else
          timeMinutes = +timeArray[0] * 60 + +timeArray[1];


        let distance = this.distance;
        let pace = timeMinutes / distance * 60;

        minutes = Math.floor(pace / 60);
        seconds = Math.floor(pace % 60);

        return `${minutes}:${seconds}`;
      }
    },

    calcTime() {
      if (this.distance == '' || this.pace == '') {
        return '00:00:00';
      } else {
        let paceArray = [0, 0],
                paceSeconds = 0,
                timeSeconds = 0,
                hours = '',
                minutes = '',
                seconds = '';

        let distance = this.distance;
        paceArray = this.pace.split(":");
        paceSeconds = +paceArray[0] * 60 + +paceArray[1];

        timeSeconds = paceSeconds * distance;

        //console.log(paceSeconds, '*', distance, '=',timeSeconds,  )

        hours = Math.floor(timeSeconds / 3600);
        minutes = Math.floor((timeSeconds % 3600) / 60);
        seconds = Math.floor(timeSeconds % 60);

        return `${hours}:${minutes}:${seconds}`;
      }
    },

    calcDistance(){
      if(this.time == '' || this.pace == '') {
        return '0 км';
      } else {
          let     timeArray = [0, 0, 0],
                  paceArray = [0, 0],
                  timeMinutes = 0,
                  paceMinutes = 0;


          timeArray = this.time.split(":");
          paceArray = this.pace.split(":");

          timeMinutes = +timeArray[0] * 60 + +timeArray[1] +timeArray[2] / 60;
          paceMinutes = +paceArray[0] + +paceArray[1] / 60;

          return (timeMinutes / paceMinutes).toPrecision(3);
      }


    }
  }
}
</script>

<style scoped>

</style>
