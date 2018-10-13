<template>
    <p class="boutique-cd">{{remainingTime}}</p>
</template>

<script>
    import moment from 'moment'

    let self;

    export default {
        name: 'CountDown',
        data: function(){
            return{
                timer:'',
                start: '',
                end: '',
                interval: '',
                days:'',
                minutes:'',
                hours:'',
                seconds:''
            };
        },
        props: {
            date: {
                type: Date
            }
        },
        methods: {
            timerCount: function(start,end) {
                var now = new Date().getTime();

                var distance = start - now;
                var passTime =  end - now;

                if(distance < 0 && passTime < 0){
                    clearInterval(this.interval);
                    return;

                } else if(distance < 0 && passTime > 0){
                    this.calcTime(passTime);

                } else if( distance > 0 && passTime > 0 ){
                    this.calcTime(distance);
                }
            },
            calcTime: function(dist){
                this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((dist % (1000 * 60)) / 1000);

                if(this.hours < 10) this.hours = '0' + this.hours;
                if(this.minutes < 10) this.minutes = '0' + this.minutes;
                if(this.seconds < 10) this.seconds = '0' + this.seconds;
            }
        },
        computed: {
            remainingTime: function(){
                if(this.days.length == 0)
                    return '';

                return this.days + ' gün ' + this.hours + ':' + this.minutes + ':' + this.seconds;
            }
        },
        mounted(){
            this.start = new Date().getTime();
            this.end = new Date(this.date).getTime();
            this.timerCount(this.start,this.end);

            this.interval = setInterval(() => {
                this.timerCount(this.start,this.end);
            }, 1000);
        }
    }
</script>