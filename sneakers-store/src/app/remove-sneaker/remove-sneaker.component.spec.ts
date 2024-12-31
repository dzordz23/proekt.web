import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSneakerComponent } from './remove-sneaker.component';

describe('RemoveSneakerComponent', () => {
  let component: RemoveSneakerComponent;
  let fixture: ComponentFixture<RemoveSneakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveSneakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveSneakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
