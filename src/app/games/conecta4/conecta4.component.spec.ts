import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conecta4Component } from './conecta4.component';

describe('Conecta4Component', () => {
  let component: Conecta4Component;
  let fixture: ComponentFixture<Conecta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conecta4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conecta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
