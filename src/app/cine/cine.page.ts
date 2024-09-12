import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.page.html',
  styleUrls: ['./cine.page.scss'],
})
export class CinePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCliente(){
    this.router.navigate(['/cliente'])
  }

}
