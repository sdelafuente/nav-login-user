import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent implements OnInit {
    public usuario: string;
    public password: string;

  public constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params=> {
          this.usuario = params["usuario"];
          this.password = params["password"];
      });
      console.log(this.usuario);
  }

  ngOnInit() {

  }

}
