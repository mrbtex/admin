import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchPageComponent } from './shearch-page.component';

describe('ShearchPageComponent', () => {
  let component: ShearchPageComponent;
  let fixture: ComponentFixture<ShearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShearchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
