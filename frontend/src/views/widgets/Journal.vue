<template>
    <div>
        <CRow>
        <CCol :xs="3" v-for="(diary, thedate) in diaries" :key="thedate">
            <CWidgetStatsF
            color="primary"
            :padding="false"
            :value="new Date(diary.date).toISOString().split('T')[0]"
            >
            <template #icon>
                <CIcon icon="cil-calendar" size="xxl" />
            </template>
            </CWidgetStatsF>
        </CCol>
        <CCol :xs="3">
            <CPagination aria-label="Page navigation example">
            <CPaginationItem aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            <CPaginationItem aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
            </CPagination>
        </CCol>
        </CRow>
    </div>

    <div v-for="(diary, thedate) in diaries" :key="thedate">
        <div v-if="diary.date !== thedate">
            <CRow class="mt-2 mb-4">
                <CCol :sm="6">
                    <CCard>
                        <CCardBody color="primary">
                            <CCardTitle>Cerita hari ini</CCardTitle>
                        <CCardText>
                        <CFormTextarea v-model="add1"></CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                        >
                            Add Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol :sm="6">
                    <CCard>
                        <CCardBody>
                        <CCardTitle>Bagaimana Kesehatanmu hari ini?</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="add2"></CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                        >
                            Add Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow class="mt-2 mb-4">
                <CCol :sm="6">
                    <CCard>
                        <CCardBody>
                        <CCardTitle>Yang paling disyukuri hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="add3"></CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                        >
                            Add Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol :sm="6">
                    <CCard >
                        <CCardBody>
                        <CCardTitle>Inspirasi yang didapat hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="add4"></CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                        >
                            Add Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow class="mt-2 mb-4">
                <CCol :sm="6">
                    <CCard >
                        <CCardBody>
                        <CCardTitle>Hal yang telah dicapai hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="add5"></CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                        >
                            Add Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol :sm="6">
                    <CCard >
                        <CCardBody>
                        <CCardTitle>Keuangan di hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="add6"></CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                        >
                            Add Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CButton
                @click="add()"
            >
                Add Diary
            </CButton>
        </div>
        
        <div v-else>
            <CRow class="mt-2 mb-4">
                <CCol :sm="6">
                    <CCard>
                        <CCardBody color="primary">
                            <CCardTitle>Cerita hari ini</CCardTitle>
                        <CCardText>
                        <CFormTextarea v-model="updated1">{{diary.desc1}}</CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                            @click="update(diary._id)"
                        >
                            Save Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol :sm="6">
                    <CCard>
                        <CCardBody>
                        <CCardTitle>Bagaimana Kesehatanmu hari ini?</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="updated2">{{diary.desc2}}</CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                            @click="update(diary._id)"
                        >
                            Save Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow class="mt-2 mb-4">
                <CCol :sm="6">
                    <CCard>
                        <CCardBody>
                        <CCardTitle>Yang paling disyukuri hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="updated3">{{diary.desc3}}</CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                            @click="update(diary._id)"
                        >
                            Save Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol :sm="6">
                    <CCard >
                        <CCardBody>
                        <CCardTitle>Inspirasi yang didapat hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="updated4">{{diary.desc4}}</CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                            @click="update(diary._id)"
                        >
                            Save Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow class="mt-2 mb-4">
                <CCol :sm="6">
                    <CCard >
                        <CCardBody>
                        <CCardTitle>Hal yang telah dicapai hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="updated5">{{diary.desc5}}</CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                            @click="update(diary._id)"
                        >
                            Save Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                    </CCol>
                    <CCol :sm="6">
                    <CCard >
                        <CCardBody>
                        <CCardTitle>Keuangan di hari ini</CCardTitle>
                        <CCardText>
                            <CFormTextarea v-model="updated6">{{diary.desc6}}</CFormTextarea>
                        </CCardText>
                        <!-- <CButton
                            @click="update(diary._id)"
                        >
                            Save Diary
                        </CButton> -->
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CButton
                @click="update(diary._id)"
            >
                Save Diary
            </CButton>
        </div>
    </div>

</template>

<script>
    // import axios from 'axios';
    import API from '@/api';
    import { CFormTextarea } from '@coreui/vue';

    export default {
    data() {
        return {
            diaries: [],
            thedate: new Date().toISOString().split("T")[0],
            
            add1 : "",
            add2 : "",
            add3 : "",
            add4 : "",
            add5 : "",
            add6 : "",
            
            updated1 : "",
            updated2 : "",
            updated3 : "",
            updated4 : "",
            updated5 : "",
            updated6 : "",

        };
    },
    async created() {
        const response = await API.getJournalsByDate(this.thedate);
        
        this.diaries = response;
         
    },
    methods: {
        async add(){
            let diaries = this.diaries[0]
            diaries.date = this.thedate
            diaries.desc1 = this.add1
            diaries.desc2 = this.add2
            diaries.desc3 = this.add3
            diaries.desc4 = this.add4
            diaries.desc5 = this.add5
            diaries.desc6 = this.add6

            const response = await API.saveJournal(diaries)
            // console.log("ini api",response)
            this.$router.push({name : 'Dashboard', params: {message: response.message}});
        },
        async update(id){
            let diaries = this.diaries[0]
            diaries.desc1 = this.updated1
            diaries.desc2 = this.updated2
            diaries.desc3 = this.updated3
            diaries.desc4 = this.updated4
            diaries.desc5 = this.updated5
            diaries.desc6 = this.updated6

            const response = await API.updateJournal(id, diaries)
            // console.log("ini api",response)
            this.$router.push({name : 'Dashboard', params: {message: response.message}});
        },
        
    },

    components: { CFormTextarea }
}
</script>