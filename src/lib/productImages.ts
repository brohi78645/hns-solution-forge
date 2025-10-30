import routerHero from "@/assets/router-hero.jpg";
import wifiAp from "@/assets/wifi-ap.jpg";
import securityCamera from "@/assets/security-camera.jpg";
import smartDisplay from "@/assets/smart-display.jpg";

export const getProductImage = (imageUrl: string, category: string): string => {
  // Map database image URLs to imported assets
  if (imageUrl.includes('router-hero')) return routerHero;
  if (imageUrl.includes('wifi-ap')) return wifiAp;
  if (imageUrl.includes('security-camera')) return securityCamera;
  if (imageUrl.includes('smart-display')) return smartDisplay;
  
  // Fallback based on category
  if (category === 'Networking') return routerHero;
  if (category === 'Security Cameras') return securityCamera;
  if (category === 'Smart Devices') return smartDisplay;
  
  // Default fallback
  return routerHero;
};
