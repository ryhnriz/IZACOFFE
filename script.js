<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" 
content="EMtadwv1tyHJXfkjRhZJ4tLZXkjgWAFqkZ1k-OhY764" />
<title>IZA COFFEE - Pesan online, tanpa antre</title>
<meta name="description" content="Pesan kopi online di IZA COFFEE tanpa antre. Pilih menu, konfirmasi pesanan, dan nikmati di Cipadung. Buka setiap hari 08.00-22.00.">
<link rel="canonical" href="https://izacoffee-alpha.vercel.app/">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">

<!-- Schema Markup (JSON-LD): Organization / CafeOrCoffeeShop -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": "https://izacoffee-alpha.vercel.app/#organization",
  "name": "IZA COFFEE",
  "alternateName": "IZA Coffee",
  "url": "https://izacoffee-alpha.vercel.app/",
  "description": "Coffee shop dengan pemesanan digital. Pesan online tanpa antre, nikmati dine-in atau ambil sendiri di Cipadung.",
  "servesCuisine": ["Kopi", "Minuman", "Makanan ringan"],
  "priceRange": "Rp 18.000 - Rp 35.000",
  "currenciesAccepted": "IDR",
  "paymentAccepted": "Cash",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cipadung 93, Jl. Embah Jaksa",
    "addressLocality": "Cipadung",
    "addressCountry": "ID"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "22:00"
  },
  "sameAs": ["https://www.instagram.com/izacoffee/"],
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://izacoffee-alpha.vercel.app/#menu",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "deliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModePickUp"
  }
}
</script>
</head>
<body>
<div class="announce">Kopi enak, waktu lebih santai. Pesan online tanpa antre panjang.</div>

<header class="site-header">
  <div class="wrap bar">
    <a href="#home" class="logo">IZA COFFEE</a>
    <button class="icon-btn nav-toggle" id="navToggle" aria-label="Buka menu navigasi" aria-expanded="false">&#9776;</button>
    <nav id="nav" class="nav" aria-label="Navigasi utama">
      <a href="#menu">Menu</a>
      <a href="#cara-pesan">Cara Pesan</a>
      <a href="#tentang">Tentang Kami</a>
    </nav>
    <div class="bar-end">
      <a href="#staff" class="staff-link">Panel Staf</a>
