import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtstuffComponent } from './artstuff.component';

describe('ArtstuffComponent', () => {
  let component: ArtstuffComponent;
  let fixture: ComponentFixture<ArtstuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtstuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
