import { Component } from '@angular/core';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { HeroFeaturesComponent } from '../sections/features-section.component';

@Component({
  standalone: true,
  imports: [HeroSectionComponent, HeroFeaturesComponent],
  selector: 'connectamind-home-page',
  template: `<connectamind-hero-section />
    <connectamind-features-section /> `,
})
export class HomePageComponent {}
