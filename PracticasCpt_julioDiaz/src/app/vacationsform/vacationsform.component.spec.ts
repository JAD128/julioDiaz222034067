import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsformComponent } from './vacationsform.component';

describe('VacationsformComponent', () => {
  let component: VacationsformComponent;
  let fixture: ComponentFixture<VacationsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationsformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
