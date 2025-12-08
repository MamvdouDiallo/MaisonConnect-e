import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RootService } from './root.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private baseService: RootService) {}

  getCategories(): Observable<any[]> {
    return this.baseService
      .all('categories')
      .pipe(
        map((data: any) => data ?? []),
        catchError((error) => {
          console.error("Erreur lors du chargement des catégories :", error);
          return [];
        })
      );
  }
}
