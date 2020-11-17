import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'Dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'Users' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'Users' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'Users' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'Users' }
          }
        ]
      },
      {
        path: 'original-pali-gramma',
        name: 'original_pali_gramma',
        component: View,
        redirect: { name: 'chapters.index' },
        children: [
          {
            path: 'chapters',
            name: 'chapters.index',
            component: () => import('@cruds/Chapters/Index.vue'),
            meta: { title: 'သဒ္ဒါကဏ္ဍ' }
          },
          {
            path: 'chapters/create',
            name: 'chapters.create',
            component: () => import('@cruds/Chapters/Create.vue'),
            meta: { title: 'သဒ္ဒါကဏ္ဍ' }
          },
          {
            path: 'chapters/:id',
            name: 'chapters.show',
            component: () => import('@cruds/Chapters/Show.vue'),
            meta: { title: 'သဒ္ဒါကဏ္ဍ' }
          },
          {
            path: 'chapters/:id/edit',
            name: 'chapters.edit',
            component: () => import('@cruds/Chapters/Edit.vue'),
            meta: { title: 'သဒ္ဒါကဏ္ဍ' }
          },
          {
            path: 'sandis',
            name: 'sandis.index',
            component: () => import('@cruds/Sandis/Index.vue'),
            meta: { title: 'သန္ဓိပိုင်းကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'sandis/create',
            name: 'sandis.create',
            component: () => import('@cruds/Sandis/Create.vue'),
            meta: { title: 'သန္ဓိပိုင်းကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'sandis/:id',
            name: 'sandis.show',
            component: () => import('@cruds/Sandis/Show.vue'),
            meta: { title: 'သန္ဓိပိုင်းကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'sandis/:id/edit',
            name: 'sandis.edit',
            component: () => import('@cruds/Sandis/Edit.vue'),
            meta: { title: 'သန္ဓိပိုင်းကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'namas',
            name: 'namas.index',
            component: () => import('@cruds/Namas/Index.vue'),
            meta: { title: 'နာမကဏ္ဍကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'namas/create',
            name: 'namas.create',
            component: () => import('@cruds/Namas/Create.vue'),
            meta: { title: 'နာမကဏ္ဍကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'namas/:id',
            name: 'namas.show',
            component: () => import('@cruds/Namas/Show.vue'),
            meta: { title: 'နာမကဏ္ဍကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'namas/:id/edit',
            name: 'namas.edit',
            component: () => import('@cruds/Namas/Edit.vue'),
            meta: { title: 'နာမကဏ္ဍကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'karakas',
            name: 'karakas.index',
            component: () => import('@cruds/Karakas/Index.vue'),
            meta: { title: 'ကာရကကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'karakas/create',
            name: 'karakas.create',
            component: () => import('@cruds/Karakas/Create.vue'),
            meta: { title: 'ကာရကကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'karakas/:id',
            name: 'karakas.show',
            component: () => import('@cruds/Karakas/Show.vue'),
            meta: { title: 'ကာရကကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'karakas/:id/edit',
            name: 'karakas.edit',
            component: () => import('@cruds/Karakas/Edit.vue'),
            meta: { title: 'ကာရကကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'samasas',
            name: 'samasas.index',
            component: () => import('@cruds/Samasas/Index.vue'),
            meta: { title: 'သမာသ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'samasas/create',
            name: 'samasas.create',
            component: () => import('@cruds/Samasas/Create.vue'),
            meta: { title: 'သမာသ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'samasas/:id',
            name: 'samasas.show',
            component: () => import('@cruds/Samasas/Show.vue'),
            meta: { title: 'သမာသ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'samasas/:id/edit',
            name: 'samasas.edit',
            component: () => import('@cruds/Samasas/Edit.vue'),
            meta: { title: 'သမာသ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'tadisas',
            name: 'tadisas.index',
            component: () => import('@cruds/Tadisas/Index.vue'),
            meta: { title: 'တဒ္ဓိတ်ကျမ်းပါဠိ' }
          },
          {
            path: 'tadisas/create',
            name: 'tadisas.create',
            component: () => import('@cruds/Tadisas/Create.vue'),
            meta: { title: 'တဒ္ဓိတ်ကျမ်းပါဠိ' }
          },
          {
            path: 'tadisas/:id',
            name: 'tadisas.show',
            component: () => import('@cruds/Tadisas/Show.vue'),
            meta: { title: 'တဒ္ဓိတ်ကျမ်းပါဠိ' }
          },
          {
            path: 'tadisas/:id/edit',
            name: 'tadisas.edit',
            component: () => import('@cruds/Tadisas/Edit.vue'),
            meta: { title: 'တဒ္ဓိတ်ကျမ်းပါဠိ' }
          },
          {
            path: 'archas',
            name: 'archas.index',
            component: () => import('@cruds/Archas/Index.vue'),
            meta: { title: 'အာချာတ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'archas/create',
            name: 'archas.create',
            component: () => import('@cruds/Archas/Create.vue'),
            meta: { title: 'အာချာတ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'archas/:id',
            name: 'archas.show',
            component: () => import('@cruds/Archas/Show.vue'),
            meta: { title: 'အာချာတ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'archas/:id/edit',
            name: 'archas.edit',
            component: () => import('@cruds/Archas/Edit.vue'),
            meta: { title: 'အာချာတ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'kibbidhanas',
            name: 'kibbidhanas.index',
            component: () => import('@cruds/Kibbidhanas/Index.vue'),
            meta: { title: 'ကိဗ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'kibbidhanas/create',
            name: 'kibbidhanas.create',
            component: () => import('@cruds/Kibbidhanas/Create.vue'),
            meta: { title: 'ကိဗ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'kibbidhanas/:id',
            name: 'kibbidhanas.show',
            component: () => import('@cruds/Kibbidhanas/Show.vue'),
            meta: { title: 'ကိဗ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'kibbidhanas/:id/edit',
            name: 'kibbidhanas.edit',
            component: () => import('@cruds/Kibbidhanas/Edit.vue'),
            meta: { title: 'ကိဗ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'unadikappas',
            name: 'unadikappas.index',
            component: () => import('@cruds/Unadikappas/Index.vue'),
            meta: { title: 'ဥဏာဒ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'unadikappas/create',
            name: 'unadikappas.create',
            component: () => import('@cruds/Unadikappas/Create.vue'),
            meta: { title: 'ဥဏာဒ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'unadikappas/:id',
            name: 'unadikappas.show',
            component: () => import('@cruds/Unadikappas/Show.vue'),
            meta: { title: 'ဥဏာဒ်ကျမ်းရင်းပါဠိ' }
          },
          {
            path: 'unadikappas/:id/edit',
            name: 'unadikappas.edit',
            component: () => import('@cruds/Unadikappas/Edit.vue'),
            meta: { title: 'ဥဏာဒ်ကျမ်းရင်းပါဠိ' }
          }
        ]
      },
      {
        path: 'general-knowledge',
        name: 'general_knowledge',
        component: View,
        redirect: { name: 'post_categories.index' },
        children: [
          {
            path: 'post-categories',
            name: 'post_categories.index',
            component: () => import('@cruds/PostCategories/Index.vue'),
            meta: { title: 'Post Category' }
          },
          {
            path: 'post-categories/create',
            name: 'post_categories.create',
            component: () => import('@cruds/PostCategories/Create.vue'),
            meta: { title: 'Post Category' }
          },
          {
            path: 'post-categories/:id',
            name: 'post_categories.show',
            component: () => import('@cruds/PostCategories/Show.vue'),
            meta: { title: 'Post Category' }
          },
          {
            path: 'post-categories/:id/edit',
            name: 'post_categories.edit',
            component: () => import('@cruds/PostCategories/Edit.vue'),
            meta: { title: 'Post Category' }
          },
          {
            path: 'posts',
            name: 'posts.index',
            component: () => import('@cruds/Posts/Index.vue'),
            meta: { title: 'Post' }
          },
          {
            path: 'posts/create',
            name: 'posts.create',
            component: () => import('@cruds/Posts/Create.vue'),
            meta: { title: 'Post' }
          },
          {
            path: 'posts/:id',
            name: 'posts.show',
            component: () => import('@cruds/Posts/Show.vue'),
            meta: { title: 'Post' }
          },
          {
            path: 'posts/:id/edit',
            name: 'posts.edit',
            component: () => import('@cruds/Posts/Edit.vue'),
            meta: { title: 'Post' }
          },
          {
            path: 'english-lessons',
            name: 'english_lessons.index',
            component: () => import('@cruds/EnglishLessons/Index.vue'),
            meta: { title: 'English Lesson' }
          },
          {
            path: 'english-lessons/create',
            name: 'english_lessons.create',
            component: () => import('@cruds/EnglishLessons/Create.vue'),
            meta: { title: 'English Lesson' }
          },
          {
            path: 'english-lessons/:id',
            name: 'english_lessons.show',
            component: () => import('@cruds/EnglishLessons/Show.vue'),
            meta: { title: 'English Lesson' }
          },
          {
            path: 'english-lessons/:id/edit',
            name: 'english_lessons.edit',
            component: () => import('@cruds/EnglishLessons/Edit.vue'),
            meta: { title: 'English Lesson' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})