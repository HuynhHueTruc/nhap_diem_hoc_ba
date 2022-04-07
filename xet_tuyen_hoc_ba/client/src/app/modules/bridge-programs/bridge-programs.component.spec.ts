import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeProgramsComponent } from './bridge-programs.component';

describe('BridgeProgramsComponent', () => {
  let component: BridgeProgramsComponent;
  let fixture: ComponentFixture<BridgeProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
