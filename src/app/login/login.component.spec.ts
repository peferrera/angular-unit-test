import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { FormGroup } from '@angular/forms';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let form: DebugElement;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],

      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    form = fixture.debugElement.query(By.css('form'));
    button = form.query(By.css('.button')).nativeElement;
    fixture.detectChanges();


  });

  it('deve montar', () => {
    expect(component).toBeTruthy();
  });

  it('não deve validar os forms se os inputs são inválidos', () => {
    // Arrange
    component.loginForm.controls['user'].setValue('');
    component.loginForm.controls['password'].setValue('');

    // Assert
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('deve validar os forms se os inputs sao válidos', () => {
    // Arrange
    component.loginForm.controls['user'].setValue('John');
    component.loginForm.controls['password'].setValue('John123');

    // Assert
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('deve chamar o método onSubmit quando o botão é clicado', () => {
    // Arrange
    fixture.detectChanges();
    spyOn(component, 'onSubmit');

    // Act
    button.click();

    // Assert
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
