import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaViagemComponent } from './lista-viagem.component';

describe('ListaViagemComponent', () => {
  let component: ListaViagemComponent;
  let fixture: ComponentFixture<ListaViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaViagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
