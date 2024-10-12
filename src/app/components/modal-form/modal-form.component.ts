import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(ApiService) private apiService: ApiService // Uso del decorador @Inject
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.apiService.sendFormData('sensorstatus', this.form.value).subscribe({
        next: (response) => {
          console.log('Alerta creada:', response);
          this.dialogRef.close(response); // Cerrar el modal al terminar
        },
        error: (error) => {
          console.error('Error al crear la alerta:', error);
        },
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
