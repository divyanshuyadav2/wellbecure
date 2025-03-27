import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { JsonLdService } from '../../service/json-ld.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private jsonLdService: JsonLdService) {}
  ngOnInit() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Wellbecure Pharmaceuticals Pvt Ltd",
      "url": "https://wellbecure.vercel.app",
      "logo": "https://wellbecure.vercel.app/assets/logo.png",
      "description": "Wellbecure Pharmaceuticals Pvt Ltd is a leading healthcare company offering high-quality pharmaceutical products.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "Your Postal Code",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.linkedin.com/company/yourcompany",
        "https://twitter.com/yourhandle"
      ]
    };

    this.jsonLdService.setJsonLd(schema);
  }
}
