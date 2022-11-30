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
            <CPaginationItem aria-label="Previous" @click="getDate(-1)">
                <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            <CPaginationItem aria-label="Next" @click="getDate(1)">
                <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
            </CPagination>
        </CCol>
        </CRow>
    </div>
    
    <div v-if="diaries.length===0">
        <CCardTitle>Tidak ada Jurnal pada tanggal ini, silakan tambahkan pada fitur "Add Journal"</CCardTitle>
    </div>
    <div v-else v-for="(diary, thedate) in diaries" :key="thedate">
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

        <CRow>
            <CCol>
                <CButton
                    @click="update(diary._id)"
                >
                    Save Journal
                </CButton>
            </CCol>
            <CCol>
                <CButton
                    @click="deleteJ(diary._id)"
                >
                    Delete Journal
                </CButton>
            </CCol>
        </CRow>
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
            updated1 : "",
            updated2 : "",
            updated3 : "",
            updated4 : "",
            updated5 : "",
            updated6 : "",
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
              this.diaries = await API.getJournalsByDate(this.date);
              console.log(this.date);
              console.log(this.diaries);
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
        async deleteJ(id){
            let diaries = this.diaries[0]

            const response = await API.deleteJournal(id, diaries)
            // console.log("ini api",response)
            this.$router.push({name : 'Dashboard', params: {message: response.message}});
        },
        
    },

    components: { CFormTextarea }
}
</script>