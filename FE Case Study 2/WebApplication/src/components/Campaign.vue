<template>
    <div class="campaign">
        <a href="#" :title="name">
            <img :src="image" />
        </a>
    </div>
</template>

<script>
    export default {
        name: 'Campaign',
        props: {
            image: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            }
        }
    }
</script>