-- Create products table for HNS Solution e-commerce
CREATE TABLE IF NOT EXISTS public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  features text[] DEFAULT '{}',
  specifications jsonb DEFAULT '{}',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Anyone can view products"
  ON public.products
  FOR SELECT
  USING (true);

-- Create index for better performance
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_featured ON public.products(is_featured) WHERE is_featured = true;

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products
INSERT INTO public.products (name, description, price, category, image_url, stock, features, specifications, is_featured) VALUES
('UniFi Dream Machine Pro', 'Enterprise-grade router with integrated security gateway and network video recorder', 379.00, 'Networking', '/placeholder.svg', 15, 
  ARRAY['10G SFP+ WAN Port', '8 Gigabit RJ45 Ports', 'Built-in Cloud Key', '1.7" Touchscreen'],
  '{"cpu": "Quad-core ARM Cortex-A57", "ram": "4GB", "storage": "128GB", "throughput": "3.5 Gbps"}',
  true),
('Ubiquiti UniFi 6 Pro', 'Wi-Fi 6 access point with 5 GHz band 4x4 MU-MIMO and OFDMA', 149.00, 'Networking', '/placeholder.svg', 25,
  ARRAY['WiFi 6 (802.11ax)', '5.3 Gbps Aggregate Throughput', 'Dual-Band 2.4/5 GHz', 'PoE+ Powered'],
  '{"range": "123m", "clients": "300+", "power": "802.3at PoE+"}',
  true),
('Reolink RLC-810A', '4K PoE security camera with person/vehicle detection and color night vision', 79.99, 'Security Cameras', '/placeholder.svg', 30,
  ARRAY['4K 8MP Resolution', 'Smart Person/Vehicle Detection', 'Color Night Vision', 'IP66 Weatherproof'],
  '{"resolution": "3840x2160", "night_vision": "100ft", "storage": "microSD + NVR"}',
  true),
('TP-Link Tapo C200', 'Pan/Tilt smart home security camera with night vision', 29.99, 'Security Cameras', '/placeholder.svg', 50,
  ARRAY['1080p Full HD', '360° Pan & Tilt', 'Two-Way Audio', 'Motion Detection Alerts'],
  '{"resolution": "1920x1080", "night_vision": "30ft", "storage": "microSD up to 128GB"}',
  false),
('Google Nest Hub Max', 'Smart display with Google Assistant and built-in Nest Cam', 229.00, 'Smart Devices', '/placeholder.svg', 20,
  ARRAY['10" HD Display', 'Built-in Nest Cam', 'Stereo Speakers', 'Google Assistant'],
  '{"display": "10 inch touchscreen", "camera": "6.5MP", "audio": "Stereo speakers"}',
  true),
('Amazon Echo Show 8', 'HD smart display with Alexa and 13MP camera', 129.99, 'Smart Devices', '/placeholder.svg', 35,
  ARRAY['8" HD Display', '13MP Camera', 'Built-in Smart Home Hub', 'Premium Sound'],
  '{"display": "8 inch HD", "camera": "13MP with auto-framing"}',
  false);
