# Product Requirements Document: Xưởng Gỗ Long Anh Digital Storefront

## 1. Project Overview
**Brand Name:** Xưởng Gỗ Long Anh
**Core Concept:** "Heritage Timber" - A luxury, artisan-focused digital experience for high-end wooden furniture.
**Objective:** Create a unified, consistent, and premium web presence that showcases traditional craftsmanship with a modern aesthetic, powered by a dynamic content management system.

## 2. Target Audience
- Homeowners looking for high-quality, durable wooden furniture.
- Interior designers seeking unique, artisan-made pieces.
- Customers who value traditional Vietnamese wood craftsmanship and natural materials.

## 3. Technology Stack & Architecture
- **Framework:** Next.js (App Router) for Server-Side Rendering (SSR) and React Server Components.
- **Styling:** Tailwind CSS v4 using modern `@theme` directive, integrated directly into `globals.css`.
- **Database:** SQLite database managed via Prisma ORM.
- **Backend/API:** Next.js Server Actions used to handle Create, Read, Update, Delete (CRUD) operations securely.
- **Design System:**
    - **Primary Font:** Noto Serif (for a classic, prestigious feel).
    - **Secondary Font:** Be Vietnam Pro (for clean, readable body text).
    - **Color Palette:**
        - Background: Soft Cream/Off-white (#FDF9F4).
        - Primary Brand Color: Deep Wood Brown (#502905 / #6B3F1A).
        - Accent/Hover Color: Heritage Gold/Amber (#875200).

## 4. Key Pages & Features

### 4.1. Homepage (Trang Chủ)
- **Hero Section:** Large, high-quality imagery of feature products (e.g., Sofa gỗ tự nhiên) with statistics.
- **Product Categories:** Visual tiles for Sofa, Bàn ăn, Kệ TV, etc.
- **Dynamic Featured Products:** "Sản phẩm nổi bật" dynamically fetched from the SQLite database.
- **Commitments Section:** Highlighting natural materials, in-house manufacturing, and long-term warranty.
- **Customer Testimonials:** Social proof section.

### 4.2. Admin Dashboard (Trang Quản Trị)
- **Product Management:** A secure `/admin` interface allowing the shop owner to:
    - View all products currently in the database.
    - Add new products (Image URL, Name, Price, Category, Tag, Description).
    - Edit existing product details.
    - Delete out-of-stock or discontinued products.
- **Data Persistence:** Operations reflect instantly on the storefront via Next.js cache revalidation (`revalidatePath`).

### 4.3. Product Listing Pages (Sofa & Bàn Ghế)
- **Categorization:** Clear tabs/filters for different product types.
- **Dynamic Product Cards:** Fetch category-specific products from the database.
- **Call to Action:** "Xem chi tiết" (View Details) and "Liên hệ" (Contact) for each item.

### 4.4. Product Detail Page (Chi Tiết Sản Phẩm)
- **Dynamic Routing:** Next.js dynamic routes (`/chi-tiet/[id]`) pulling specific details from the database.
- **Image & Content:** Display specifications, price, tags, and product descriptions pulled directly from the Prisma model.

### 4.5. Service & Contact Pages (Dịch Vụ & Liên Hệ)
- **Custom Design:** Promotion of custom-made furniture services with a contact lead form.
- **Process Showcase:** Professionalism in manufacturing and finishing.
- **Direct Contact:** Sticky Floating Action Buttons for immediate Zalo or Phone routing.

## 5. Functional Requirements
- **Server Components:** Prioritize loading data on the server to optimize SEO and initial page load speeds.
- **Unified Navigation/Footer:** Dedicated React components (`Navbar`, `Footer`) to ensure consistency.
- **Responsive Layout:** Optimized for Desktop, Tablet, and Mobile devices natively via Tailwind queries.
- **Database Seeding:** A dedicated `/api/seed` endpoint and `seed.js` script to bootstrap the website with default content automatically.

## 6. Future Roadmap
- Implementation of Admin authentication (e.g., NextAuth.js or simple session cookies) to secure the `/admin` route.
- Integration of an e-commerce shopping cart and direct checkout processing.
- Image upload functionality directly to a cloud provider (e.g., Cloudinary/AWS S3) from the admin dashboard instead of relying on URL inputs.
- Detailed "Craftsmanship Journey" video sections.