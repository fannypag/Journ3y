<template>
    <CRow class="mt-2 mb-4">
        <CCol :sm="6">
            <CCard>
                <CCardBody color="primary">
                <CCardTitle>Special title treatment</CCardTitle>
                <CCardText>
                    <textarea class="mt-4" v-model="text"></textarea>
                </CCardText>
                <div>
                    <router-link
                    to="/diary"
                    custom
                    v-slot="{ navigate }"
                    >
                    <CButton
                        @click="navigate"
                        role="link"
                    >
                        Edit Diary
                    </CButton>
                    </router-link>
                </div>
                </CCardBody>
            </CCard>
            </CCol>
            <CCol :sm="6">
            <CCard>
                <CCardBody>
                <CCardTitle>Special title treatment</CCardTitle>
                <CCardText>
                    <textarea class="mt-4" v-model="text"></textarea>
                </CCardText>
                <div>
                    <router-link
                    to="/diary"
                    custom
                    v-slot="{ navigate }"
                    >
                    <CButton
                        @click="navigate"
                        role="link"
                    >
                        Edit Diary
                    </CButton>
                    </router-link>
                </div>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>

    <CRow class="mt-2 mb-4">
        <CCol :sm="6">
            <CCard>
                <CCardBody>
                <CCardTitle>Special title treatment</CCardTitle>
                <CCardText>
                    <textarea class="mt-4" v-model="text"></textarea>
                </CCardText>
                <div>
                    <router-link
                    to="/diary"
                    custom
                    v-slot="{ navigate }"
                    >
                    <CButton
                        @click="navigate"
                        role="link"
                    >
                        Edit Diary
                    </CButton>
                    </router-link>
                </div>
                </CCardBody>
            </CCard>
            </CCol>
            <CCol :sm="6">
            <CCard>
                <CCardBody>
                <CCardTitle>Special title treatment</CCardTitle>
                <CCardText>
                    <textarea class="mt-4" v-model="text"></textarea>
                </CCardText>
                <div>
                    <router-link
                    to="/diary"
                    custom
                    v-slot="{ navigate }"
                    >
                    <CButton
                        @click="navigate"
                        role="link"
                    >
                        Edit Diary
                    </CButton>
                    </router-link>
                </div>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>

    <CRow class="mt-2 mb-4">
        <CCol :sm="6">
            <CCard>
                <CCardBody>
                <CCardTitle>Special title treatment</CCardTitle>
                <CCardText>
                    <textarea class="mt-4" v-model="text"></textarea>
                </CCardText>
                <div>
                    <router-link
                    to="/diary"
                    custom
                    v-slot="{ navigate }"
                    >
                    <CButton
                        @click="navigate"
                        role="link"
                    >
                        Edit Diary
                    </CButton>
                    </router-link>
                </div>
                </CCardBody>
            </CCard>
            </CCol>
            <CCol :sm="6">
            <CCard>
                <CCardBody>
                <CCardTitle>Special title treatment</CCardTitle>
                <CCardText>
                    <textarea class="mt-4" v-model="text"></textarea>
                </CCardText>
                <div>
                    <router-link
                    to="/diary"
                    custom
                    v-slot="{ navigate }"
                    >
                    <CButton
                        @click="navigate"
                        role="link"
                    >
                        Edit Diary
                    </CButton>
                    </router-link>
                </div>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
</template>
