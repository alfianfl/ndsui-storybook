<template>
  <div :class="`${bgColor} grid  grid-cols-3 justify-between items-center p-2  ${textColor}`">
    <div class="text-xs">
      Execution time: 
    </div>
    <div class="text-xs">
      © 2020 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.
    </div>
    <div class="text-xs font-black text-right">
      Feature Version: <span>{{ featureVersion }}</span> |
      Trace ID:
      <span>{{ traceid }}</span>
    </div>
  </div>
  <!-- <ExportTraceID
    v-if="showDialog"
    :traceidHistory="traceidHistory"
    @close="() => (showDialog = false)"
  ></ExportTraceID> -->
</template>

<script>
// import Config from "@/config";
// import { defineAsyncComponent } from "vue";
import './style.scss';

export default {
  name: "HeaderNds",
//   components: {
//     ExportTraceID: defineAsyncComponent(() => import("./Export.vue")),
//   },
  props: {
    isBranch: { default: true, type: Boolean },
    featureVersion: { default: "1.18.23", type: String },
    traceid: { default: "05347382-ab91-4f2a-b518-21c7dc826795", type: String },
    traceidHistory: { default: () => [], type: Array },
  },
  data() {
    return {
      showDialog: false,
      counter: 0,
      timeout: undefined,
    };
  },
  computed: {
    bgColor() {
      return this.isBranch ? "bg-primary" : "bg-white";
    },
    textColor() {
      return this.isBranch ? "text-white" : "text-black";
    },
  },
//   methods: {
//     showTraceIdDialog() {
//       clearTimeout(this.timeout);
//       this.timeout = setTimeout(() => {
//         this.counter = 0;
//       }, 500);

//       this.counter += 1;
//       if (this.counter >= 5) {
//         this.showDialog = true;
//       }
//     },
//   },
};
</script>

<style scoped>
/* @import "@/assets/css/index.css"; */
</style>
