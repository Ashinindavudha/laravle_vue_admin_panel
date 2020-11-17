<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">Create Post</h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <label>Post Category</label>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.post_category_id !== null,
                      'is-focused': activeField == 'post_category'
                    }"
                  >
                    <label class="bmd-label-floating">Post Category</label>
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
                    <label class="required">Post Title</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating">Post Title</label>
                      <ckeditor
                        :editor="editor"
                        :value="entry.post_title"
                        @input="updatePostTitle"
                        required
                      >
                      </ckeditor>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="required">Post Description</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating">Post Description</label>
                      <ckeditor
                        :editor="editor"
                        :value="entry.description"
                        @input="updateDescription"
                        required
                      >
                      </ckeditor>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="required">Slug</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.slug,
                        'is-focused': activeField == 'slug'
                      }"
                    >
                      <label class="bmd-label-floating">Post Slug</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="entry.slug"
                        @input="updateSlug"
                        @focus="focusField('slug')"
                        @blur="clearFocus"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Post Image</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating">Post Image</label>
                    </div>
                    <attachment
                      :route="getRoute('posts')"
                      :collection-name="'post_post_image'"
                      :media="entry.post_image"
                      :max-file-size="10"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertPostImageFile"
                      @file-removed="removePostImageFile"
                    />
                  </div>
                  <label>Post Uploader</label>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.user_id !== null,
                      'is-focused': activeField == 'user'
                    }"
                  >
                    <label class="bmd-label-floating">Post Uploader</label>
                    <v-select
                      name="user"
                      label="name"
                      :key="'user-field'"
                      :value="entry.user_id"
                      :options="lists.user"
                      :reduce="entry => entry.id"
                      @input="updateUser"
                      @search.focus="focusField('user')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div class="form-group bmd-form-group form-check has-items">
                    <label class="bmd-label-floating">Publish Post</label>
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.publish"
                        :checked="entry.publish"
                        @change="updatePublish"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >Publish</label
                    >
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
    ...mapGetters('PostsSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('PostsSingle', [
      'storeData',
      'resetState',
      'setPostCategory',
      'setPostTitle',
      'setDescription',
      'setSlug',
      'insertPostImageFile',
      'removePostImageFile',
      'setUser',
      'setPublish',
      'fetchCreateData'
    ]),
    updatePostCategory(value) {
      this.setPostCategory(value)
    },
    updatePostTitle(value) {
      this.setPostTitle(value)
    },
    updateDescription(value) {
      this.setDescription(value)
    },
    updateSlug(e) {
      this.setSlug(e.target.value)
    },
    updateUser(value) {
      this.setUser(value)
    },
    updatePublish(e) {
      this.setPublish(e.target.checked)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'posts.index' })
          this.$eventHub.$emit('create-success')
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