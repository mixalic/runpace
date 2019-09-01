<template>
  <div class="container-fluid">
    <div class="col-md-4 col-sm-12" style="margin-top: 15px; padding-left: 0px; padding-right: 0px;">
      <div class="card">
        <div class="card-header">
          Калькулятор темпа
        </div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <form>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <font-awesome-icon icon="running" fixed-width/>
                </span>
              </div>
              <input
                      type="text"
                      id="pace"
                      class="form-control"
                      aria-describedby="paceHelp"
                      :placeholder="calcPace"
                      v-model="pace"
                      v-mask="'##:##'"
              >
              <small id="paceHelp" class="form-text text-muted">Введите темп в формате мин/км, (например 05:30 мин/км).<br/>Или оставьте поле пустым для его автоматического расчета.</small>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="clock" fixed-width/></span>
              </div>
              <input
                      type="text"
                      id="time"
                      class="form-control"
                      aria-describedby="timeHelp"
                      :placeholder="calcTime"
                      v-model="time"
                      v-mask="'##:##:##'"
              >
              <small id="timeHelp" class="form-text text-muted">Введите время забега в формате ЧЧ:ММ:СС (например 02:20:42).<br/>Или оставьте поле пустым для его автоматического расчета.</small>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="route" fixed-width/></span>
              </div>
              <input
                      type="number"
                      class="form-control"
                      id="distance"
                      :placeholder="calcDistance"
                      aria-describedby="distanceHelp"
                      v-model="distance"
              >
              <small id="distanceHelp" class="form-text text-muted">Введите или выберите дистанцию забега (например 21.1 или 5 км).<br/>Или оставьте поле пустым для его автоматического расчета.</small>
            </div>

          </form>
        </div>
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
        return '--:--/км';
      } else {

        let timeArray = [0, 0, 0],
                timeMinutes = 0,
                minutes = 0,
                seconds = 0;

        timeArray = this.time.split(":");

        if(timeArray[2])
          timeMinutes = +timeArray[0] * 60 + +timeArray[1] + timeArray[2] / 60;
        else
          timeMinutes = +timeArray[0] * 60 + +timeArray[1];


        let distance = this.distance;
        let pace = timeMinutes / distance * 60;

        minutes = Math.floor(pace / 60);
        seconds = Math.floor(pace % 60);

        return `${minutes.pad()}:${seconds.pad()}`;
      }
    },

    calcTime() {
      if (this.distance == '' || this.pace == '') {
        return '--:--:--';
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

        hours = Math.floor(timeSeconds / 3600);
        minutes = Math.floor((timeSeconds % 3600) / 60);
        seconds = Math.floor(timeSeconds % 60);

        return `${hours.pad()}:${minutes.pad()}:${seconds.pad()}`;
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
  .input-group>.custom-select:not(:last-child), .input-group>.form-control:not(:last-child) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
</style>
