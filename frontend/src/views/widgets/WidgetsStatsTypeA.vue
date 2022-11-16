<template>
  <CRow>
    <CCol :xs="6">
      <CWidgetStatsA href="#" class="mb-4" color="primary">
        <template #value>Apa yang kamu pikirkan?</template>
        <textarea class="mt-4" v-model="text"></textarea>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="6">
      <CWidgetStatsA href="#" class="mb-4" color="success">
        <template #value>Apa yang kamu pikirkan?</template>
        <textarea class="mt-4" v-model="text"></textarea>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>

  <CRow>
    <CCol :xs="6">
      <CWidgetStatsA href="#" class="mb-4" color="danger">
        <template #value>Apa yang kamu pikirkan?</template>
        <textarea class="mt-4" v-model="text"></textarea>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="6">
      <CWidgetStatsA href="#" class="mb-4" color="warning">
        <template #value>Apa yang kamu pikirkan?</template>
        <textarea class="mt-4" v-model="text"></textarea>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>
  <CRow>
    <CCol :xs="6">
      <CWidgetStatsA href="#" class="mb-4" color="info">
        <template #value>Apa yang kamu pikirkan?</template>
        <textarea class="mt-4" v-model="text"></textarea>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="6">
      <CWidgetStatsA href="#" class="mb-4" color="dark">
        <template #value>Apa yang kamu pikirkan?</template>
        <textarea class="mt-4" v-model="text"></textarea>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script></script>
