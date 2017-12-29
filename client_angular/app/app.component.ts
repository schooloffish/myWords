import { Component, OnInit } from '@angular/core';
import './assets/css/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    title = 'My New Vocabularies';
    constructor() {
    }

    ngOnInit() {
    }
}