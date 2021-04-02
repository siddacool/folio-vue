<template>
  <MainSection title="Images">
    <div class="grid grid-flow-row gap-4">
      <!-- <ul class="mt-8">
        <li v-for="image in store.images" :key="image.id" class="mb-4">
          <img
            class="block w-60 h-auto"
            :src="`/image-bucket/${image.preFix}${image.id}.${image.extension}`"
            alt=""
          />
        </li>
      </ul> -->

      <Table :items="store.images" :columns="columns">
        <template #header>
          <div class="flex pt-4 px-4 pb-1 text-sm">
            <label
              class="block p-1 px-2 rounded bg-gray-800 text-white ml-auto"
            >
              <div class="cursor-pointer">
                {{ store.isImageFetching ? 'Uploading..' : 'Upload image' }}
              </div>
              <input
                ref="imageInput"
                class="hidden"
                type="file"
                accept="image/png, image/jpeg"
                :disabled="store.isImageFetching"
                @change="handleImageUpload"
              />
            </label>
          </div>
        </template>
      </Table>
    </div>
  </MainSection>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import MainSection from 'components/AdminMainSection.vue';
import Table from 'components/ui/Table.vue';

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

  imageInput.value = null;
};

const columns = [
  {
    id: 'slide',
    displayName: '',
  },
  {
    id: 'name',
    displayName: 'Name',
  },
  {
    id: 'mimetype',
    displayName: 'Type',
  },
];
</script>
