<template>
  Images
  <input ref="imageInput" type="file" @change="handleImageUpload" />

  <ul class="mt-8">
    <li v-for="image in store.images" :key="image.id" class="mb-4">
      <img
        class="block w-60 h-auto"
        :src="`/image-bucket/${image.preFix}${image.id}.${image.extension}`"
        alt=""
      />
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useImagesAdminStore } from 'stores/admin/images';
const store = useImagesAdminStore();

const imageInput = ref(null);

onMounted(() => {
  store.getImages();
});

const handleImageUpload = (e) => {
  e.preventDefault();

  const image = imageInput.value.files[0];

  if (!image) {
    return;
  }

  const formData = new FormData();
  formData.append('file', image);

  store.uploadImage(formData);

  imageInput.value = '';
};
</script>
