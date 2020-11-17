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
              <h4 class="card-title">Create တဒ္ဓိတ်ကျမ်းပါဠိ</h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <label>သဒ္ဒါကဏ္ဍ</label>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.chapter_id !== null,
                      'is-focused': activeField == 'chapter'
                    }"
                  >
                    <label class="bmd-label-floating">သဒ္ဒါကဏ္ဍ</label>
                    <v-select
                      name="chapter"
                      label="title"
                      :key="'chapter-field'"
                      :value="entry.chapter_id"
                      :options="lists.chapter"
                      :reduce="entry => entry.id"
                      @input="updateChapter"
                      @search.focus="focusField('chapter')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label class="required">သုတ်စဉ်ပါဠိ</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating">သုတ်စဉ်ပါဠိ</label>
                      <ckeditor
                        :editor="editor"
                        :value="entry.title"
                        @input="updateTitle"
                        required
                      >
                      </ckeditor>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="required">သုတ်စဉ်အဖွင့်</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating">သုတ်စဉ်အဖွင့်</label>
                      <ckeditor
                        :editor="editor"
                        :value="entry.definition"
                        @input="updateDefinition"
                        required
                      >
                      </ckeditor>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Remark</label>
                    <div class="form-group bmd-form-group has-items">
                      <label class="bmd-label-floating">Remark</label>
                      <ckeditor
                        :editor="editor"
                        :value="entry.remark"
                        @input="updateRemark"
                      >
                      </ckeditor>
                    </div>
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

export default {
  components: {
    ClassicEditor
  },
  data() {
    return {
      status: '',
      activeField: '',
      editor: ClassicEditor
    }
  },
  computed: {
    ...mapGetters('TadisasSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('TadisasSingle', [
      'storeData',
      'resetState',
      'setChapter',
      'setTitle',
      'setDefinition',
      'setRemark',
      'fetchCreateData'
    ]),
    updateChapter(value) {
      this.setChapter(value)
    },
    updateTitle(value) {
      this.setTitle(value)
    },
    updateDefinition(value) {
      this.setDefinition(value)
    },
    updateRemark(value) {
      this.setRemark(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'tadisas.index' })
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