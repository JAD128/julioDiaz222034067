import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GInformationComponent } from './g-information.component';

describe('GInformationComponent', () => {
  let component: GInformationComponent;
  let fixture: ComponentFixture<GInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
