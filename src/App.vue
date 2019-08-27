<template>
  <div class="container">

    <h1>Калькулятор темпа</h1>

    <form>
      <div class="form-group">
        <label for="pace">Темп</label>
        <input
                type="text"
                class="form-control"
                id="pace"
                :placeholder="calcPace"
                aria-describedby="paceHelp"
                v-model="pace"
        >
        <small id="paceHelp" class="form-text text-muted">Введите темп в формате МИНУТЫ:СЕКУНДЫ (например 5:40 мин/км)</small>
      </div>

      <div class="form-group">
        <label for="time">Время</label>
        <input
                type="text"
                class="form-control"
                id="time"
                :placeholder="calcTime"
                aria-describedby="timeHelp"
                v-model="time"
        >
        <small id="timeHelp" class="form-text text-muted">Введите предпологаемое время забега в формате ЧАСЫ:МИНУТЫ:СЕКУНДЫ (например 00:01:35)</small>
      </div>

      <div class="form-group">
        <label for="distance">Дистанция</label>
        <input
                type="text"
                class="form-control"
                id="distance"
                :placeholder="calcDistance"
                aria-describedby="distanceHelp"
                v-model="distance"
        >
        <small id="distanceHelp" class="form-text text-muted">Введите или выберите дистанцию забега (например 10 км)</small>
      </div>
    </form>

    <!--<div>
      <Select2
              theme="bootstrap4"
              v-model="distance"
              :options="myOptions"
              :settings="{ placeholder: '0 км', tags: true }"
              @change="myChangeEvent($event)"
              @select="mySelectEvent($event)"
      />
    </div>-->

  </div>
</template>

<script>
export default {
  //components: {Select2},
  data(){
    return {
      pace: '',
      time: '',
      distance: '',
      /*selectDistance: '',
      //myOptions: ['Марафон - 42.2 км', 'Полумарафон - 21.1 км', '15 км', '10 км', '5 км', '3 км', '1 км']
      myOptions: [
              {id: 42.2, text: '42.2 км (Марафон)'},
              {id: 21.1, text: '21.1 км (Полумарафон)'},
              {id: 15, text: '15 км'},
              {id: 10, text: '10 км'},
              {id: 5, text: '5 км'},
              {id: 3, text: '3 км'},
              {id: 1, text: '1 км'},
      ]*/
    }
  },
  /*methods: {
    myChangeEvent(val){
      console.log(val);
    },
    mySelectEvent({id, text}){
      console.log({id, text})
    }
  },*/
  computed: {
    calcPace(){

      if (this.distance == '' || this.time == '') {
        return '00:00/км';
      } else {

        let timeArray = [0, 0, 0],
                timeMinutes = 0,
                minutes = '',
                seconds = '';

        timeArray = this.time.split(":");
        timeMinutes = +timeArray[0] * 60 + +timeArray[1] + timeArray[2] / 60;

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

        console.log(paceSeconds, '*', distance, '=',timeSeconds,  )

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
