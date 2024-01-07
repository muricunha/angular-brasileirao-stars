import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizationComponent } from './atualization.component';

describe('AtualizationComponent', () => {
  let component: AtualizationComponent;
  let fixture: ComponentFixture<AtualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
