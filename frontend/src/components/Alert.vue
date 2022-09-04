<script setup>

defineProps({
    color: String,

})
</script>

<template>

    <div :class="`alert alert-${color}`">
        <slot>Fallback mesage Alert</slot>

    </div>

</template>



<style>
.alert {
    padding: .5rem;
    border-radius: .3rem;
}

.alert-red {
    border: 1px solid red;
    background: 1px solid rgb(254, 170, 170)
}

.alert-blue {
    border: 1px solid #084298;
    background: #cfe2ff;
}
</style>