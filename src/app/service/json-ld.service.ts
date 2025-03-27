import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonLdService {
  constructor() {}

  setJsonLd(schema: any) {
    let script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'json-ld-script';

    // Remove old script if exists
    const oldScript = document.getElementById('json-ld-script');
    if (oldScript) {
      oldScript.remove();
    }

    document.head.appendChild(script);
  }
}
