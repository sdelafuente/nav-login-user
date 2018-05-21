import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

@Output() public btnVolver : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }

    public volver()
    {
        this.btnVolver.emit(false);
    }
}
