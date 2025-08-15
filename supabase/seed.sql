-- Insert sample categories
INSERT INTO categories (name, slug, description, icon) VALUES
('Design Grafis', 'design-grafis', 'Logo, branding, poster, dan desain visual lainnya', '🎨'),
('Web Development', 'web-development', 'Website, aplikasi web, dan pengembangan sistem', '💻'),
('Digital Marketing', 'digital-marketing', 'SEO, social media, iklan online', '📈'),
('Penulisan & Konten', 'penulisan-konten', 'Artikel, copywriting, konten kreatif', '✍️'),
('Video & Animasi', 'video-animasi', 'Video editing, motion graphics, animasi', '🎬'),
('Musik & Audio', 'musik-audio', 'Produksi musik, voice over, sound design', '🎵'),
('Konsultan Bisnis', 'konsultan-bisnis', 'Strategi bisnis, konsultasi, coaching', '💼'),
('Terjemahan', 'terjemahan', 'Penerjemahan dokumen dan konten', '🌐');

-- Insert sample users (these would be created through auth in real app)
-- Note: In production, these would be created via Supabase Auth

-- Sample SQL to run after users sign up:
-- UPDATE profiles SET 
--   full_name = 'Master Designer',
--   username = 'designmaster_id',
--   role = 'seller',
--   bio = 'Professional graphic designer dengan 5+ tahun pengalaman',
--   location = 'Jakarta, Indonesia',
--   skills = ARRAY['Logo Design', 'Branding', 'Photoshop', 'Illustrator'],
--   verified = true,
--   rating = 4.9,
--   total_orders = 1247
-- WHERE email = 'designmaster@example.com';