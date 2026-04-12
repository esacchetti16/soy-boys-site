import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const locations = [
  { name: 'First Ascent Block 37', lng: -87.6276, lat: 41.8837, address: '108 N State St, Chicago, IL 60602' },
  { name: 'First Ascent Avondale', lng: -87.7107, lat: 41.9452, address: '3516 N Spaulding Ave, Chicago, IL 60618' },
  { name: 'First Ascent West Loop', lng: -87.6517, lat: 41.8867, address: '837 W Fulton Market, Chicago, IL 60607' },
  { name: 'First Ascent Humboldt Park', lng: -87.7016, lat: 41.9152, address: '2950 W Grand Ave, Chicago, IL 60622' },
  { name: 'From Here On Cafe', lng: -87.6393, lat: 41.8763, address: '433 W Van Buren St, Chicago, IL 60607' },
];

export default function LocationsMap() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    // IMPORTANT: Set your Mapbox access token in .env.local as NEXT_PUBLIC_MAPBOX_TOKEN
    if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
      console.error('Mapbox token missing: Set NEXT_PUBLIC_MAPBOX_TOKEN in your .env.local file');
    }
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    let styleUrl = 'mapbox://styles/mapbox/light-v11';
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: styleUrl,
      center: [-87.65, 41.88],
      zoom: 11,
    });
    mapRef.current.on('error', (e) => {
      if (e && e.error && e.error.message && e.error.message.includes('style')) {
        mapRef.current.setStyle('mapbox://styles/mapbox/streets-v11');
      }
    });
    locations.forEach(loc => {
      new mapboxgl.Marker()
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${loc.name}</strong><br>${loc.address}`))
        .addTo(mapRef.current);
    });
    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: 400, borderRadius: 16, minHeight: 320, boxShadow: '0 2px 12px #FFD60033', margin: '0 auto' }} />
  );
}
