import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-white py-8 md:py-12 overflow-hidden">
      <div class="relative">
        <!-- Horizontal scrolling carousel -->
        <div 
          #scrollContainer
          (mouseenter)="pauseAutoScroll()"
          (mouseleave)="resumeAutoScroll()"
          class="flex gap-3 overflow-x-auto scroll-smooth pb-4 px-4 md:px-8 scrollbar-hide snap-x snap-mandatory"
          style="scrollbar-width: none; -ms-overflow-style: none;">
          
          <!-- Card 1: Apple Arcade -->
          <div class="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] snap-start">
            <div class="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] aspect-[4/5] flex flex-col">
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-amber-200 via-blue-200 to-teal-100">
                  <div class="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-sky-300 to-sky-100"></div>
                  <div class="absolute top-10 left-10 w-20 h-8 bg-white/80 rounded-full blur-sm"></div>
                  <div class="absolute top-16 right-16 w-24 h-10 bg-white/70 rounded-full blur-sm"></div>
                  <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-teal-400 to-blue-300"></div>
                  <div class="absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-t from-green-900/80 to-green-800/60 rounded-tl-full"></div>
                  <div class="absolute bottom-0 right-20 w-16 h-12 bg-green-900/70 rounded-t-3xl"></div>
                </div>
              </div>
              <div class="relative z-10 p-6 mt-auto">
                <div class="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" class="w-6 h-6 text-black" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span class="text-xl font-semibold text-black">Arcade</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Fitness+ -->
          <div class="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] snap-start">
            <div class="relative bg-gray-900 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] aspect-[4/5] flex flex-col">
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div class="absolute inset-0 opacity-40">
                    <div class="absolute inset-0" style="background: repeating-linear-gradient(90deg, #4a3728 0px, #4a3728 8px, #3d2e21 8px, #3d2e21 10px);"></div>
                    <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent 0px, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 42px);"></div>
                  </div>
                  
                  <div class="absolute top-8 right-8 w-24 h-40 border-l-2 border-r-2 border-gray-700/50 grid grid-rows-6 gap-2">
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                  </div>
                  
                  <div class="absolute bottom-20 left-8 right-8 flex justify-around">
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-teal-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-teal-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-teal-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-teal-700 rounded-b-lg"></div>
                      </div>
                    </div>
                    
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-yellow-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-yellow-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-yellow-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-yellow-700 rounded-b-lg"></div>
                      </div>
                    </div>
                    
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-pink-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-pink-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-pink-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-pink-700 rounded-b-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative z-10 p-6 flex flex-col h-full">
                <div class="mt-auto">
                  <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">Strength with Gregg</h3>
                  <div class="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span class="text-base font-medium text-white">Fitness+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    <!-- Card 2: Fitness+ -->
          <div class="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] snap-start">
            <div class="relative bg-gray-900 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] aspect-[4/5] flex flex-col">
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div class="absolute inset-0 opacity-40">
                    <div class="absolute inset-0" style="background: repeating-linear-gradient(90deg, #4a3728 0px, #4a3728 8px, #3d2e21 8px, #3d2e21 10px);"></div>
                    <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent 0px, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 42px);"></div>
                  </div>
                  
                  <div class="absolute top-8 right-8 w-24 h-40 border-l-2 border-r-2 border-gray-700/50 grid grid-rows-6 gap-2">
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                  </div>
                  
                  <div class="absolute bottom-20 left-8 right-8 flex justify-around">
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-teal-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-teal-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-teal-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-teal-700 rounded-b-lg"></div>
                      </div>
                    </div>
                    
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-yellow-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-yellow-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-yellow-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-yellow-700 rounded-b-lg"></div>
                      </div>
                    </div>
                    
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-pink-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-pink-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-pink-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-pink-700 rounded-b-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative z-10 p-6 flex flex-col h-full">
                <div class="mt-auto">
                  <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">Strength with Gregg</h3>
                  <div class="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span class="text-base font-medium text-white">Fitness+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    <!-- Card 2: Fitness+ -->
          <div class="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] snap-start">
            <div class="relative bg-gray-900 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] aspect-[4/5] flex flex-col">
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div class="absolute inset-0 opacity-40">
                    <div class="absolute inset-0" style="background: repeating-linear-gradient(90deg, #4a3728 0px, #4a3728 8px, #3d2e21 8px, #3d2e21 10px);"></div>
                    <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent 0px, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 42px);"></div>
                  </div>
                  
                  <div class="absolute top-8 right-8 w-24 h-40 border-l-2 border-r-2 border-gray-700/50 grid grid-rows-6 gap-2">
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                    <div class="border-t-2 border-gray-700/50"></div>
                  </div>
                  
                  <div class="absolute bottom-20 left-8 right-8 flex justify-around">
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-teal-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-teal-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-teal-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-teal-700 rounded-b-lg"></div>
                      </div>
                    </div>
                    
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-yellow-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-yellow-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-yellow-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-yellow-700 rounded-b-lg"></div>
                      </div>
                    </div>
                    
                    <div class="person-container">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 mx-auto mb-1"></div>
                      <div class="w-10 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-t-2xl mx-auto"></div>
                      <div class="absolute top-9 -left-1 w-8 h-2 bg-pink-600 rounded-full transform -rotate-45"></div>
                      <div class="absolute top-9 -right-1 w-8 h-2 bg-pink-600 rounded-full transform rotate-45"></div>
                      <div class="flex gap-1 justify-center mt-0">
                        <div class="w-4 h-10 bg-pink-700 rounded-b-lg"></div>
                        <div class="w-4 h-10 bg-pink-700 rounded-b-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative z-10 p-6 flex flex-col h-full">
                <div class="mt-auto">
                  <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">Strength with Gregg</h3>
                  <div class="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span class="text-base font-medium text-white">Fitness+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Apple Music -->
          <div class="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] snap-start">
            <div class="relative bg-gradient-to-br from-fuchsia-500 via-pink-500 to-pink-600 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] aspect-[4/5] flex flex-col">
              <div class="absolute inset-0 overflow-hidden p-6">
                <div class="mb-3">
                  <div class="w-20 h-20 bg-lime-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span class="text-5xl font-black text-black">A</span>
                  </div>
                </div>
                
                <div class="w-28 h-28 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl mb-3 overflow-hidden shadow-lg">
                  <div class="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 relative">
                    <div class="absolute top-7 left-1/2 transform -translate-x-1/2 w-14 h-18 bg-gray-100 rounded-full"></div>
                    <div class="absolute top-5 left-1/2 transform -translate-x-1/2 w-18 h-14 bg-gray-200 rounded-t-full"></div>
                  </div>
                </div>
                
                <div class="space-y-1 mb-3">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-blue-400 rounded"></div>
                    <span class="text-xs font-bold text-white">-LIST</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-blue-400 rounded"></div>
                    <span class="text-xs font-bold text-white">-LIST</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-blue-400 rounded"></div>
                    <span class="text-xs font-bold text-white">-LIST</span>
                  </div>
                </div>
                
                <div class="flex flex-wrap gap-1">
                  <div class="bg-lime-400 text-black text-xs font-black px-2 py-0.5 rounded">POP</div>
                  <div class="bg-lime-400 text-black text-xs font-black px-2 py-0.5 rounded">POP</div>
                  <div class="bg-lime-400 text-black text-xs font-black px-2 py-0.5 rounded">POP</div>
                </div>
              </div>
              
              <div class="relative z-10 p-6 mt-auto flex items-end justify-between">
                <div>
                  <h3 class="text-lg font-semibold text-white">A-List Pop</h3>
                </div>
                <div class="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span class="text-sm font-medium text-white">Music</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Balatro+ -->
          <div class="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] snap-start">
            <div class="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] aspect-[4/5] flex flex-col">
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0">
                  <div class="ribbon ribbon-1"></div>
                  <div class="ribbon ribbon-2"></div>
                  <div class="ribbon ribbon-3"></div>
                  
                  <div class="absolute top-12 right-12 transform rotate-12 card-float" style="animation-delay: 0s;">
                    <div class="w-14 h-20 bg-white rounded-lg shadow-2xl overflow-hidden">
                      <div class="absolute inset-2 border-4 border-blue-500 rounded">
                        <div class="absolute top-0.5 left-0.5 text-blue-500 text-xs font-bold">A</div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 text-2xl">♠</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-16 right-6 transform -rotate-6 card-float" style="animation-delay: 0.3s;">
                    <div class="w-12 h-18 bg-white rounded-lg shadow-2xl overflow-hidden">
                      <div class="absolute inset-2 border-4 border-red-500 rounded">
                        <div class="absolute top-0.5 left-0.5 text-red-500 text-xs font-bold">K</div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-xl">♥</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute bottom-24 right-10 transform rotate-[-20deg] card-float" style="animation-delay: 0.6s;">
                    <div class="w-11 h-16 bg-white rounded-lg shadow-2xl overflow-hidden opacity-90">
                      <div class="absolute inset-2 border-4 border-red-500 rounded">
                        <div class="absolute top-0.5 left-0.5 text-red-500 text-xs font-bold">Q</div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-lg">♦</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="absolute top-28 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white shadow-xl chip-spin" style="animation-delay: 0s;"></div>
                  <div class="absolute top-24 right-10 w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-4 border-white shadow-xl chip-spin" style="animation-delay: 0.4s;"></div>
                </div>
              </div>
              
              <div class="relative z-10 p-6 flex flex-col h-full">
                <div class="mt-auto">
                  <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">Balatro+</h3>
                  <div class="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span class="text-base font-medium text-white">Arcade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    
    .person-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .ribbon {
      position: absolute;
      width: 200%;
      height: 120px;
      opacity: 0.5;
    }
    
    .ribbon-1 {
      background: linear-gradient(135deg, transparent 40%, #ff6b35 40%, #ff6b35 60%, transparent 60%);
      top: 10%;
      left: -50%;
      animation: float-ribbon 8s ease-in-out infinite;
    }
    
    .ribbon-2 {
      background: linear-gradient(135deg, transparent 35%, #f7931e 35%, #f7931e 65%, transparent 65%);
      top: 40%;
      left: -50%;
      animation: float-ribbon 10s ease-in-out infinite;
      animation-delay: -2s;
    }
    
    .ribbon-3 {
      background: linear-gradient(135deg, transparent 30%, #c1272d 30%, #c1272d 70%, transparent 70%);
      top: 70%;
      left: -50%;
      animation: float-ribbon 12s ease-in-out infinite;
      animation-delay: -4s;
    }
    
    @keyframes float-ribbon {
      0%, 100% {
        transform: translateX(0) translateY(0);
      }
      50% {
        transform: translateX(10px) translateY(-10px);
      }
    }
    
    .card-float {
      animation: card-float 3s ease-in-out infinite;
    }
    
    @keyframes card-float {
      0%, 100% {
        transform: translateY(0) rotate(12deg);
      }
      50% {
        transform: translateY(-10px) rotate(15deg);
      }
    }
    
    .chip-spin {
      animation: chip-spin 4s linear infinite;
    }
    
    @keyframes chip-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `]
})
export class ServicesCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  
  private autoScrollInterval: any;
  private currentScrollPosition = 0;
  private isPaused = false;
  private scrollDirection = 1; // 1 for right, -1 for left

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    // Auto-scroll every 3 seconds
    this.autoScrollInterval = setInterval(() => {
      if (!this.isPaused && this.scrollContainer) {
        this.scrollToNext();
      }
    }, 3000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  pauseAutoScroll() {
    this.isPaused = true;
  }

  resumeAutoScroll() {
    this.isPaused = false;
  }

  scrollToNext() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.offsetWidth * 0.85; // Approximate card width
    const maxScroll = container.scrollWidth - container.offsetWidth;
    
    // Calculate next scroll position
    let nextPosition = container.scrollLeft + (cardWidth * this.scrollDirection);
    
    // Reverse direction when reaching end or beginning
    if (nextPosition >= maxScroll) {
      this.scrollDirection = -1;
      nextPosition = maxScroll;
    } else if (nextPosition <= 0) {
      this.scrollDirection = 1;
      nextPosition = 0;
    }
    
    // Smooth scroll to next position
    container.scrollTo({
      left: nextPosition,
      behavior: 'smooth'
    });
  }
}