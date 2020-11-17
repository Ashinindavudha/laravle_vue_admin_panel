<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">Edit English Lesson</h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <label>English Lesson Post Category</label>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.post_category_id !== null,
                      'is-focused': activeField == 'post_category'
                    }"
                  >
                    <label class="bmd-label-floating"
                      >English Lesson Post Category</label
                    >
                    <v-select
                      name="post_category"
                      label="title"
                      :key="'post_category-field'"
                      :value="entry.post_category_id"
                      :options="lists.post_category"
                      :reduce="entry => entry.id"
                      @input="updatePostCategory"
                      @search.focus="focusField('post_category')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label class="required">English Lesson Post Lesson</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.title,
                        'is-focused': activeField == 'title'
                      }"
                    >
                      <label class="bmd-label-floating"
                        >English Lesson Post Lesson</label
                      >
                      <input
                        class="form-control"
                        type="text"
                        :value="entry.title"
                        @input="updateTitle"
                        @focus="focusField('title')"
                        @blur="clearFocus"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>English Lesson Description</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.description"
                      @input="updateDescription"
                    >
                    </ckeditor>
                  </div>
                  <div class="form-group">
                    <label>English Lesson File</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating"
                        >English Lesson File</label
                      >
                    </div>
                    <attachment
                      :route="getRoute('english-lessons')"
                      :collection-name="'english_lesson_lesson_img'"
                      :media="entry.lesson_img"
                      :model-id="$route.params.id"
                      :max-file-size="4"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertLessonImgFile"
                      @file-removed="removeLessonImgFile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                Save
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    ClassicEditor,
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: '',
      editor: ClassicEditor
    }
  },
  computed: {
    ...mapGetters('EnglishLessonsSingle', ['entry', 'loading', 'lists'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('EnglishLessonsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setPostCategory',
      'setTitle',
      'setDescription',
      'insertLessonImgFile',
      'removeLessonImgFile'
    ]),
    updatePostCategory(value) {
      this.setPostCategory(value)
    },
    updateTitle(e) {
      this.setTitle(e.target.value)
    },
    updateDescription(value) {
      this.setDescription(value)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'english_lessons.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>