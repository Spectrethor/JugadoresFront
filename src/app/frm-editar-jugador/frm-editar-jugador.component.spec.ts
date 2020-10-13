import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmEditarJugadorComponent } from './frm-editar-jugador.component';

describe('FrmEditarJugadorComponent', () => {
  let component: FrmEditarJugadorComponent;
  let fixture: ComponentFixture<FrmEditarJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmEditarJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmEditarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
