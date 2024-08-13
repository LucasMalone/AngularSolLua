import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetimoComponenteComponent } from './setimo-componente.component';

describe('SetimoComponenteComponent', () => {
  let component: SetimoComponenteComponent;
  let fixture: ComponentFixture<SetimoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetimoComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetimoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
