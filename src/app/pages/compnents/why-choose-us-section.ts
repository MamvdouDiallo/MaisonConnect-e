import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-why-choose-us-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="relative py-20 md:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Main Slogan -->
    <div class="text-center mb-20">
      <div class="inline-block mb-8">
        <div class="flex items-center gap-3 bg-black dark:bg-white px-6 py-3 rounded-full">
          <div class="w-2 h-2 bg-white dark:bg-black rounded-full animate-pulse"></div>
          <span class="text-white dark:text-black text-sm font-medium tracking-wider">{{ 'WhyUs.badge' | translate }}</span>
        </div>
      </div>

      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
        {{ 'WhyUs.mainSlogan' | translate }}
      </h2>
      
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-4">
        {{ 'WhyUs.shortSlogan' | translate }}
      </p>

      <!-- Decorative line -->
      <div class="flex items-center justify-center gap-3 mt-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-gray-900 dark:to-white"></div>
        <div class="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></div>
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-gray-900 dark:to-white"></div>
      </div>
    </div>

    <!-- Reasons Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      
      <!-- Reason 1: Expertise -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.expertise.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.expertise.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 2: Accompagnement -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.support.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.support.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 3: Produits Premium -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.premium.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.premium.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 4: Support Technique -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.technical.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.technical.description' | translate }}
          </p>
        </div>
      </div>

      <!-- Reason 5: Solutions Adaptées -->
      <div class="group relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-1">
        
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {{ 'WhyUs.reasons.solutions.title' | translate }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ 'WhyUs.reasons.solutions.description' | translate }}
          </p>
        </div>
      </div>

    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          500+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.projects' | translate }}</div>
      </div>
      
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          98%
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.satisfaction' | translate }}</div>
      </div>
      
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          10+
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.experience' | translate }}</div>
      </div>
      
      <div class="text-center p-6 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
        <div class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          24/7
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">{{ 'WhyUs.stats.support' | translate }}</div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center">
      <div class="inline-block bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 md:p-12">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {{ 'WhyUs.cta.title' | translate }}
        </h3>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {{ 'WhyUs.cta.description' | translate }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="" routerLink="/devis">
            <button class="group relative bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-black px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span class="flex items-center gap-2">
                {{ 'WhyUs.cta.button' | translate }}
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </button>
          </a>
          
          <button class="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white border border-gray-300 dark:border-slate-700 hover:border-gray-900 dark:hover:border-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300">
            {{ 'WhyUs.cta.contact' | translate }}
          </button>
        </div>
      </div>
    </div>

  </div>

</section>
  `,
  styles: [`
    /* Minimal animations */
  `]
})
export class WhyChooseUsSectionComponent {}