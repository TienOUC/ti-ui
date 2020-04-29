<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="ti-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="ti-dialog" :style="{ width: width, marginTop: top }">
        <div class="ti-dialog_header">
          <slot name="title">
            <span class="ti-dialog_title">{{ title }}</span>
          </slot>
          <button class="ti-dialog_headerbtn" @click="handleClose">
            <i class="ti-icon-close"></i>
          </button>
        </div>
        <div class="ti-dialog_body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="ti-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TiDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.ti-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .ti-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &_header {
      padding: 20px 20px 10px;
      .ti-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ti-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .ti-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active {
  animation: dialog-fade-in 0.4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out 0.4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
