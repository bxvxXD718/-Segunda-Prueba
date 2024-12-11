import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbicarnosComponent } from './ubicarnos.component'; // Correcta ruta de importación
import { HttpClientModule } from '@angular/common/http';  // Si utilizas HTTP en el componente
import { FormsModule } from '@angular/forms';  // Si utilizas formularios en el componente

describe('UbicarnosComponent', () => {
  let component: UbicarnosComponent;
  let fixture: ComponentFixture<UbicarnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicarnosComponent ],
      imports: [ FormsModule, HttpClientModule ]  // Asegúrate de incluir los módulos necesarios
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicarnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
