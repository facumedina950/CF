import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-boton-modal',
  templateUrl: './boton-modal.component.html',
  styleUrls: ['./boton-modal.component.scss']
})
export class BotonModalComponent {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalFormComponent, {
      width: '400px'
    });
  }
}
