import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoudPageComponent } from './layoud-page.component';

describe('LayoudPageComponent', () => {
  let component: LayoudPageComponent;
  let fixture: ComponentFixture<LayoudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoudPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
