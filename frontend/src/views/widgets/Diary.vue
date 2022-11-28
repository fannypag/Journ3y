<template>
  <CForm>
        <div class="mb-3">
            <CFormInput
                id="exampleFormControlInput1"
                type="email"
                placeholder="Cerita Hari Ini"
            />
        </div>
        <div class="mb-3">
            <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="10"
            ></CFormTextarea>
        </div>
    </CForm>
    <div class="mt-4">
        <router-link
        to="/dashboard"
        custom
        v-slot="{ navigate }"
        >
        <CButton
            @click="navigate"
            role="link"
        >
            Save Diary
        </CButton>
        </router-link>
    </div>
</template>

