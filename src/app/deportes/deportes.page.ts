import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.page.html',
  styleUrls: ['./deportes.page.scss'],
})
export class DeportesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCliente(){
    this.router.navigate(['/cliente'])
  }

}
