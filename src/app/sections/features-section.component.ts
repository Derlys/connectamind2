import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'connectamind-features-section',
  template: `<section class="px-16 py-24 ">
    <ul class="flex justify-center gap-16">
      <li class="3xl font-bold">Fast</li>
      <li class="3xl font-bold">Safe</li>
      <li class="3xl font-bold">Efficient</li>
    </ul>
  </section>`,
})
export class HeroFeaturesComponent {}
