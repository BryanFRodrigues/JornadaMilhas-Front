import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoiomentosComponent } from './card-depoiomentos.component';

describe('CardDepoiomentosComponent', () => {
  let component: CardDepoiomentosComponent;
  let fixture: ComponentFixture<CardDepoiomentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDepoiomentosComponent]
    });
    fixture = TestBed.createComponent(CardDepoiomentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
