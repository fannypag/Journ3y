<template>
  <div>
    <CCard>
        <CCardBody>
        <CCardTitle v-model="title">Special title treatment</CCardTitle>
        </CCardBody>
    </CCard>
    <CCard class="mt-4">
        <textarea v-model="description" rows="20"></textarea>
    </CCard>
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
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Diary',
        components: {
        },
        data() {
            return {
            items: [],
            };
        },

        created() {
            this.getJournalsById();
        },

        methods: {
            // Get Diary
            async getJournalById() {
            try {
                const response = await axios.get("mongodb+srv://journ3y:journey@journ3y.hbejhsm.mongodb.net/?retryWrites=true&w=majority/Journals/${this.$route.params.id}");
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
            },

            //Update Diary
            async updateJournal() {
            try {
                await axios.put(
                `mongodb+srv://journ3y:journey@journ3y.hbejhsm.mongodb.net/?retryWrites=true&w=majority/Journals/${this.$route.params.id}`,
                {
                    title : this.title,
                    desc : this.description,
                }
                );
                this.title = "";
                this.description = "";
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
            },

            //Save Journal
            async saveJournal() {
            try {
                const response = await axios.post("mongodb+srv://journ3y:journey@journ3y.hbejhsm.mongodb.net/?retryWrites=true&w=majority/Journals");
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
            },
        
            // Delete Journal
            async deleteJournal(id) {
            try {
                await axios.delete(`mongodb+srv://journ3y:journey@journ3y.hbejhsm.mongodb.net/?retryWrites=true&w=majority/Journals/${id}`);
                this.getJournals();
            } catch (err) {
                console.log(err);
            }
            },
        },
    }
</script>
