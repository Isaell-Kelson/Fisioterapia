import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as L from 'leaflet';

L.Icon.Default.imagePath = 'src/assets/';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  standalone: true,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map!: L.Map;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.initMap();
          observer.disconnect();
        }
      });
    });

    const section = document.querySelector('#map-section');
    if (section) {
      observer.observe(section);
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [-8.8137, -36.9541],
      zoom: 7,
      zoomControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    setTimeout(() => {
      this.map.flyTo([-8.047562, -34.877001], 13, {
        animate: true,
        duration: 2
      });

      setTimeout(() => {
        L.marker([-8.047562, -34.877001], {
          icon: new L.Icon({
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png',
          })
        }).addTo(this.map)
          .bindPopup('<b>Recife e Região</b>')
          .openPopup();
      }, 2000);
    }, 1000);
  }
}
