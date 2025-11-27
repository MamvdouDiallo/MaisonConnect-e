import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scenarios-carousel-domotique',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-black py-12 md:py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Title -->
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
            Vivez l'Expérience Smart Home
          </h2>
          <p class="text-lg md:text-xl text-gray-400">
            Découvrez comment la domotique transforme votre quotidien
          </p>
        </div>

        <div class="relative">
          <!-- Sidebar left with logo -->
          <div class="hidden lg:flex absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 items-center justify-center">
            <div class="text-white text-opacity-30 text-2xl font-bold transform -rotate-90 whitespace-nowrap">
              SMART HOME
            </div>
          </div>
          
          <!-- Sidebar right with logo -->
          <div class="hidden lg:flex absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 items-center justify-center">
            <div class="text-white text-opacity-30 text-2xl font-bold transform rotate-90 whitespace-nowrap">
              SÉNÉGAL
            </div>
          </div>

          <!-- Carousel Container -->
          <div class="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl" style="aspect-ratio: 16/9;">
            <!-- Slides -->
            
            <!-- Slide 1: Matin - Réveil Automatique -->
            <div 
              class="absolute inset-0 transition-opacity duration-700"
              [class.opacity-100]="currentSlide === 0"
              [class.opacity-0]="currentSlide !== 0">
              <div class="w-full h-full relative overflow-hidden">
                <!-- Sky gradient - sunrise -->
                <div class="absolute inset-0 bg-gradient-to-b from-orange-300 via-pink-400 to-blue-400"></div>
                
                <!-- Sun rising -->
                <div class="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-2xl shadow-orange-400/50 animate-pulse"></div>
                
                <!-- Room scene -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="relative w-full max-w-2xl px-8">
                    <!-- Bedroom representation -->
                    <div class="relative">
                      <!-- Bed -->
                      <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 md:w-64 h-24 md:h-32">
                        <div class="w-full h-full bg-gradient-to-b from-blue-300 to-blue-400 rounded-t-2xl relative">
                          <!-- Pillow -->
                          <div class="absolute -top-4 left-4 w-16 h-8 bg-white rounded-lg shadow-lg"></div>
                          <div class="absolute -top-4 right-4 w-16 h-8 bg-white rounded-lg shadow-lg"></div>
                        </div>
                      </div>
                      
                      <!-- Window with light -->
                      <div class="absolute top-10 right-1/4 w-20 h-28 md:w-24 md:h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg border-4 border-white shadow-2xl">
                        <!-- Window panes -->
                        <div class="absolute inset-0 grid grid-cols-2 gap-1 p-1">
                          <div class="border-2 border-white/50"></div>
                          <div class="border-2 border-white/50"></div>
                          <div class="border-2 border-white/50"></div>
                          <div class="border-2 border-white/50"></div>
                        </div>
                      </div>
                      
                      <!-- Smart speaker playing music -->
                      <div class="absolute top-1/3 left-1/4 floating-element">
                        <div class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center shadow-xl">
                          <svg class="w-6 h-6 md:w-8 md:h-8 text-green-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                          </svg>
                        </div>
                        <!-- Sound waves -->
                        <div class="absolute -right-8 top-1/2 transform -translate-y-1/2">
                          <div class="flex gap-1">
                            <div class="w-1 h-3 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0s;"></div>
                            <div class="w-1 h-5 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0.1s;"></div>
                            <div class="w-1 h-4 bg-green-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Lights turning on -->
                      <div class="absolute top-8 left-1/3 floating-element" style="animation-delay: 0.5s;">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-yellow-300 rounded-full shadow-2xl shadow-yellow-400/80 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Content overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div class="max-w-3xl">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                      Réveil en Douceur
                    </h3>
                    <p class="text-base md:text-lg text-gray-300 mb-2">
                      Matinée • 7h00 • Votre journée commence parfaitement
                    </p>
                    <p class="text-sm md:text-base text-gray-400 mb-4">
                      Les volets s'ouvrent automatiquement, votre musique préférée démarre, et l'éclairage s'ajuste progressivement.
                    </p>
                    <button class="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center gap-2">
                      Découvrir le scénario
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2: Soirée - Ambiance Cinéma -->
            <div 
              class="absolute inset-0 transition-opacity duration-700"
              [class.opacity-100]="currentSlide === 1"
              [class.opacity-0]="currentSlide !== 1">
              <div class="w-full h-full relative overflow-hidden">
                <!-- Dark room atmosphere -->
                <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div>
                
                <!-- Living room scene -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="relative w-full max-w-3xl px-8">
                    <!-- TV screen -->
                    <div class="relative mb-8">
                      <div class="w-full h-40 md:h-56 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-purple-500/50 relative overflow-hidden">
                        <!-- Screen glow effect -->
                        <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white/10"></div>
                        <!-- Play symbol -->
                        <div class="absolute inset-0 flex items-center justify-center">
                          <div class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <!-- TV stand -->
                      <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-700 rounded"></div>
                    </div>
                    
                    <!-- Couch with people -->
                    <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-6">
                      <!-- Person 1 -->
                      <div class="flex flex-col items-center floating-element" style="animation-delay: 0s;">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-1"></div>
                        <div class="w-12 h-16 md:w-14 md:h-20 bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-2xl"></div>
                      </div>
                      
                      <!-- Person 2 -->
                      <div class="flex flex-col items-center floating-element" style="animation-delay: 0.3s;">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mb-1"></div>
                        <div class="w-12 h-16 md:w-14 md:h-20 bg-gradient-to-b from-purple-600 to-purple-800 rounded-t-2xl"></div>
                      </div>
                      
                      <!-- Person 3 -->
                      <div class="flex flex-col items-center floating-element" style="animation-delay: 0.6s;">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mb-1"></div>
                        <div class="w-12 h-16 md:w-14 md:h-20 bg-gradient-to-b from-green-600 to-green-800 rounded-t-2xl"></div>
                      </div>
                    </div>
                    
                    <!-- Ambient lights -->
                    <div class="absolute top-4 left-8 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
                    <div class="absolute top-4 right-8 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" style="animation-delay: 0.5s;"></div>
                    
                    <!-- Popcorn -->
                    <div class="absolute bottom-28 right-1/4 floating-element">
                      <div class="w-10 h-12 bg-gradient-to-b from-red-500 to-red-700 rounded-b-lg relative">
                        <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          <div class="w-2 h-2 bg-yellow-100 rounded-full"></div>
                          <div class="w-2 h-2 bg-yellow-200 rounded-full"></div>
                          <div class="w-2 h-2 bg-yellow-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Content overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div class="max-w-3xl">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                      Mode Cinéma
                    </h3>
                    <p class="text-base md:text-lg text-gray-300 mb-2">
                      Soirée • 20h30 • L'ambiance parfaite pour se détendre
                    </p>
                    <p class="text-sm md:text-base text-gray-400 mb-4">
                      D'un simple mot, les lumières s'éteignent, les volets se ferment, et l'éclairage d'ambiance s'active automatiquement.
                    </p>
                    <button class="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center gap-2">
                      Découvrir le scénario
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 3: Nuit - Sécurité Active -->
            <div 
              class="absolute inset-0 transition-opacity duration-700"
              [class.opacity-100]="currentSlide === 2"
              [class.opacity-0]="currentSlide !== 2">
              <div class="w-full h-full relative overflow-hidden">
                <!-- Night sky -->
                <div class="absolute inset-0 bg-gradient-to-b from-indigo-950 via-blue-950 to-slate-900"></div>
                
                <!-- Stars -->
                <div class="absolute top-8 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div class="absolute top-12 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
                <div class="absolute top-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 1s;"></div>
                <div class="absolute top-16 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
                
                <!-- Moon -->
                <div class="absolute top-12 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-2xl shadow-gray-400/30"></div>
                
                <!-- House at night -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="relative w-full max-w-2xl px-8">
                    <div class="relative">
                      <!-- House structure -->
                      <div class="relative w-56 h-40 md:w-72 md:h-48 mx-auto">
                        <!-- Roof -->
                        <div class="absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[120px] md:border-l-[160px] border-r-[120px] md:border-r-[160px] border-b-[70px] md:border-b-[90px] border-l-transparent border-r-transparent border-b-slate-700"></div>
                        
                        <!-- House body -->
                        <div class="absolute inset-0 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-2xl">
                          <!-- Windows (dark/sleeping) -->
                          <div class="absolute top-6 left-6 w-12 h-12 md:w-16 md:h-16 bg-slate-900 rounded-lg border-2 border-slate-700"></div>
                          <div class="absolute top-6 right-6 w-12 h-12 md:w-16 md:h-16 bg-slate-900 rounded-lg border-2 border-slate-700"></div>
                          
                          <!-- Door with security light -->
                          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-20 md:w-16 md:h-24 bg-slate-800 rounded-t-lg">
                            <!-- Door handle with green light -->
                            <div class="absolute right-2 top-10 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/80"></div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Security cameras -->
                      <div class="absolute -top-8 -left-8 floating-element">
                        <div class="w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-lg flex items-center justify-center shadow-xl">
                          <div class="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                        <!-- Detection waves -->
                        <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                          <div class="flex flex-col items-center gap-1">
                            <div class="w-8 h-1 bg-red-400/50 rounded-full"></div>
                            <div class="w-12 h-1 bg-red-400/30 rounded-full"></div>
                            <div class="w-16 h-1 bg-red-400/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="absolute -top-8 -right-8 floating-element" style="animation-delay: 0.5s;">
                        <div class="w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-lg flex items-center justify-center shadow-xl">
                          <div class="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      
                      <!-- Motion sensor -->
                      <div class="absolute -bottom-16 left-1/4 floating-element" style="animation-delay: 0.3s;">
                        <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/50">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <!-- Perimeter sensors -->
                      <div class="absolute bottom-4 left-4">
                        <div class="w-3 h-16 bg-green-500 rounded-t-full shadow-lg shadow-green-500/50"></div>
                      </div>
                      <div class="absolute bottom-4 right-4">
                        <div class="w-3 h-16 bg-green-500 rounded-t-full shadow-lg shadow-green-500/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Content overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div class="max-w-3xl">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                      Protection Nocturne
                    </h3>
                    <p class="text-base md:text-lg text-gray-300 mb-2">
                      Nuit • 23h00 • Dormez en toute sérénité
                    </p>
                    <p class="text-sm md:text-base text-gray-400 mb-4">
                      Le mode sécurité s'active automatiquement : caméras, détecteurs de mouvement, et serrures connectées veillent sur votre maison.
                    </p>
                    <button class="bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 inline-flex items-center gap-2">
                      Découvrir le scénario
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation arrows -->
          <button 
            (click)="previousSlide()"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border border-white/20">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button 
            (click)="nextSlide()"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border border-white/20">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Dots navigation -->
          <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            <button 
              *ngFor="let slide of slides; let i = index"
              (click)="goToSlide(i)"
              class="transition-all duration-300 rounded-full"
              [class.bg-white]="currentSlide === i"
              [class.w-8]="currentSlide === i"
              [class.h-2]="currentSlide === i"
             
              [class.w-2]="currentSlide !== i"
              [class.h-2]="currentSlide !== i">
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes floating-element {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .floating-element {
      animation: floating-element 3s ease-in-out infinite;
    }
  `]
})
export class ScenariosCarouselDomotiqueComponent implements OnInit, OnDestroy {
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
    }, 5000);
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
    this.startAutoPlay();
  }
}