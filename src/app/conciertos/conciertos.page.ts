import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conciertos',
  templateUrl: './conciertos.page.html',
  styleUrls: ['./conciertos.page.scss'],
})
export class ConciertosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCliente(){
    this.router.navigate(['/cliente'])
  }

}
