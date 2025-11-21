import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangService } from './shared/services/lang.service';
import { ThemeService } from './shared/services/theme.service';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  private lang = inject(LangService);
  private theme = inject(ThemeService);
  constructor(){
    this.lang.init();
    this.theme.init();
  }
}
