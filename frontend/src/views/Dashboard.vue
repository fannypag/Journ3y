<template>
  <div>
    <CRow>
      <CCol :xs="2">
        <CWidgetStatsF
          color="primary"
          :padding="false"
          value="23-11-2022"
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
          <CPaginationItem>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
      </CCol>
    </CRow>
  </div>
  <div>
    <Journal />
  </div>
</template>

<script>
  import Journal from './widgets/Journal.vue'

  export default {
    name: 'Dashboard',
    components: {
      Journal,
    },
  }
</script>
