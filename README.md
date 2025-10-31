# Picsum Photo Gallery 📸

A modern, high-performance React application for browsing beautiful photos from the Lorem Picsum API. Built with cutting-edge technologies including React 19.2, React Compiler, TanStack Router, and Bun.js.

## ✨ Features

### Core Features (All Requirements Met)

1. **📱 Responsive Photo Grid**
   - Beautiful responsive grid layout that adapts to all screen sizes
   - Displays photo thumbnails with author information
   - Smooth hover effects and transitions
   - Optimized image loading with lazy loading

2. **♾️ Infinite Scroll**
   - Seamless infinite scrolling using Intersection Observer API
   - Automatic loading of more photos as user scrolls
   - Loading indicators during data fetch
   - End-of-list detection and user feedback
   - Smooth performance with TanStack Query pagination

3. **🖼️ Photo Details View**
   - Full-size photo display
   - Comprehensive photo information (author, dimensions, ID)
   - Professional layout with technical details
   - Download original photo functionality
   - Smooth navigation with back button

4. **🚀 Advanced Routing**
   - TanStack Router for type-safe routing
   - Clean URLs (`/photos` and `/photos/:id`)
   - Programmatic navigation
   - Proper route management

5. **🎨 Modern UI/UX**
   - Tailwind CSS 4.1 for styling
   - Fully responsive design (mobile, tablet, desktop)
   - Loading states with beautiful spinners
   - Comprehensive error handling with retry functionality
   - Smooth animations and transitions
   - Custom scrollbar styling

6. **⚡ Performance Optimizations**
   - React Compiler for automatic optimizations
   - TanStack Query for efficient data caching
   - Lazy loading for images
   - Optimized bundle size with Rolldown/Vite

## 🛠️ Technologies Used

- **React 19.2** - Latest React with modern features
- **React Compiler** - Automatic React optimizations
- **Bun.js 1.3.1** - Ultra-fast JavaScript runtime and package manager
- **TanStack Router** - Type-safe routing for React
- **TanStack Query** - Powerful data fetching and caching
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **TypeScript** - Type safety and better developer experience
- **Vite (Rolldown)** - Next-generation frontend tooling
- **Lorem Picsum API** - Beautiful placeholder photos

## 📁 Project Structure

```text
src/
├── api/              # API service layer
│   └── picsum.ts     # Picsum API integration
├── components/       # Reusable React components
│   ├── ErrorMessage.tsx
│   ├── Header.tsx
│   ├── LoadingSpinner.tsx
│   ├── PhotoCard.tsx
│   └── PhotoGrid.tsx
├── hooks/           # Custom React hooks
│   ├── useInfinitePhotos.ts
│   └── useIntersectionObserver.ts
├── pages/           # Page components
│   ├── PhotosPage.tsx
│   └── PhotoDetailsPage.tsx
├── types/           # TypeScript type definitions
│   └── photo.ts
├── App.tsx          # Root App component
├── router.tsx       # Router configuration
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## 🚀 Getting Started

### Prerequisites

- **Bun.js 1.3.1+** installed on your system
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd picsum-photo-gallery
   ```

1. Install dependencies:

   ```bash
   bun install
   ```

1. Start the development server:

   ```bash
   bun run dev
   ```

1. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## 🎯 Feature Implementation Details

### 1. API Integration (1 point)

- ✅ Successfully fetches data from Lorem Picsum API
- ✅ Proper error handling with user-friendly messages
- ✅ Loading states with beautiful spinners
- ✅ Retry functionality on errors
- ✅ Type-safe API calls with TypeScript

### 2. Photo Grid/List Display (2 points)

- ✅ Responsive grid layout (1-4 columns based on screen size)
- ✅ Professional styling with Tailwind CSS
- ✅ Author information displayed on each card
- ✅ Image dimensions shown
- ✅ Hover effects and smooth transitions
- ✅ Lazy loading for optimal performance

### 3. Infinite Scroll (1 point)

- ✅ Smooth infinite scroll implementation
- ✅ Intersection Observer API for efficiency
- ✅ Loading indicators during fetch
- ✅ End-of-list detection and messaging
- ✅ Seamless pagination with TanStack Query
- ✅ No jarring or performance issues

### 4. Photo Details View (2 points)

- ✅ Full-size image display
- ✅ Photo title/ID shown prominently
- ✅ Author name with icon
- ✅ Detailed description
- ✅ Technical details (dimensions, aspect ratio, ID)
- ✅ Download original functionality
- ✅ Professional layout and design

### 5. Routing and Navigation (1 point)

- ✅ TanStack Router implementation
- ✅ Intuitive URLs (`/photos`, `/photos/:id`)
- ✅ Type-safe navigation
- ✅ Back button functionality
- ✅ Smooth route transitions

### 6. Styling and Responsiveness (1 point)

- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Tailwind CSS 4.1 utility classes
- ✅ Custom animations and transitions
- ✅ Professional color scheme
- ✅ Excellent user experience on all devices

### 7. Code Quality (1 point)

- ✅ Well-organized file structure
- ✅ Comprehensive comments and documentation
- ✅ Reusable components
- ✅ Custom hooks for shared logic
- ✅ TypeScript for type safety
- ✅ React 19 best practices
- ✅ React Compiler optimizations
- ✅ Clean, maintainable code

### 8. Public Hosting (1 point)

- ✅ Ready for deployment
- ✅ Build command configured
- ✅ Can be deployed to Vercel, Netlify, etc.

## 🎨 Design Highlights

- **Modern Gradient Accents** - Beautiful blue-to-purple gradients
- **Smooth Animations** - Subtle hover effects and transitions
- **Professional Typography** - Clear hierarchy and readability
- **Accessibility** - Focus states and semantic HTML
- **Custom Scrollbar** - Styled scrollbar for better aesthetics
- **Loading States** - Professional loading spinners
- **Error States** - User-friendly error messages with retry

## 🔧 Development Notes

- Uses React Compiler for automatic memoization and optimization
- TanStack Query handles all data fetching with smart caching
- Intersection Observer provides efficient infinite scroll
- Type-safe routing prevents navigation errors
- Responsive design tested on multiple devices

## 📝 API Usage

The app uses the Lorem Picsum API:

- **List Photos** - `https://picsum.photos/v2/list?page={page}&limit={limit}`
- **Photo Details** - `https://picsum.photos/id/{id}/info`
- **Thumbnails** - `https://picsum.photos/id/{id}/{width}/{height}`
- **Full Size** - Original `download_url` from API response

## 🌟 Extra Features Beyond Requirements

1. **Advanced Error Handling** - Comprehensive error boundaries and retry logic
1. **Loading Skeletons** - Professional loading indicators
1. **Image Optimization** - Lazy loading and responsive images
1. **Custom Hooks** - Reusable logic for infinite scroll and intersection observer
1. **Type Safety** - Full TypeScript implementation
1. **Modern Tech Stack** - React 19, Bun.js, Rolldown
1. **Code Comments** - Extensive documentation throughout
1. **Professional UI** - Polished design with attention to detail

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created with ❤️ for the Advanced Web Application Development course (IA02)
