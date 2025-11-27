import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  subtitle: string;
  location: string;
  description: string;
  image: {
    bgColor: string;
    elements: string[];
  };
}

@Component({
  selector: 'app-projets-carousel-domotique',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-black py-12 md:py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Title -->
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
            Nos Réalisations
          </h2>
          <p class="text-lg md:text-xl text-gray-400">
            Des projets qui transforment des vies au Sénégal
          </p>
        </div>

        <div class="relative">
          <!-- Sidebar left -->
          <div class="hidden lg:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          
          <!-- Sidebar right -->
          <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          <!-- Carousel Container -->
          <div class="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden" style="aspect-ratio: 16/9;">
            <!-- Slides -->
            <div class="absolute inset-0">
              <!-- Slide 1: Villa Smart à Almadies -->
              <div 
                class="absolute inset-0 transition-opacity duration-700"
                [class.opacity-100]="currentSlide === 0"
                [class.opacity-0]="currentSlide !== 0">
                <div class="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative">
                  <!-- Smart home visualization -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <!-- House structure -->
                    <div class="relative">
                      <!-- Main house -->
                      <div class="relative w-64 h-48 md:w-80 md:h-56">
                        <!-- Roof -->
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[140px] md:border-l-[180px] border-r-[140px] md:border-r-[180px] border-b-[80px] border-l-transparent border-r-transparent border-b-blue-700"></div>
                        
                        <!-- House body -->
                        <div class="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 rounded-b-2xl">
                          <!-- Windows with lights -->
                          <div class="absolute top-8 left-8 w-12 h-12 md:w-16 md:h-16 bg-yellow-300 rounded-lg animate-pulse" style="animation-duration: 3s;"></div>
                          <div class="absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16 bg-yellow-300 rounded-lg animate-pulse" style="animation-duration: 3s; animation-delay: 0.5s;"></div>
                          
                          <!-- Door -->
                          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 md:w-20 md:h-28 bg-blue-900 rounded-t-lg">
                            <!-- Door handle/smart lock -->
                            <div class="absolute right-2 top-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          
                          <!-- Bottom windows -->
                          <div class="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-yellow-300 rounded-lg animate-pulse" style="animation-duration: 3s; animation-delay: 1s;"></div>
                          <div class="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-yellow-300 rounded-lg animate-pulse" style="animation-duration: 3s; animation-delay: 1.5s;"></div>
                        </div>
                      </div>
                      
                      <!-- Floating tech icons -->
                      <div class="absolute -top-8 -right-12 w-12 h-12 bg-green-500/80 rounded-full flex items-center justify-center animate-bounce" style="animation-delay: 0s;">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                      </div>
                      
                      <div class="absolute -bottom-8 -left-12 w-12 h-12 bg-blue-500/80 rounded-full flex items-center justify-center animate-bounce" style="animation-delay: 0.3s;">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      
                      <div class="absolute top-1/2 -right-16 w-12 h-12 bg-purple-500/80 rounded-full flex items-center justify-center animate-bounce" style="animation-delay: 0.6s;">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Content overlay -->
                  <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                      Villa Smart - Almadies
                    </h3>
                    <p class="text-base md:text-lg text-gray-300 mb-4">
                      Installation complète • Contrôle total • Sécurité maximale
                    </p>
                    <button class="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center gap-2">
                      Voir le projet
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Slide 2: Bureau Moderne Plateau -->
              <div 
                class="absolute inset-0 transition-opacity duration-700"
                [class.opacity-100]="currentSlide === 1"
                [class.opacity-0]="currentSlide !== 1">
                <div class="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-slate-900 relative">
                  <!-- Office building visualization -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative">
                      <!-- Building -->
                      <div class="w-48 h-64 md:w-56 md:h-72 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg relative">
                        <!-- Floors with lights -->
                        <div class="grid grid-cols-4 gap-2 p-4">
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 0s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 0.2s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 0.4s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 0.6s;"></div>
                          
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 0.8s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 1s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 1.2s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 1.4s;"></div>
                          
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 1.6s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 1.8s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 2s;"></div>
                          <div class="w-8 h-6 bg-cyan-300 rounded animate-pulse" style="animation-delay: 2.2s;"></div>
                        </div>
                        
                        <!-- Entrance -->
                        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gray-900">
                          <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      
                      <!-- Security cameras -->
                      <div class="absolute -top-4 -left-8 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <div class="w-3 h-3 bg-red-300 rounded-full animate-pulse"></div>
                      </div>
                      <div class="absolute -top-4 -right-8 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <div class="w-3 h-3 bg-red-300 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Content overlay -->
                  <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                      Siège Social - Plateau
                    </h3>
                    <p class="text-base md:text-lg text-gray-300 mb-4">
                      Climatisation centralisée • Éclairage intelligent • Sécurité 24/7
                    </p>
                    <button class="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center gap-2">
                      Voir le projet
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Slide 3: Résidence Sécurisée Ngor -->
              <div 
                class="absolute inset-0 transition-opacity duration-700"
                [class.opacity-100]="currentSlide === 2"
                [class.opacity-0]="currentSlide !== 2">
                <div class="w-full h-full bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 relative">
                  <!-- Residence complex visualization -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative flex gap-4">
                      <!-- Building 1 -->
                      <div class="w-20 h-40 md:w-24 md:h-48 bg-gradient-to-b from-teal-600 to-teal-800 rounded-t-lg">
                        <div class="grid grid-cols-2 gap-1 p-2">
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.3s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.6s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.9s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 1.2s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 1.5s;"></div>
                        </div>
                      </div>
                      
                      <!-- Building 2 (taller) -->
                      <div class="w-24 h-52 md:w-28 md:h-60 bg-gradient-to-b from-teal-500 to-teal-700 rounded-t-lg">
                        <div class="grid grid-cols-2 gap-1 p-2">
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse"></div>
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.2s;"></div>
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.4s;"></div>
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.6s;"></div>
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.8s;"></div>
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 1s;"></div>
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 1.2s;"></div>
                          <div class="w-8 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 1.4s;"></div>
                        </div>
                      </div>
                      
                      <!-- Building 3 -->
                      <div class="w-20 h-36 md:w-24 md:h-44 bg-gradient-to-b from-teal-600 to-teal-800 rounded-t-lg">
                        <div class="grid grid-cols-2 gap-1 p-2">
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.1s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.4s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 0.7s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 1s;"></div>
                          <div class="w-6 h-4 bg-yellow-200 rounded animate-pulse" style="animation-delay: 1.3s;"></div>
                        </div>
                      </div>
                      
                      <!-- Security perimeter -->
                      <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-around">
                        <div class="w-3 h-12 bg-green-400 rounded-t-full"></div>
                        <div class="w-3 h-12 bg-green-400 rounded-t-full"></div>
                        <div class="w-3 h-12 bg-green-400 rounded-t-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Content overlay -->
                  <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                      Résidence Les Îles - Ngor
                    </h3>
                    <p class="text-base md:text-lg text-gray-300 mb-4">
                      45 appartements connectés • Contrôle d'accès • Vidéosurveillance
                    </p>
                    <button class="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center gap-2">
                      Voir le projet
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation arrows -->
            <button 
              (click)="previousSlide()"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            
            <button 
              (click)="nextSlide()"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <!-- Dots navigation -->
            <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              <button 
                *ngFor="let slide of slides; let i = index"
                (click)="goToSlide(i)"
                class="w-2 h-2 rounded-full transition-all duration-300"
                [class.bg-white]="currentSlide === i"
                [class.w-8]="currentSlide === i"
               >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `]
})
export class ProjetsCarouselDomotiqueComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slides = [0, 1, 2];
  autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay(); // Restart auto-play after manual navigation
  }
}