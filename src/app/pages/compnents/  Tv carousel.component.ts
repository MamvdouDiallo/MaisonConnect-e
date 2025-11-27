import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Show {
  title: string;
  subtitle: string;
  image: string;
  bgGradient: string;
}

@Component({
  selector: 'app-tv-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-[80vh] bg-white overflow-hidden py-12">
      <!-- Left sidebar with Apple TV logo -->
      <div class="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-amber-50 to-transparent z-20 hidden lg:flex items-center justify-center">
        <div class="text-center px-6">
          <div class="mb-4">
            <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto text-gray-400" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
          </div>
          <h3 class="text-3xl font-light text-gray-400 tracking-wider">tv</h3>
        </div>
      </div>
      
      <!-- Right sidebar -->
      <div class="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-gray-100 to-transparent z-20 hidden lg:block"></div>

      <!-- Carousel container -->
      <div class="relative max-w-7xl mx-auto px-4 lg:px-24">
        <!-- Carousel track -->
        <div class="relative overflow-hidden">
          <div 
            class="flex transition-transform duration-700 ease-out"
            [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'">
            
            <!-- Slide 1: Charlie Brown Thanksgiving -->
            <div class="min-w-full flex-shrink-0 px-2">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
                <!-- Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-pink-200 via-orange-200 to-gray-300">
                  <!-- Peanuts characters scene -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <!-- Table with food -->
                    <div class="absolute bottom-[35%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl">
                      <!-- Table surface -->
                      <div class="relative h-4 bg-white rounded-lg shadow-lg mb-8"></div>
                      
                      <!-- Food items on table -->
                      <div class="absolute bottom-4 left-0 right-0 flex justify-around items-end px-8">
                        <!-- Bowl -->
                        <div class="relative">
                          <div class="w-16 h-10 bg-purple-400 rounded-full border-4 border-purple-500"></div>
                          <div class="absolute top-2 left-2 w-4 h-4 bg-yellow-200 rounded-full"></div>
                        </div>
                        
                        <!-- Strawberry -->
                        <div class="w-10 h-12 bg-red-500 rounded-b-full relative">
                          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-green-500"></div>
                        </div>
                        
                        <!-- Pancakes -->
                        <div class="relative">
                          <div class="w-20 h-3 bg-amber-600 rounded-full mb-1"></div>
                          <div class="w-20 h-3 bg-amber-500 rounded-full mb-1"></div>
                          <div class="w-20 h-3 bg-amber-600 rounded-full"></div>
                        </div>
                        
                        <!-- Woodstock's plate -->
                        <div class="relative">
                          <div class="w-16 h-2 bg-gray-600 rounded-full"></div>
                          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div class="w-6 h-6 bg-yellow-400 rounded-full"></div>
                            <div class="absolute top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        <!-- Pie -->
                        <div class="relative">
                          <div class="w-20 h-3 bg-gray-600 rounded-full"></div>
                          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16">
                            <div class="w-full h-8 bg-orange-600 rounded-t-full"></div>
                            <div class="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-60"></div>
                          </div>
                        </div>
                        
                        <!-- Another plate -->
                        <div class="relative">
                          <div class="w-16 h-2 bg-gray-600 rounded-full"></div>
                        </div>
                        
                        <!-- Cake -->
                        <div class="relative">
                          <div class="w-20 h-3 bg-teal-700 rounded-full"></div>
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <div class="w-16 h-6 bg-orange-700 rounded-t-lg"></div>
                            <div class="absolute top-0 left-2 w-3 h-3 bg-white rounded-full"></div>
                            <div class="absolute top-1 right-3 w-2 h-2 bg-pink-300 rounded-full"></div>
                          </div>
                        </div>
                        
                        <!-- Candies plate -->
                        <div class="relative">
                          <div class="w-20 h-2 bg-gray-100 rounded-full border-2 border-gray-400"></div>
                          <div class="absolute -top-2 left-2 flex gap-1">
                            <div class="w-2 h-3 bg-red-500 rounded-full"></div>
                            <div class="w-2 h-3 bg-green-500 rounded-full"></div>
                            <div class="w-2 h-3 bg-yellow-500 rounded-full"></div>
                            <div class="w-2 h-3 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Characters above table -->
                    <div class="absolute bottom-[48%] left-0 right-0 flex justify-around items-end px-8">
                      <!-- Character 1 -->
                      <div class="character">
                        <div class="w-12 h-14 bg-red-700 rounded-t-3xl relative">
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-100 rounded-full"></div>
                          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-black"></div>
                        </div>
                      </div>
                      
                      <!-- Character 2 -->
                      <div class="character">
                        <div class="w-12 h-14 bg-red-500 rounded-t-3xl relative">
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-100 rounded-full"></div>
                        </div>
                      </div>
                      
                      <!-- Character 3 -->
                      <div class="character">
                        <div class="w-12 h-14 bg-purple-700 rounded-t-3xl relative">
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-800 rounded-full"></div>
                        </div>
                      </div>
                      
                      <!-- Character 4 - Charlie Brown -->
                      <div class="character">
                        <div class="w-12 h-14 bg-yellow-400 rounded-t-3xl relative">
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-100 rounded-full">
                            <div class="absolute top-6 left-1 w-2 h-1 bg-black rounded-full"></div>
                            <div class="absolute top-6 right-1 w-2 h-1 bg-black rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Character 5 - Snoopy -->
                      <div class="character">
                        <div class="w-12 h-14 relative">
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full">
                            <div class="absolute -left-2 top-2 w-6 h-4 bg-white rounded-l-full"></div>
                            <div class="absolute top-6 left-2 w-2 h-1 bg-black rounded-full"></div>
                            <div class="absolute top-6 right-2 w-2 h-1 bg-black rounded-full"></div>
                            <div class="absolute top-8 left-3 w-4 h-2 bg-black rounded-full"></div>
                          </div>
                          <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-white rounded-t-3xl"></div>
                        </div>
                      </div>
                      
                      <!-- Character 6 -->
                      <div class="character">
                        <div class="w-12 h-14 bg-green-600 rounded-t-3xl relative">
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-100 rounded-full"></div>
                        </div>
                      </div>
                      
                      <!-- Character 7 -->
                      <div class="character">
                        <div class="w-12 h-14 bg-yellow-300 rounded-t-3xl relative">
                          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-100 rounded-full"></div>
                          <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-yellow-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Title overlay -->
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-32 pb-8 px-8">
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900 text-center mb-2" style="color: #5c3317;">
                      A Charlie Brown
                    </h2>
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900 text-center mb-6" style="color: #5c3317;">
                      THANKSGIVING
                    </h2>
                    <div class="flex items-center justify-center gap-4">
                      <button class="bg-white/90 hover:bg-white text-black px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105">
                        Stream now
                      </button>
                      <p class="text-white text-sm font-medium">Holiday • Happiness is togetherness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional slides would go here -->
            <!-- Slide 2 placeholder -->
            <div class="min-w-full flex-shrink-0 px-2">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div class="text-center text-white">
                  <h3 class="text-4xl font-bold mb-4">Next Show</h3>
                  <p class="text-xl">Coming Soon</p>
                </div>
              </div>
            </div>

            <!-- Slide 3 placeholder -->
            <div class="min-w-full flex-shrink-0 px-2">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-gradient-to-br from-green-900 to-teal-900 flex items-center justify-center">
                <div class="text-center text-white">
                  <h3 class="text-4xl font-bold mb-4">Another Show</h3>
                  <p class="text-xl">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel controls -->
        <div class="flex justify-center mt-8 gap-2">
          <button 
            *ngFor="let slide of [0, 1, 2]; let i = index"
            (click)="goToSlide(i)"
            [class.bg-gray-800]="currentSlide === i"
            [class.bg-gray-300]="currentSlide !== i"
            class="w-2 h-2 rounded-full transition-all duration-300 hover:bg-gray-600">
          </button>
        </div>

        <!-- Navigation arrows -->
        <button 
          *ngIf="currentSlide > 0"
          (click)="previousSlide()"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-30">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          *ngIf="currentSlide < 2"
          (click)="nextSlide()"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-30">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </section>
  `,
  styles: [`
    .character {
      animation: subtle-bounce 3s ease-in-out infinite;
    }
    
    .character:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .character:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    .character:nth-child(4) {
      animation-delay: 0.6s;
    }
    
    .character:nth-child(5) {
      animation-delay: 0.8s;
    }
    
    .character:nth-child(6) {
      animation-delay: 1s;
    }
    
    .character:nth-child(7) {
      animation-delay: 1.2s;
    }
    
    @keyframes subtle-bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
  `]
})
export class TvCarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    if (this.currentSlide < 2) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = 2;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}