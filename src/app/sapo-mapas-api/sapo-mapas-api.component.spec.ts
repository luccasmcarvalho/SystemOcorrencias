import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapoMapasAPIComponent } from './sapo-mapas-api.component';

describe('SapoMapasAPIComponent', () => {
  let component: SapoMapasAPIComponent;
  let fixture: ComponentFixture<SapoMapasAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapoMapasAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapoMapasAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
