import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';

@Component({
  standalone: true,
  imports: [
    BalanceSectionComponent
  ],
  selector: 'connectamind-hero-section',
  template: `<section class="px-16 py-24 bg-orange-500 bg-opacity-5">
    <h2 class="text-center text-3xl">Home Page</h2>
    <p class="text-center">Welcome to the home page</p>
    
  </section>`,

})

export class HeroSectionComponent{


}
