import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  id: number;
  titleKey: string;
  excerptKey: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  searchQuery = signal('');
  selectedCategory = signal('all');

  categories = [
    { value: 'all', labelKey: 'blog.categories.all' },
    { value: 'security', labelKey: 'blog.categories.security' },
    { value: 'domotique', labelKey: 'blog.categories.domotique' },
    { value: 'solar', labelKey: 'blog.categories.solar' },
    { value: 'tips', labelKey: 'blog.categories.tips' }
  ];

  posts: BlogPost[] = [
    {
      id: 1,
      titleKey: 'blog.posts.post1.title',
      excerptKey: 'blog.posts.post1.excerpt',
      image: 'assets/images/blog/blog1.jpg',
      category: 'security',
      date: '2024-12-01',
      author: 'Jean Dupont',
      readTime: '5 min'
    },
    {
      id: 2,
      titleKey: 'blog.posts.post2.title',
      excerptKey: 'blog.posts.post2.excerpt',
      image: 'assets/images/blog/blog2.jpg',
      category: 'domotique',
      date: '2024-11-28',
      author: 'Marie Diallo',
      readTime: '7 min'
    },
    {
      id: 3,
      titleKey: 'blog.posts.post3.title',
      excerptKey: 'blog.posts.post3.excerpt',
      image: 'assets/images/blog/blog3.jpg',
      category: 'solar',
      date: '2024-11-25',
      author: 'Amadou Sow',
      readTime: '6 min'
    },
    {
      id: 4,
      titleKey: 'blog.posts.post4.title',
      excerptKey: 'blog.posts.post4.excerpt',
      image: 'assets/images/blog/blog4.jpg',
      category: 'tips',
      date: '2024-11-20',
      author: 'Fatou Ndiaye',
      readTime: '4 min'
    },
    {
      id: 5,
      titleKey: 'blog.posts.post5.title',
      excerptKey: 'blog.posts.post5.excerpt',
      image: 'assets/images/blog/blog5.jpg',
      category: 'security',
      date: '2024-11-15',
      author: 'Jean Dupont',
      readTime: '8 min'
    },
    {
      id: 6,
      titleKey: 'blog.posts.post6.title',
      excerptKey: 'blog.posts.post6.excerpt',
      image: 'assets/images/blog/blog6.jpg',
      category: 'domotique',
      date: '2024-11-10',
      author: 'Marie Diallo',
      readTime: '5 min'
    }
  ];

  get filteredPosts(): BlogPost[] {
    return this.posts.filter(post => {
      const matchesCategory = this.selectedCategory() === 'all' || post.category === this.selectedCategory();
      return matchesCategory;
    });
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }
}