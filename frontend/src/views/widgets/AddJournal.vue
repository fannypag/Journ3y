<template>
    <div>
        <CRow>
        <CCol :xs="3">
            <CWidgetStatsF
            color="primary"
            :padding="false"
            :value="thedate"
            >
            <template #icon>
                <CIcon icon="cil-calendar" size="xxl" />
            </template>
            </CWidgetStatsF>
        </CCol>
        </CRow>
    </div>

    <div >
                
        <!-- <div v-else> -->
            <CRow class="mt-2 mb-4">
                <CCol :sm="6">
                    <CCard>
                        <CCardBody color="primary">
                            <CCardTitle>Cerita hari ini</CCardTitle>
                        <CCardText>
                        <CFormTextarea v-model="add1"></CFormTextarea>
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
                            <CFormTextarea v-model="add2"></CFormTextarea>
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
                            <CFormTextarea v-model="add3"></CFormTextarea>
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
                            <CFormTextarea v-model="add4"></CFormTextarea>
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
                            <CFormTextarea v-model="add5"></CFormTextarea>
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
                            <CFormTextarea v-model="add6"></CFormTextarea>
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
                @click="add()"
            >
                Add Journal
            </CButton>
        <!-- </div> -->
    </div>

</template>

<script>

    // import axios from 'axios';
    import API from '@/api';
    import { CFormTextarea } from '@coreui/vue';
    import moment from 'moment'

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
            data : ""

        };
    },
    async created() {
        const response = await API.getJournalsByDate(this.thedate);
        
        this.diaries = response;
         
    },
    methods: {
        async getDate(day){
              const start = this.date;
              const newDate = moment(start);
              const mydate = newDate.add(day, "day").format("YYYY-MM-DD");
              this.date = mydate;
        },
        async add(){
            console.log("test")
            let diaries = null
            if(this.diaries[0]){
                diaries = this.diaries[0]
            }
            else{
                diaries = {

                }
            }
            diaries.date = this.thedate
            diaries.desc1 = this.add1
            diaries.desc2 = this.add2
            diaries.desc3 = this.add3
            diaries.desc4 = this.add4
            diaries.desc5 = this.add5
            diaries.desc6 = this.add6
            delete diaries._id
            console.log(diaries)
            const response = await API.saveJournal(diaries)

            this.$router.push({name : 'Dashboard', params: {message: response.message}});
        }
        
    },

    components: { CFormTextarea }
}
</script>