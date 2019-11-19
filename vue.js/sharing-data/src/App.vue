<template>
  <div id="app">
    <UsrMsg @inputData="updateMessage" />
    <transition name="scale">
      <InfoEmpty
        v-if="noData"
        :message="infoMessage"
      />
      <Results
        v-else
        :msg="messageList"
        :no-data="noData"
        @removeMessage="removeMessage"
      />
    </transition>
    <transition name="fade">
      <info-remove
        v-if="!noData"
        :message="removeText"
      ></info-remove>
    </transition>
  </div>
</template>

<script>
import UsrMsg from './components/UsrMsg';
import Results from './components/Results';
import InfoEmpty from './components/InfoEmpty';
import InfoRemove from './components/InfoRemove';

export default {
  name: 'App',
  components: {
    UsrMsg,
    Results,
    InfoEmpty,
    InfoRemove
  },
  data() {
    return {
      childData: '',
      messageList: [],
      infoMessage: 'Message list is empty!',
      noData: true,
      removeText: 'Double click on item to delete!'
    }
  },
  methods: {
    updateMessage(variable) {
      if(variable) {
        this.messageList.push(variable);
      }
    },
    removeMessage(i) {
      this.messageList.splice(i, 1);
    }
  },
  watch: {
    messageList() {
      this.messageList.length > 0 ? this.noData = false : this.noData = true
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.scale-enter-active, .scale-leave-active {
  transition: transform 1s;
}
.scale-enter, .scale-leave-to {
  transform: scale(0);
}
.scale-enter-to, .scale-leave {
  transform: scale(1);
}
.info.scale-enter-active, .info.scale-leave-active {
  transition: transform 1s;
}
.info.scale-enter, .info.scale-leave-to {
  transform: scale(0) translate(-50%, -50%);
}
.info.scale-enter-to, .info.scale-leave {
  transform: scale(1) translate(-50%, -50%);
}
</style>
