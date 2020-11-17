import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import ChaptersIndex from './cruds/Chapters'
import ChaptersSingle from './cruds/Chapters/single'
import SandisIndex from './cruds/Sandis'
import SandisSingle from './cruds/Sandis/single'
import NamasIndex from './cruds/Namas'
import NamasSingle from './cruds/Namas/single'
import KarakasIndex from './cruds/Karakas'
import KarakasSingle from './cruds/Karakas/single'
import SamasasIndex from './cruds/Samasas'
import SamasasSingle from './cruds/Samasas/single'
import TadisasIndex from './cruds/Tadisas'
import TadisasSingle from './cruds/Tadisas/single'
import ArchasIndex from './cruds/Archas'
import ArchasSingle from './cruds/Archas/single'
import KibbidhanasIndex from './cruds/Kibbidhanas'
import KibbidhanasSingle from './cruds/Kibbidhanas/single'
import UnadikappasIndex from './cruds/Unadikappas'
import UnadikappasSingle from './cruds/Unadikappas/single'
import PostCategoriesIndex from './cruds/PostCategories'
import PostCategoriesSingle from './cruds/PostCategories/single'
import PostsIndex from './cruds/Posts'
import PostsSingle from './cruds/Posts/single'
import EnglishLessonsIndex from './cruds/EnglishLessons'
import EnglishLessonsSingle from './cruds/EnglishLessons/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    ChaptersIndex,
    ChaptersSingle,
    SandisIndex,
    SandisSingle,
    NamasIndex,
    NamasSingle,
    KarakasIndex,
    KarakasSingle,
    SamasasIndex,
    SamasasSingle,
    TadisasIndex,
    TadisasSingle,
    ArchasIndex,
    ArchasSingle,
    KibbidhanasIndex,
    KibbidhanasSingle,
    UnadikappasIndex,
    UnadikappasSingle,
    PostCategoriesIndex,
    PostCategoriesSingle,
    PostsIndex,
    PostsSingle,
    EnglishLessonsIndex,
    EnglishLessonsSingle
  },
  strict: debug
})
