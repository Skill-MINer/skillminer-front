import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  // Méthode pour ajouter dynamiquement un composant à un conteneur donné
  addComponent(component: any, container: ViewContainerRef) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    container.createComponent(componentFactory);
  }
}
