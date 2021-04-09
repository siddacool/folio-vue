<template>
  <MainSection title="Images">
    <div class="grid grid-flow-row gap-4">
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
                multiple
                @change="handleImageUpload"
              />
            </label>
          </div>
        </template>

        <template #footer>
          <ThreeDotsLoader
            v-show="store.isImageFetching"
            class="w-12 my-3 mx-4 block"
          />
        </template>

        <template #td="{ row, colName }">
          <div v-if="colName === 'name'" class="flex items-center">
            <img
              class="block w-auto h-12 mr-4"
              :src="`/image-bucket/${row.preFix}${row.id}${row.thumbPostFix}.${row.extension}`"
              alt=""
            />

            {{ row[colName] }}
          </div>
          <div v-else-if="colName === 'createdAt'">
            {{ formattedDate(row[colName]) }}
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
import ThreeDotsLoader from 'components/loaders/ThreeDots.vue';
import { useImagesAdminStore } from 'stores/admin/images';
import { formattedDate } from 'helpers/time-master';

const maxLimit = 10;
const store = useImagesAdminStore();

const imageInput = ref(null);

onMounted(() => {
  store.getImages();
});

const handleImageUpload = (e) => {
  e.preventDefault();

  const images = imageInput.value.files;

  if (!images || !images.length) {
    imageInput.value = null;
    return;
  }

  if (images.length > maxLimit) {
    imageInput.value = null;
    return;
  }

  const formData = new FormData();
  const loopLength = images.length < maxLimit ? images.length : maxLimit;

  for (let i = 0; i < loopLength; i++) {
    formData.append(`file_${i}`, images[i]);
  }

  console.log(formData);

  store.upload(formData);

  imageInput.value = null;
};

const columns = [
  {
    id: 'name',
    displayName: 'Name',
    minWidth: 300,
    maxWidth: 400,
  },
  {
    id: 'mimetype',
    displayName: 'Type',
    minWidth: 300,
    maxWidth: 400,
  },
  {
    id: 'createdAt',
    displayName: 'created at',
    minWidth: 300,
  },
];
</script>
