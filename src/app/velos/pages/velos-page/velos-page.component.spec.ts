import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelosPageComponent } from './velos-page.component';

describe('VelosPageComponent', () => {
  let component: VelosPageComponent;
  let fixture: ComponentFixture<VelosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VelosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
