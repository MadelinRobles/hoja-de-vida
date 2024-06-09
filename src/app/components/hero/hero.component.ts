import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export default class HeroComponent implements OnInit {

  ngOnInit(): void {
      initFlowbite()
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/CV.pdf';
    link.download = 'archivo.pdf'; 
    link.click();
  }
}
