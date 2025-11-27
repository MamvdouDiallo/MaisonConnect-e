import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-iphone-air',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  template: `
<section class="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-center justify-center px-4 py-20">

  <!-- Content Container -->
  <div class="relative z-10 w-full max-w-7xl mx-auto">
    <div class="text-center mb-16">

      <!-- Title -->
      <h2 class="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-4 tracking-tight fade-in">
        {{ 'SmartHomeHub.title' | translate }}
      </h2>

      <p class="text-xl md:text-2xl text-gray-800 mb-2 font-light fade-in" style="animation-delay: 0.2s;">
       {{ 'SmartHomeHub.subtitle1' | translate }}
      </p>

      <p class="text-xl md:text-2xl text-gray-800 mb-8 font-light fade-in" style="animation-delay: 0.3s;">
        {{ 'SmartHomeHub.subtitle2' | translate }}
      </p>

      <!-- CTA Buttons -->
<div class="flex flex-col sm:flex-row gap-4 justify-center fade-in" style="animation-delay: 0.4s;">

  <!-- Bouton principal noir style Apple -->
  <button
    class="bg-black hover:bg-[#111] text-white px-6 py-2 rounded-full
           text-sm font-semibold tracking-wide transition-colors duration-300">
    {{ 'SmartHomeHub.ctaLearn' | translate }}
  </button>

  <!-- Bouton secondaire blanc style Apple -->
  <button
    class="border border-black text-black hover:bg-black hover:text-white
           px-6 py-2 rounded-full text-sm font-semibold tracking-wide
           transition-all duration-300">
    {{ 'SmartHomeHub.ctaBuy' | translate }}
  </button>

</div>

    </div>

    <!-- Product: Smart Home Hub -->
    <div class="relative w-full max-w-5xl mx-auto product-reveal">
      <div class="relative flex items-center justify-center">

        <!-- Minimal hand / optional (kept structure but neutralized for domotique) -->
        <div class="absolute right-0 bottom-0 z-20 w-1/3 md:w-1/4">
          <div class="relative">
            <div class="hand-wrapper opacity-0 pointer-events-none"></div>
          </div>
        </div>

        <!-- Domotique Product -->
        <div class="relative w-full max-w-4xl">
          <div class="relative aspect-[21/9] flex items-center justify-center">

            <!-- Smart Hub Body -->
            <div class="relative w-full md:w-4/5 lg:w-3/4">

              <div class="relative h-24 md:h-28 bg-gradient-to-b from-[#e8ecf2] via-[#d9dfe6] to-[#cbd3dd] rounded-2xl shadow-2xl mx-auto max-w-3xl">

                <!-- Top highlight -->
                <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-t-2xl"></div>

                <!-- Bottom shadow -->
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-b-2xl"></div>

                <!-- LED ring -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-[#f6f7f9] to-[#d9dfe6] shadow-inner relative">
                    <div class="absolute inset-3 rounded-full bg-gradient-to-b from-[#cbd3dd] to-[#b4beca]"></div>
                    <div class="absolute inset-5 rounded-full bg-black/90"></div>
                    <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 h-2 w-8 rounded-full bg-[#4af0ff] blur-sm opacity-80"></div>
                  </div>
                </div>

                <!-- Ventilation grid -->
                <div class="absolute left-6 right-6 bottom-3 grid grid-cols-12 gap-1 opacity-40">
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                  <div class="h-1.5 bg-gray-400 rounded" ></div>
                </div>

              </div>

              <!-- Reflection -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-gradient-to-b from-black/20 to-transparent blur-xl"></div>

            </div>

          </div>
        </div>

      </div>
    </div>

  </div>

  <!-- Subtle gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>

</section>

  `,
  styles: [`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes productReveal {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes handSlide {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .fade-in {
      animation: fadeIn 1s ease-out forwards;
      opacity: 0;
    }
    
    .product-reveal {
      animation: productReveal 1.2s ease-out 0.6s forwards;
      opacity: 0;
    }
    
    .hand-wrapper {
      position: relative;
      width: 200px;
      height: 300px;
      animation: handSlide 1.2s ease-out 0.8s forwards;
      opacity: 0;
    }
    
    .finger {
      position: absolute;
      background: linear-gradient(135deg, #c49b7a, #a87d5f);
      border-radius: 20px;
    }
    
    .finger-1 {
      width: 40px;
      height: 120px;
      bottom: 0;
      right: 20px;
      transform: rotate(-5deg);
    }
    
    .finger-2 {
      width: 35px;
      height: 100px;
      bottom: 20px;
      right: 60px;
      transform: rotate(-10deg);
    }
    
    .finger-3 {
      width: 30px;
      height: 80px;
      bottom: 40px;
      right: 95px;
      transform: rotate(-15deg);
    }
  `]
})
export class IphoneAirComponent {}