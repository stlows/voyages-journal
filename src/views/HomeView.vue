<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTripsStore } from '../stores/trips'
import { onMounted } from 'vue'
import type { Trip } from '../types/Trip'

const router = useRouter()
const tripsStore = useTripsStore()

onMounted(() => {
  document.title = 'Voyages'
})

const selectTrip = (trip: Trip) => {
  const tripName = trip.name.toLowerCase().replace(/\s+/g, '-')
  router.push(`/trips/${tripName}/jour-1`)
}
</script>

<template>
  <div class="home-view">
    <h1>Mes Voyages</h1>
    <div class="trips-list">
      <div v-for="trip in tripsStore.tripsData" :key="trip.id" class="trip-card" @click="selectTrip(trip)">
        <div class="trip-image-container" :style="{ backgroundColor: `hsl(${trip.id * 120}, 70%, 80%)` }">
          <img v-if="trip.cover" :src="`/voyages-journal/images/covers/${trip.cover}`" :alt="trip.name" class="trip-image" />
        </div>
        <div class="trip-content">
          <h2>{{ trip.name }}</h2>
          <p class="description">{{ trip.description }}</p>
          <div class="trip-meta">
            <span class="countries">{{ trip.countries.join(', ') }}</span>
            <span class="dates">{{ trip.startDate }} au {{ trip.endDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.home-view h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  color: #333;
}

.trips-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
}

.trip-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.trip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border-color: #1e90ff;
}

.trip-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.trip-image-container {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trip-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.trip-card h2 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 1.5em;
}

.description {
  color: #666;
  line-height: 1.5;
  margin: 0 0 15px 0;
  font-size: 0.95em;
  flex: 1;
}

.trip-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.85em;
  color: #999;
}

.countries {
  font-weight: 600;
  color: #1e90ff;
}

.dates {
  color: #666;
}
</style>