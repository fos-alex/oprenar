import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'cuaderno-mision'
})
export class CuadernoMision implements OnInit{

  svgStyle: any;

  constructor(private renderer: Renderer2,
              private elRef:ElementRef,
              private router: Router) {
  }

  switchPage(page) {
    this.router.navigate(['/cuaderno', page]);
  }

  ngOnInit() {
    this.svgStyle = {
      empresa: {
        cursor: 'pointer'
      },
      matriz: {
        cursor: 'pointer'
      },
      oprenar: {
        cursor: 'pointer'
      },
      mision: {
        cursor: 'pointer'
      }
    }
  }
}