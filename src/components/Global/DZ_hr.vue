<template>
    <div v-if="!v" class="h-2 flex-col-center">
        <div class="w-full rounded-full bg-gradient-700" :class="i?'h-0.5':'h-1'"></div>
    </div>
    <div v-else class="h-full rounded-full bg-gradient-700" :class="i?'h-0.5':'h-1'"></div>
</template>
<script>
export default {
    name: "DZ_hr",
    props: { 
        v: Boolean, 
        i: Boolean,
    }
}
</script> 