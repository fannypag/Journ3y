<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <CSidebarBrand>
      <CAvatar :src="logoJourney" />
    </CSidebarBrand>
    <AppSidebarNav />
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="$store.commit('toggleUnfoldable')"
    />
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
import logoJourney from "@/assets/images/journey.png"
// import CIcon from '@coreui/icons-vue'
// import { CAvatarPlugin } from '@coreui/vue'
// import { CImage } from '@coreui/vue'

export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
    // CIcon,
    // CAvatarPlugin
},
  setup() {
    const store = useStore()
    return {
      logoNegative,
      sygnet,
      logoJourney,
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>
