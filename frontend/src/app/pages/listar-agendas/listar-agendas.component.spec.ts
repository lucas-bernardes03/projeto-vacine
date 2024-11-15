import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendasComponent } from './listar-agendas.component';

describe('ListarAgendasComponent', () => {
  let component: ListarAgendasComponent;
  let fixture: ComponentFixture<ListarAgendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAgendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
