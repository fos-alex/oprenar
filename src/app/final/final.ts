import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStorage } from '../storage/app-storage';

@Component({
    styleUrls: ['./final.scss']
})

export class Final {

    constructor(private router: Router) {}

    go(where) {
        this.router.navigate([where]);
    }

    restart() {
        let state = AppStorage.getState();
        for (let key in state.propuestas) {
            state.propuestas[key] = null;
        }
        AppStorage.setState(state);
        this.go('desk');
    }
}