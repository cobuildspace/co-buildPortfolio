import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendlyEmbedComponent } from './calendly-embed.component';

describe('CalendlyEmbedComponent', () => {
  let component: CalendlyEmbedComponent;
  let fixture: ComponentFixture<CalendlyEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendlyEmbedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendlyEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
