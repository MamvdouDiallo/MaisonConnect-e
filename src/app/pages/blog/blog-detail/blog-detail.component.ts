import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../../shared/services/root.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private baseService = inject(RootService);

  private destroy$ = new Subject<void>();

  blog: any = null;
  loading = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchBlog(id);
  }

  fetchBlog(id: number) {
    this.loading = true;

    this.baseService
      .all(`blogs/${id}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.blog = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur récupération article', err);
          this.loading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
