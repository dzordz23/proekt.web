import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sneakers-listings',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sneakers-listings.component.html',
  styleUrls: ['./sneakers-listings.component.scss'],
})
export class SneakersListingsComponent implements OnInit {
  sneakers: any[] = [];
  filteredSneakers: any[] = [];
  searchQuery: string = '';
  selectedCondition: string = '';
  maxPrice: number | null = null;

  showModal: boolean = false;
  selectedSneaker: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSneakers();
  }

  fetchSneakers(): void {
    this.http.get<any[]>('http://localhost:3000/sneakers').subscribe((data) => {
      this.sneakers = data;
      this.filteredSneakers = [...data];
    });
  }

  applyFilters(): void {
    this.filteredSneakers = this.sneakers.filter((sneaker) => {
      const matchesQuery =
        !this.searchQuery ||
        sneaker.model.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCondition =
        !this.selectedCondition || sneaker.condition === this.selectedCondition;
      const matchesPrice = !this.maxPrice || sneaker.price <= this.maxPrice;

      return matchesQuery && matchesCondition && matchesPrice;
    });
  }

  openModal(sneaker: any): void {
    this.selectedSneaker = sneaker;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedSneaker = null;
  }

  confirmRemove(): void {
    if (this.selectedSneaker) {
      this.http
        .delete(`http://localhost:3000/sneakers/${this.selectedSneaker.id}`)
        .subscribe({
          next: () => {
            this.fetchSneakers();
            this.closeModal();
          },
          error: (err) => {
            console.error('Failed to delete sneaker:', err);
            alert('An error occurred while deleting the sneaker.');
          },
        });
    }
  }
}
