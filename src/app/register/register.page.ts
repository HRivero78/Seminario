import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]*$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9]+$"),
          Validators.minLength(8),
          Validators.maxLength(20),
        ])
      ),
      confirmation: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]+"),
          Validators.minLength(3),
          Validators.maxLength(20),
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z]+"),
          Validators.minLength(3),
          Validators.maxLength(20),
        ])
      ),
    }, { validators: this.matchingPasswords });
  }
    
  ngOnInit() {}

  async register() {
    if (this.registerForm.valid) {
      const register_data = this.registerForm.value;
      console.log(register_data);
      
      // Aquí debes enviar los datos del formulario a tu servicio de registro
      // Ejemplo: this.authService.register(register_data);
      
      // Mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Registro exitoso',
        duration: 2000,
        position: 'top'
      });
      toast.present();

      // Redirigir a otra página después del registro exitoso
      this.navCtrl.navigateRoot('/login');
    } else {
      // Mensaje de error para campos inválidos
      const toast = await this.toastController.create({
        message: 'Por favor, complete correctamente todos los campos',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }

  // Función de validación personalizada para confirmar que la contraseña y su confirmación coincidan
matchingPasswords(formGroup: FormGroup): { [s: string]: boolean } | null {
  const passwordControl = formGroup.get('password');
  const confirmationControl = formGroup.get('confirmation');

  if (!passwordControl || !confirmationControl) {
    return null;
  }
  const password = passwordControl.value;
  const confirmation = confirmationControl.value;
  return password === confirmation ? null : { mismatch: true };
}
}
