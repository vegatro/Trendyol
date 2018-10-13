<template>
    <div class="boutique">
        <a href="#">
            <img :src="image" />
            <h4>
                <span>{{name}}</span>
                <count-down :date="new Date(date)" />
            </h4>
        </a>
    </div>
</template>

<script>
    import CountDown from '@/components/CountDown'

    let self;

    export default {
        name: 'Boutique',
        components: {
            CountDown
        },
        props: {
            image: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            date: {
                type: String
            }
        },
        mounted: function() {
            self = this;
        }
    }
</script>