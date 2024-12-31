import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-sneaker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-sneaker.component.html',
  styleUrls: ['./edit-sneaker.component.scss'],
})
export class EditSneakerComponent implements OnInit {
  sneaker: any = {}; // Define the sneaker object
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadSneaker();
  }

  loadSneaker(): void {
    if (this.id) {
      this.http
        .get(`http://localhost:3000/sneakers/${this.id}`)
        .subscribe((data) => {
          this.sneaker = data;
        });
    }
  }

  updateSneaker(): void {
    if (this.id) {
      this.http
        .put(`http://localhost:3000/sneakers/${this.id}`, this.sneaker)
        .subscribe(() => {
          alert('Sneaker updated successfully!');
          this.router.navigate(['/sneakers-listings']);
        });
    }
  }
}
