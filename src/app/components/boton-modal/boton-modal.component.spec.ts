import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModalComponent } from './boton-modal.component';

describe('BotonModalComponent', () => {
  let component: BotonModalComponent;
  let fixture: ComponentFixture<BotonModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonModalComponent]
    });
    fixture = TestBed.createComponent(BotonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
