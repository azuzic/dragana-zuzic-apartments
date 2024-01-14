<template>
    <div class="relative w-full bg-slate-50 | drop-shadow-sm rounded-lg" :class="i ? '' : 'py-4 px-8'">
        <div class="relative z-10 text-slate-950 h-fit" :class="i ? 'py-2' : 'py-4'">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "DZ_Block",
    props: {
        i: Boolean
    }
}
</script>