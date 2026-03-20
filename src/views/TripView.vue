<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTripsStore } from '../stores/trips'
import type { Jour } from '../types/Jour'

const route = useRoute()
const router = useRouter()
const tripsStore = useTripsStore()

const currentPage = ref(0)
const searchQuery = ref('')
const isMapOpen = ref(true)

const tripName = computed(() => route.params.tripName as string)
const selectedJourId = computed(() => {
  const id = route.params.jourId as string
  if (id) {
    return parseInt(id.replace('jour-', ''))
  }
  // Si aucun jour n'est sélectionné, sélectionner le premier
  return jours.value[0]?.id ?? null
})

const trip = computed(() => tripsStore.getTripByName(tripName.value))
const jours = computed(() => trip.value?.jours ?? [])

const filteredJours = computed(() => {
  if (!searchQuery.value.trim()) return jours.value
  
  const query = searchQuery.value.toLowerCase()
  return jours.value.filter(jour => 
    jour.location.toLowerCase().includes(query) || 
    jour.fullTextSearch.toLowerCase().includes(query) || 
    jour.description.toLowerCase().includes(query)
  )
})

const selectedJour = computed(() => {
  return jours.value.find(j => j.id === selectedJourId.value)
})

const map = computed(() => {
  if (!trip.value) return null
  return trip.value.map || null
})

watchEffect(() => {
  if (trip.value && selectedJour.value) {
    document.title = `${trip.value.name} - ${selectedJour.value.location}`
  }
})

const selectJour = (jour: Jour) => {
  currentPage.value = 0
  router.push(`/trips/${tripName.value}/jour-${jour.id}`)
}

const currentPageImages = computed(() => {
  if (!selectedJour.value) return []
  const images = selectedJour.value.images
  const leftIdx = currentPage.value * 2
  const rightIdx = leftIdx + 1
  return [images[leftIdx], images[rightIdx]].filter(Boolean)
})

const totalPages = computed(() => {
  if (!selectedJour.value) return 0
  return Math.ceil(selectedJour.value.images.length / 2)
})

const canGoNext = computed(() => currentPage.value < totalPages.value - 1)
const canGoPrev = computed(() => currentPage.value > 0)

const nextPage = () => {
  if (canGoNext.value) currentPage.value++
}

const prevPage = () => {
  if (canGoPrev.value) currentPage.value--
}

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="trip-view">
    <div class="trip-header">
      <div class="header-content">
        <img v-if="trip?.cover" :src="`/voyages-journal/images/covers/${trip.cover}`" :alt="trip?.name" class="trip-cover-image" />
        <div class="header-text">
          <h1>{{ trip?.name }}</h1>
          <p v-if="trip?.description" class="trip-description">{{ trip.description }}</p>
        </div>
      </div>
      <button @click="goHome" class="home-btn">← Retour aux voyages</button>
    </div>
    
    <!-- Map Accordion -->
    <div class="map-accordion" v-if="map">
      <button class="map-accordion-btn" @click="isMapOpen = !isMapOpen">
        <span class="accordion-title">🗺️ Carte du voyage</span>
        <span class="accordion-toggle">{{ isMapOpen ? '▼' : '▶' }}</span>
      </button>
      
      <div class="map-accordion-content" v-if="isMapOpen">
        <div class="map-container">
          <div class="map-wrapper">
            <img 
              :src="`/voyages-journal/images/maps/${map}`"
              :alt="trip?.name"
              class="map-image"
            />
            
            <!-- Map points -->
            <div 
              v-for="jour in jours.filter(j => j.coordinates.x > 0 && j.coordinates.y > 0)"
              :key="jour.id"
              class="map-point"
              :class="{ active: jour.id === selectedJourId }"
              :style="{ left: jour.coordinates.x + '%', top: jour.coordinates.y + '%' }"
              :title="jour.location"
              @click="selectJour(jour)"
            >
              <span class="point-number">
                <template v-if="jour.id === selectedJourId">
                  {{ jour.id }}
                </template>
              </span>
              <span class="point-tooltip">{{ jour.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="content">
      <!-- Left side: List of days -->
      <div class="days-list">
        <div class="search-container">
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher lieu ou description..."
            class="search-input"
          />
        </div>
        
        <div 
          v-for="jour in filteredJours" 
          :key="jour.id"
          class="day-item"
          :class="{ active: jour.id === selectedJourId }"
          @click="selectJour(jour)"
        >
          <div class="day-date">{{jour.id}}. {{ jour.location }}</div>
          <div class="day-location">{{ jour.date }}</div>
        </div>
      </div>

      <!-- Right side: Jour details -->
      <div class="jour-details" v-if="selectedJour">
        <div class="jour-header">
          <h2>{{ selectedJour.location }}</h2>
          <p class="jour-date">{{ selectedJour.date }}</p>
        </div>

        <div class="jour-description">
          <p>{{ selectedJour.description }}</p>
        </div>

        <div class="journal-book" v-if="selectedJour.images.length">
          <div class="book-pages">
            <div class="page" v-for="(image, idx) in currentPageImages" :key="idx">
              <img :src="`/voyages-journal/images/trips/${trip?.photosBase}/${trip?.photosPrefix}_${image}.${trip?.photosExt}`" :alt="`Page ${currentPage * 2 + idx + 1}`" />
            </div>
          </div>
          
          <div class="book-navigation">
            <button 
              @click="prevPage" 
              :disabled="!canGoPrev"
              class="nav-btn prev-btn"
            >
              ← Précédent
            </button>
            <span class="page-indicator">
              Page {{ currentPage + 1 }} sur {{ totalPages }}
            </span>
            <button 
              @click="nextPage" 
              :disabled="!canGoNext"
              class="nav-btn next-btn"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
      
      <div class="jour-details" v-else>
        <p>Sélectionnez un jour pour voir les détails</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trip-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
}

.trip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 8px;
  color: white;
}

/* Map Accordion Styles */
.map-accordion {
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
}

.map-accordion-btn {
  width: 100%;
  padding: 16px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.map-accordion-btn:hover {
  opacity: 0.9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.accordion-title {
  flex: 1;
  text-align: left;
}

.accordion-toggle {
  font-size: 12px;
  transition: transform 0.2s ease;
}

.map-accordion-content {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
}

.map-container {
  width: 100%;
  padding: 20px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 600px;
  overflow: hidden;
}

.map-wrapper {
  position: relative;
  display: inline-block;
}

.map-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.map-point {
  position: absolute;
  width: 8px;
  height: 8px;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.map-point:hover {
  z-index: 1000;
}

.map-point.active {
  width: 40px;
  height: 40px;
  z-index: 20;
}

.point-number {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s ease;
}

.map-point:hover .point-number {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.map-point.active .point-number {
  background: #ff6b6b;
  width: 40px;
  height: 40px;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.6);
}

.point-tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  margin-left: 10px;
  z-index: 9999;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}

.map-point:hover .point-tooltip {
  opacity: 1;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.trip-cover-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.header-text {
  flex: 1;
}

.trip-view h1 {
  margin: 0 0 10px 0;
  font-size: 28px;
}

.trip-description {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

.home-btn {
  padding: 10px 20px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.home-btn:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.content {
  display: flex;
  flex: 1;
  gap: 30px;
}

.search-container {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.search-input:focus {
  border-color: #1e90ff;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.1);
}

.search-input::placeholder {
  color: #999;
}

.days-list {
  flex: 0 0 280px;
  border-right: 1px solid #e0e0e0;
  padding-right: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  max-height: 1000px;
}

.day-item {
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.day-item:hover {
  background-color: #f5f5f5;
  border-color: #1e90ff;
}

.day-item.active {
  background-color: #1e90ff;
  color: white;
  border-color: #1e90ff;
}

.day-date {
  font-weight: bold;
  font-size: 14px;
}

.day-location {
  font-size: 12px;
  margin-top: 4px;
  opacity: 0.8;
}

.jour-details {
  flex: 1;
  overflow-y: auto;
  padding-right: 20px;
}

.jour-header {
  margin-bottom: 20px;
}

.jour-header h2 {
  margin: 0 0 5px 0;
}

.jour-date {
  color: #666;
  margin: 0;
  font-size: 14px;
}

.journal-book {
  margin-bottom: 30px;
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.book-pages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 25px;
  min-height: 400px;
}

.page {
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.page img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.book-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-btn {
  padding: 10px 16px;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  background: #1678d9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(30, 144, 255, 0.3);
}

.nav-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.page-indicator {
  font-weight: 600;
  color: #666;
  font-size: 14px;
  white-space: nowrap;
}

.jour-description {
  line-height: 1.6;
  color: #333;
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>