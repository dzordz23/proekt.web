import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersListingsComponent } from './sneakers-listings.component';

describe('SneakersListingsComponent', () => {
  let component: SneakersListingsComponent;
  let fixture: ComponentFixture<SneakersListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SneakersListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
