<template>
    <div class="container-fluid">
        <form @submit.prevent="submitForm">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div
                            class="card-header card-header-primary card-header-icon"
                        >
                            <div class="card-icon">
                                <i class="material-icons">add</i>
                            </div>
                            <h4 class="card-title">Create သဒ္ဒါကဏ္ဍ</h4>
                        </div>
                        <div class="card-body">
                            <back-button></back-button>
                        </div>
                        <div class="card-body">
                            <bootstrap-alert />
                            <div class="row">
                                <div class="col-md-12">
                                    <div
                                        class="form-group bmd-form-group"
                                        :class="{
                                            'has-items': entry.title,
                                            'is-focused': activeField == 'title'
                                        }"
                                    >
                                        <label
                                            class="bmd-label-floating required"
                                            >သဒ္ဒါကဏ္ဍ</label
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
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            status: "",
            activeField: ""
        };
    },
    computed: {
        ...mapGetters("ChaptersSingle", ["entry", "loading"])
    },
    beforeDestroy() {
        this.resetState();
    },
    methods: {
        ...mapActions("ChaptersSingle", [
            "storeData",
            "resetState",
            "setTitle"
        ]),
        updateTitle(e) {
            this.setTitle(e.target.value);
        },
        submitForm() {
            this.storeData()
                .then(() => {
                    this.$router.push({ name: "chapters.index" });
                    this.$eventHub.$emit("create-success");
                })
                .catch(error => {
                    this.status = "failed";
                    _.delay(() => {
                        this.status = "";
                    }, 3000);
                });
        },
        focusField(name) {
            this.activeField = name;
        },
        clearFocus() {
            this.activeField = "";
        }
    }
};
</script>
