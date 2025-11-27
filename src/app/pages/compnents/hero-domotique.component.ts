import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-domotique',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  template: `
<section class="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#132a45] to-[#1a3a5c] overflow-hidden flex items-center justify-center px-4 py-20">
  
  <!-- Animated background elements - Smart home devices -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Floating smart devices icons -->
    <div class="floating-icon" style="top: 15%; left: 10%; animation-delay: 0s;">
      <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-blue-400/40 bg-blue-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 25%; left: 25%; animation-delay: 0.8s;">
      <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-green-400/40 bg-green-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 35%; left: 75%; animation-delay: 1.2s;">
      <div class="w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 border-purple-400/40 bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 60%; left: 15%; animation-delay: 1.5s;">
      <div class="w-10 h-10 md:w-14 md:h-14 rounded-xl border-2 border-amber-400/40 bg-amber-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 70%; left: 80%; animation-delay: 0.5s;">
      <div class="w-12 h-12 md:w-18 md:h-18 rounded-xl border-2 border-red-400/40 bg-red-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>
    <div class="floating-icon" style="top: 20%; right: 15%; animation-delay: 2s;">
      <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-cyan-400/40 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center">
        <!-- SVG device icon -->
      </div>
    </div>

    <!-- Sparkles -->
    <div class="sparkle" style="top: 12%; left: 15%; animation-delay: 0.3s;">✦</div>
    <div class="sparkle" style="top: 28%; right: 20%; animation-delay: 1.1s;">✦</div>
    <div class="sparkle" style="top: 45%; left: 8%; animation-delay: 1.8s;">✦</div>
    <div class="sparkle" style="top: 65%; right: 12%; animation-delay: 0.6s;">✦</div>
    <div class="sparkle" style="bottom: 20%; left: 30%; animation-delay: 1.4s;">✦</div>
    <div class="sparkle" style="bottom: 35%; right: 25%; animation-delay: 0.9s;">✦</div>

    <!-- Small dots -->
    <div class="dot" style="top: 10%; left: 35%; animation-delay: 0.4s;"></div>
    <div class="dot" style="top: 40%; right: 30%; animation-delay: 1.3s;"></div>
    <div class="dot" style="bottom: 25%; left: 20%; animation-delay: 0.7s;"></div>
    <div class="dot" style="top: 55%; left: 70%; animation-delay: 1.6s;"></div>
  </div>

  <!-- Central glow -->
  <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    <div class="smart-home-glow w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"></div>
  </div>

  <!-- Content -->
  <div class="relative z-20 text-center max-w-5xl mx-auto mt-20">
    <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
      {{ 'SmartHomeHub.HomeAutomation.title' | translate }}
    </h1>

    <p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 font-light">
      {{ 'SmartHomeHub.HomeAutomation.subtitle' | translate }}
    </p>

    <p class="text-base md:text-lg text-gray-400 mb-8 font-light">
      {{ 'SmartHomeHub.HomeAutomation.description' | translate }}
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
        {{ 'SmartHomeHub.HomeAutomation.buttonDiscover' | translate }}
      </button>
      <button class="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300">
        {{ 'SmartHomeHub.HomeAutomation.buttonQuote' | translate }}
      </button>
    </div>
  </div>

</section>

  `,
  styles: [`
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-30px) rotate(5deg);
      }
    }
    
    @keyframes sparkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.8) rotate(0deg);
      }
      50% {
        opacity: 1;
        transform: scale(1.2) rotate(180deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.4;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.1);
      }
    }
    
    .floating-icon {
      position: absolute;
      animation: float 6s ease-in-out infinite;
    }
    
    .sparkle {
      position: absolute;
      color: #60a5fa;
      font-size: 1.5rem;
      animation: sparkle 3s ease-in-out infinite;
    }
    
    .dot {
      position: absolute;
      width: 6px;
      height: 6px;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      border-radius: 50%;
      animation: pulse 4s ease-in-out infinite;
    }
    
    .smart-home-glow {
      background: linear-gradient(135deg, 
        #3b82f6 0%, 
        #8b5cf6 25%, 
        #10b981 50%, 
        #f59e0b 75%, 
        #06b6d4 100%);
      filter: blur(40px);
      opacity: 0.6;
      animation: pulse 4s ease-in-out infinite;
    }
  `]
})
export class HeroDomotiqueComponent {}