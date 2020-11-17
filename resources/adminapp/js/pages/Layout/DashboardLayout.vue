<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'Dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
          title: 'User Management',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'Permissions',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'Roles',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            },
            {
              title: 'Users',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            }
          ]
        },
        {
          title: 'သဒ္ဒါကြီးကျမ်းရင်းပါဠိ',
          icon: 'table_view',
          path: { name: 'original_pali_gramma' },
          gate: 'original_pali_gramma_access',
          children: [
            {
              title: 'သဒ္ဒါကဏ္ဍ',
              icon: 'table_view',
              path: { name: 'chapters.index' },
              gate: 'chapter_access'
            },
            {
              title: 'သန္ဓိပိုင်းကျမ်းရင်းပါဠိ',
              icon: 'table_view',
              path: { name: 'sandis.index' },
              gate: 'sandi_access'
            },
            {
              title: 'နာမကဏ္ဍကျမ်းရင်းပါဠိ',
              icon: 'table_view',
              path: { name: 'namas.index' },
              gate: 'nama_access'
            },
            {
              title: 'ကာရကကျမ်းရင်းပါဠိ',
              icon: 'table_view',
              path: { name: 'karakas.index' },
              gate: 'karaka_access'
            },
            {
              title: 'သမာသ်ကျမ်းရင်းပါဠိ',
              icon: 'table_view',
              path: { name: 'samasas.index' },
              gate: 'samasa_access'
            },
            {
              title: 'တဒ္ဓိတ်ကျမ်းပါဠိ',
              icon: 'table_view',
              path: { name: 'tadisas.index' },
              gate: 'tadisa_access'
            },
            {
              title: 'အာချာတ်ကျမ်းရင်းပါဠိ',
              icon: 'table_view',
              path: { name: 'archas.index' },
              gate: 'archa_access'
            },
            {
              title: 'ကိဗ်ကျမ်းရင်းပါဠိ',
              icon: 'table_view',
              path: { name: 'kibbidhanas.index' },
              gate: 'kibbidhana_access'
            },
            {
              title: 'ဥဏာဒ်ကျမ်းရင်းပါဠိ',
              icon: 'table_view',
              path: { name: 'unadikappas.index' },
              gate: 'unadikappa_access'
            }
          ]
        },
        {
          title: 'General Knowledge',
          icon: 'table_view',
          path: { name: 'general_knowledge' },
          gate: 'general_knowledge_access',
          children: [
            {
              title: 'Post Category',
              icon: 'table_view',
              path: { name: 'post_categories.index' },
              gate: 'post_category_access'
            },
            {
              title: 'Post',
              icon: 'table_view',
              path: { name: 'posts.index' },
              gate: 'post_access'
            },
            {
              title: 'English Lesson',
              icon: 'table_view',
              path: { name: 'english_lessons.index' },
              gate: 'english_lesson_access'
            }
          ]
        }
      ]
    }
  }
}
</script>
