# Blog Application

A simple and responsive blog application that features a dynamic frontend and a robust backend API.

## Introduction

This project is a **full-stack blog application** designed to provide a seamless and responsive user experience. It includes a homepage displaying blog posts in a grid layout and individual post pages showing detailed content. The application is built with modern technologies, ensuring performance, scalability, and ease of maintenance.

The application includes a **WYSIWYG editor** (What You See Is What You Get) for creating posts, making content creation intuitive. The post feed is designed with a responsive layout and features **infinite scroll** for a smooth browsing experience. Additionally, users can personalize the visual appearance with a theme switcher, allowing them to choose the color theme that best suits their taste.

## Installation

### Frontend

1. **Clone the repository:**

```bash
git clone https://github.com/iNikolas/nextjs-blog-frontend
cd nextjs-blog-frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Build the project for production:**

```bash
npm run build
npm run start
```

## API Documentation

1. **Visit Swagger documentation page:**

The API is documented using Swagger. Visit the following URL to view the API documentation: [openapi](https://nestjs-blog-backend.onrender.com/api)

2. **Autogenerate API methods and TypeScript types:**

The `api` folder in the project root contains autogenerated types and methods. To update the API documentation and regenerate these files, run the following command:

```bash
npm run generate-api
```

## Deployment

- **Frontend:** Deployed on [Vercel](https://nextjs-blog-frontend-one.vercel.app/)
- **Backend:** Deployed on [Render](https://nestjs-blog-backend.onrender.com)

## Contributing

We welcome contributions! If you would like to make significant changes, please open an issue first to discuss your ideas.

You can find backend source code [here](https://github.com/iNikolas/nestjs-blog-backend)

## License

[MIT](https://choosealicense.com/licenses/mit/)
