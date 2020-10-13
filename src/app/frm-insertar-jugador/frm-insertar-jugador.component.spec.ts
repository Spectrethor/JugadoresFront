import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmInsertarJugadorComponent } from './frm-insertar-jugador.component';

describe('FrmInsertarJugadorComponent', () => {
  let component: FrmInsertarJugadorComponent;
  let fixture: ComponentFixture<FrmInsertarJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmInsertarJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmInsertarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
