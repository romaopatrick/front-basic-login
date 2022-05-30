import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeaderComponent } from './lg-header.component';

describe('LgHeaderComponent', () => {
  let component: LgHeaderComponent;
  let fixture: ComponentFixture<LgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
