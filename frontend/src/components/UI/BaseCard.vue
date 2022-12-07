<template>
    <div>
        <slot />
    </div>
</template>


<script>
export default {
    name: 'BaseCard',
}
</script>

<style scoped>
div {
    border-radius: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 1rem auto;
    max-width: 40rem;
}
</style>