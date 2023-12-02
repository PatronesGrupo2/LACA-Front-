import {Component, Input, OnInit} from '@angular/core';
import {Transporter} from "../../../logic-components/classes/Transporter";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TransporterService} from "../../../logic-components/services/TransporterService";
import {Product} from "../../../logic-components/classes/Product";

@Component({
  selector: 'app-product-edit-modal',
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.css']
})
export class ProductEditModalComponent implements OnInit{
  @Input() product: Product | undefined;
  toUpdateProduct: Product = new Product();// Recibe el objeto Transporter del componente padre
  constructor(public activeModal: NgbActiveModal, private transporterService: TransporterService) {
  }

  ngOnInit() {
    if (this.product) {
      // @ts-ignore
      this.toUpdateTransporter = new Transporter(this.transporter?.id, this.transporter?.name, this.transporter?.company)
      console.log('transporter', this.toUpdateProduct);
    }
  }

  onSubmit() {
    // Llama al servicio para actualizar el Transporter
    // @ts-ignore
    this.productService.updateTransporter(this.toUpdateTransporter).subscribe(
      (updatedProduct: any) => {
        console.log('Transporter actualizado:', updatedProduct);
        // Realiza acciones adicionales después de actualizar el transporter si es necesario

        // Cierra el modal
        this.activeModal.close('Cambios guardados');
      },
      (error: any) => {
        console.error('Error al actualizar el transporter:', error);
        // Maneja el error apropiadamente

        // Cierra el modal (opcional, dependiendo de cómo quieras manejar los errores)
        this.activeModal.dismiss();
      }
    );
  }
}




