<template>
  <MainSection title="Images">
    <div class="grid grid-flow-row gap-4">
      <Card>
        <div v-if="store.image.id">
          <img
            class="block w-auto"
            style="height: 600px"
            :src="`/image-bucket/${store.image.preFix}${store.image.id}.${store.image.extension}`"
            alt=""
          />
          <div>{{ store.image.name }}</div>
        </div>
      </Card>
    </div>
  </MainSection>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { useImageEditAdminStore } from 'stores/admin/image-edit';
import MainSection from 'components/AdminMainSection.vue';
import Card from 'components/ui/Card.vue';

const store = useImageEditAdminStore();
const route = useRoute();
const { id } = route.params;

onMounted(() => {
  store.getImageById(id);
});
</script>
