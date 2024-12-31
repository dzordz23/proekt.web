import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSneakerComponent } from './edit-sneaker.component';

describe('EditSneakerComponent', () => {
  let component: EditSneakerComponent;
  let fixture: ComponentFixture<EditSneakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSneakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSneakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
