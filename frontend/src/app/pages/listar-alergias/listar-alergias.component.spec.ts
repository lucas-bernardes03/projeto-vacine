import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlergiasComponent } from './listar-alergias.component';

describe('ListarAlergiasComponent', () => {
  let component: ListarAlergiasComponent;
  let fixture: ComponentFixture<ListarAlergiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAlergiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlergiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
