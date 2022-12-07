<template>
    <base-card>
        <h2>Register Here</h2>
        <from>
            <div class="form-control">
                <label for="fullname">Full name</label>
                <input type="text" name="fullname" id="fullname" />
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div class="form-control">
                <label for="password2">Confirm-Password</label>
                <input type="password" name="password2" id="passwor2" />
            </div>
            <div>
                <base-button type="submit">Register</base-button>
            </div>
        </from>
    </base-card>
</template>

<script>
export default {
    name: 'Register',
}
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
  border-color: #f7ebff;
  background-color: #3a0061;
}
.form-control {
  margin: 1rem 0;
}
</style>