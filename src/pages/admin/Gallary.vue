<template>
  Gallary
  <input ref="imageInput" type="file" @change="handleImageUpload" />
</template>

<script setup>
import { ref } from 'vue';

import { useImageUploadAdminStore } from 'stores/admin/image-upload';
const store = useImageUploadAdminStore();

const imageInput = ref(null);

const handleImageUpload = (e) => {
  e.preventDefault();

  const image = imageInput.value.files[0];

  if (!image) {
    return;
  }

  const formData = new FormData();
  formData.append('title', 'yo');
  formData.append('file', image);

  store.uploadImage(formData);
};
</script>
