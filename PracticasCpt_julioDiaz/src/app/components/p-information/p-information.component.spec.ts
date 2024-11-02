import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PInformationComponent } from './p-information.component';

describe('PInformationComponent', () => {
  let component: PInformationComponent;
  let fixture: ComponentFixture<PInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
