# 🛍️ Products Gallery

A modern, responsive e-commerce products gallery built with Next.js 15, featuring a dynamic hero slider, advanced filtering, and seamless product browsing experience.

## 📝 Project Overview

This Products Gallery is a full-featured e-commerce frontend application that showcases products in an elegant and user-friendly interface. The application features a hero slider displaying featured products from different categories, comprehensive product filtering and search capabilities, and a responsive design that works across all devices.

### ✨ Key Features

- **🎭 Dynamic Hero Slider** - Showcases one product from each category using Swiper.js
- **🔍 Advanced Search & Filter** - Real-time product search and category filtering
- **⭐ Interactive Rating System** - Visual star ratings with half-star support
- **📱 Responsive Design** - Optimized for mobile, tablet, and desktop
- **🚀 Server-Side Rendering** - Fast loading with Next.js App Router
- **🛡️ Cloudflare Bypass** - Multiple fallback strategies for API calls
- **🎨 Modern UI/UX** - Clean design with Tailwind CSS
- **🔄 Error Handling** - Graceful fallbacks with mock data

### 🎯 Core Functionality

1. **Product Display** - Grid layout showcasing products with images, titles, prices, and ratings
2. **Category Filtering** - Filter products by categories (Men's Clothing, Women's Clothing, Electronics, Jewelry)
3. **Search Functionality** - Real-time search across product titles and descriptions
4. **Product Details** - Detailed view with full descriptions and specifications
5. **Hero Carousel** - Featured products slider with navigation controls

## 🖼 Screenshots or Demo

### 🏠 Home Page with Hero Slider

_Hero section featuring products from different categories with smooth transitions and navigation controls_

![Hero Slider]

### 🛍️ Products Grid

_Responsive product grid with ratings, prices, and category badges_

![Products Grid]

### 🔍 Search & Filter Interface

_Advanced filtering options with real-time search functionality_

![Search and Filter]

### ⭐ Rating System

_Interactive star ratings with half-star precision and review counts_

![Rating System]

### 📱 Mobile Responsive Design

_Optimized mobile experience with touch-friendly navigation_

![Mobile Design]

## 🧱 Tech Stack Used

### 🎨 Frontend

- **[Next.js 15.4.4](https://nextjs.org/)** - React framework with App Router and Server Components
- **[React 19](https://react.dev/)** - Component-based UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Swiper.js](https://swiperjs.com/)** - Modern slider/carousel library

### 🔧 Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[PNPM](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization

### 🌐 API & Data Management

- **[Axios](https://axios-http.com/)** - HTTP client with interceptors and error handling
- **[Fake Store API](https://fakestoreapi.com/)** - REST API for product data
- **Server Actions** - Next.js server-side data fetching with ISR

### 🎭 UI Components & Libraries

- **Custom Rating Component** - Interactive star ratings with TypeScript
- **Responsive Container** - Flexible layout component system
- **Dynamic Hero Slider** - Category-based product showcase
- **Advanced Filter System** - Search and category filtering with URL state

### 📱 Features & Optimization

- **Mobile-First Design** - Optimized for all screen sizes
- **Static Site Generation (SSG)** - Pre-built pages for performance
- **Incremental Static Regeneration (ISR)** - Fresh content with 1-hour revalidation
- **Image Optimization** - Next.js automatic image optimization
- **SEO Optimized** - Meta tags and structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PNPM (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/osamashehta/Products-Gallery.git
   cd Products-Gallery
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. 🌍 **Environment Variables**

Required Environment Variables

Create a `.env` file in your project root with the following variables:

````bash
# API Configuration (Required)
```bash
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
````

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
````

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

```bash
# Development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page with SSG
│   ├── globals.css              # Global styles
│   └── favicon.ico              # Site favicon
├── features/                     # Feature-based architecture
│   └── products/
│       ├── components/          # Product-specific components
│       │   ├── Hero/           # Hero slider component
│       │   ├── Filter/         # Search and filter component
│       │   ├── ProductCard/    # Individual product card
│       │   └── Rating/         # Star rating component
│       ├── actions/             # Server actions for data fetching
│       │   └── get-products.ts  # Products API with Cloudflare bypass
│       ├── types/               # TypeScript type definitions
│       │   └── products.ts      # Product interfaces and types
│       └── data/                # Static and mock data
│           └── mock-products.ts # Fallback product data
├── shared/                       # Shared/common components
│   └── components/
│       └── CustomContainer/     # Responsive container component
└── lib/                         # Utilities and configuration
    └── axios.ts                 # API client with interceptors
```

## 🌟 Features Breakdown

### 🎭 Hero Slider

- Displays one featured product from each category
- Smooth transitions and animations with Swiper.js
- Navigation arrows and pagination dots
- Responsive image handling with Next.js Image
- Click-to-navigate functionality

### 🔍 Search & Filter

- Real-time search across product titles and descriptions
- Category-based filtering with visual indicators
- URL-based state management for bookmarkable searches
- Responsive filter controls with mobile optimization
- Clear all filters functionality

### ⭐ Rating System

- Visual star display with Unicode characters (★★★★☆)
- Half-star precision for accurate ratings
- Review count display with proper formatting
- Accessible design with ARIA labels
- Responsive sizing across devices

### 📱 Responsive Design

- Mobile-first approach with progressive enhancement
- Breakpoint-based layouts (sm, md, lg, xl)
- Touch-friendly interactions and button sizing
- Optimized images with Next.js Image component
- Fluid typography and spacing

## 🛠️ API Integration

### Cloudflare Bypass Strategy

The application implements a multi-layered approach to handle Cloudflare protection:

1. **Browser-like Headers** - Mimics real browser requests
2. **Multiple User Agents** - Rotating user agent strings
3. **Fallback Strategies** - Multiple API endpoints and methods
4. **Mock Data** - Graceful degradation with static data

### Error Handling

- Comprehensive try-catch blocks
- Graceful fallbacks to mock data
- User-friendly error messages
- Console logging for debugging

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed on any platform supporting Next.js:

- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 🔧 Customization

### Adding New Categories

Update the category types in `src/features/products/types/products.ts`:

```typescript
export type ProductCategory =
  | "men's clothing"
  | "women's clothing"
  | "electronics"
  | "jewelery"
  | "your-new-category";
```

### Styling Customization

- Modify Tailwind classes in components
- Add custom CSS in `src/app/globals.css`
- Configure Tailwind theme in `tailwind.config.ts`

### API Configuration

- Update endpoints in `src/lib/axios.ts`
- Modify headers and timeout values
- Add new fallback strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Swiper.js](https://swiperjs.com/) for the amazing slider component
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) team for the incredible React framework

## 📞 Contact

**Osama Shehta** - [@osamashehta](https://github.com/osamashehta)

Project Link: [https://github.com/osamashehta/Products-Gallery](https://github.com/osamashehta/Products-Gallery)

---

⭐ **Star this repository if you found it helpful!**
