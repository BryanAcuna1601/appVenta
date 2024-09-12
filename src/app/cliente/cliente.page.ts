import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage {
  nombre: string = '';
  apellido: string = '';
  edad: number | null = null;
  tipoEntrada: string = '';
  cantidadEntradas: number | null = null;
  total: number = 0;
  precioBase: number = 0;
  descuento: number = 0;

  precios: any = {
    cine: 5000,
    eventos: 20000,
    deportes: 10000,
    conciertos: 15000
  };

  constructor(private alertController: AlertController) {}

  calcularDescuento(): void {
    if (this.edad !== null) {
      if (this.edad < 18) {
        this.descuento = 0.10;
      } else if (this.edad > 60) {
        this.descuento = 0.20;
      } else {
        this.descuento = 0;
      }
    }
  }

  calcularTotal(): void {
    if (this.tipoEntrada && this.cantidadEntradas && this.edad !== null) {
      this.precioBase = this.precios[this.tipoEntrada];
      this.calcularDescuento();
      this.total = this.precioBase * this.cantidadEntradas * (1 - this.descuento);
    }
  }

  async goToComprar(): Promise<void> {
    this.calcularTotal();

    const alert = await this.alertController.create({
      header: 'Detalles de la compra',
      message: `Cliente: ${this.nombre} ${this.apellido}<br>
                Edad: ${this.edad}<br>
                Tipo de entrada: ${this.tipoEntrada}<br>
                Cantidad: ${this.cantidadEntradas}<br>
                Precio base: $${this.precioBase}<br>
                Descuento aplicado: ${this.descuento * 100}%<br>
                Total a pagar: $${this.total}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}