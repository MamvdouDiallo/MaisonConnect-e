import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits-domotique',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-20">
      <!-- Content Container -->
      <div class="relative z-10 text-center max-w-7xl mx-auto">
        <!-- Title -->
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 tracking-tight fade-in">
          SmartHub Pro
        </h2>
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light fade-in" style="animation-delay: 0.2s;">
          Le cerveau de votre maison intelligente.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in" style="animation-delay: 0.4s;">
          <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105">
            En savoir plus
          </button>
          <button class="border-2 border-[#0071e3] hover:bg-[#0071e3] text-[#0071e3] hover:text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300">
            Commander
          </button>
        </div>
        
        <!-- Smart Hub Device -->
        <div class="relative w-full max-w-4xl mx-auto product-reveal">
          <div class="relative w-full aspect-[16/9] flex items-center justify-center">
            <!-- Main hub device -->
            <div class="relative w-3/4 md:w-2/3 lg:w-1/2 aspect-square">
              <!-- Hub body -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-2xl overflow-hidden">
                <!-- Screen/Display -->
                <div class="absolute inset-8 rounded-full bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] overflow-hidden">
                  <!-- Interface circles -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative w-full h-full">
                      <!-- Center icon -->
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24">
                        <div class="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                          <svg class="w-12 h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                          </svg>
                        </div>
                      </div>
                      
                      <!-- Surrounding icons -->
                      <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14">
                        <div class="w-full h-full rounded-full bg-green-500/80 flex items-center justify-center pulse-icon" style="animation-delay: 0s;">
                          <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div class="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12">
                        <div class="w-full h-full rounded-full bg-purple-500/80 flex items-center justify-center pulse-icon" style="animation-delay: 0.3s;">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div class="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 md:w-12 md:h-12">
                        <div class="w-full h-full rounded-full bg-amber-500/80 flex items-center justify-center pulse-icon" style="animation-delay: 0.6s;">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12">
                        <div class="w-full h-full rounded-full bg-red-500/80 flex items-center justify-center pulse-icon" style="animation-delay: 0.9s;">
                          <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Ring highlights -->
                <div class="absolute inset-0 rounded-full ring-2 ring-white/20"></div>
              </div>
              
              <!-- Device shadow -->
              <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-black/40 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Ambient glow -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-500 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
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
    
    @keyframes pulseIcon {
      0%, 100% {
        opacity: 0.7;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.1);
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
    
    .pulse-icon {
      animation: pulseIcon 2s ease-in-out infinite;
    }
  `]
})
export class ProduitsDomotiqueComponent {}