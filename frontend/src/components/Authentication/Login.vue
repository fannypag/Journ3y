<template>
    <base-card>
        <h2>Login Here</h2>
        <from>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
            </div>
            <div>
                <base-button type="submit">Login</base-button>
            </div>
        </from>
    </base-card>
</template>

<script>
export default {
    name: 'Login',
};
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
input:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
.form-control {
  margin: 1rem 0;
}
</style>