<template>
  <div class="card-item">
    <div class="card-wrapper">
      <div class="card-content">
        <span class="card-icon">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM11 11H4C3.45 11 3 10.55 3 10C3 9.45 3.45 9 4 9H11C11.55 9 12 9.45 12 10C12 10.55 11.55 11 11 11ZM11 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H11C11.55 5 12 5.45 12 6C12 6.55 11.55 7 11 7Z"
              fill="#0d47a1"
            />
          </svg>
        </span>
        <p class="mt-4 font-normal text-black text-capitalize">{{label}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
export default {
  name: 'CardHomeItem',
  props: {
    label: {
      type: String,
      default:"Tarik Tunai Micro UI"
    },
    icon: {
      type: String,
      default:""
    }
  }
};
</script>
