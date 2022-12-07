<template>
    <button :class="mode">
        <slot />
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        mode: String,
    }
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #03045e;
  border: 1px solid #03045e;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #023e8a;
  border-color: #023e8a;
}
.default {
  background-color: transparent;
  color: #03045e;
  border: none;
}
.default:hover,
.default:active {
  background-color: #eee;
}

</style>