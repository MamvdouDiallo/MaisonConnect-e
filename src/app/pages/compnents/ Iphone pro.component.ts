import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iphone-pro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-20">
      <!-- Content Container -->
      <div class="relative z-10 text-center max-w-7xl mx-auto">
        <!-- Title -->
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 tracking-tight fade-in">
          iPhone 17 Pro
        </h2>
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light fade-in" style="animation-delay: 0.2s;">
          All out Pro.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in" style="animation-delay: 0.4s;">
          <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105">
            Learn more
          </button>
          <button class="border-2 border-[#0071e3] hover:bg-[#0071e3] text-[#0071e3] hover:text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300">
            Buy
          </button>
        </div>
        
        <!-- iPhone Image -->
        <div class="relative w-full max-w-4xl mx-auto product-reveal">
          <!-- Camera module with gradient -->
          <div class="relative w-full aspect-[16/9] flex items-center justify-center">
            <!-- iPhone camera bump -->
            <div class="relative w-3/4 md:w-2/3 lg:w-1/2 aspect-[4/3]">
              <!-- Main camera module background -->
              <div class="absolute inset-0 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-[#d4814e] via-[#c77247] to-[#b86640] shadow-2xl overflow-hidden">
                <!-- Subtle reflection -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-40"></div>
                
                <!-- Camera lenses -->
                <div class="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div class="relative">
                    <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#8a5a3d] to-black ring-2 ring-[#c77247]">
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black"></div>
                      <div class="absolute inset-4 rounded-full bg-black"></div>
                    </div>
                  </div>
                </div>
                
                <div class="absolute top-1/4 left-1/2 transform translate-x-1/4 -translate-y-1/2">
                  <div class="relative">
                    <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#8a5a3d] to-black ring-2 ring-[#c77247]">
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black"></div>
                      <div class="absolute inset-4 rounded-full bg-black"></div>
                    </div>
                  </div>
                </div>
                
                <div class="absolute top-2/3 left-1/3 transform -translate-x-1/3 -translate-y-1/2">
                  <div class="relative">
                    <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#8a5a3d] to-black ring-2 ring-[#c77247]">
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black"></div>
                      <div class="absolute inset-4 rounded-full bg-black"></div>
                    </div>
                  </div>
                </div>
                
                <!-- Flash -->
                <div class="absolute top-1/3 right-1/4">
                  <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-white to-gray-300"></div>
                </div>
                
                <!-- LiDAR -->
                <div class="absolute bottom-1/4 right-1/4">
                  <div class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#2a2a2a] to-black ring-1 ring-[#c77247]/30"></div>
                </div>
              </div>
              
              <!-- Camera bump shadow -->
              <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-black/40 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Ambient glow -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#c77247] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
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
        transform: scale(0.9) translateY(30px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
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
  `]
})
export class IphoneProComponent {}