# CV Generator

This project is a simple CV generator app that allows users to create and customize their CVs by inputting data.

## Overview

The CV Generator is built using React and powered by [Vite](https://vite.dev/), a modern build tool that offers a faster and leaner developer experience. This project was developed both as a learning exercise and a showcase of skills in component design and React development.

## Live Demo

Try the app live here: [CV Generator Live](https://cv-generator-ashy.vercel.app/)

## Key Features

- **Reusable Component Architecture:**<br>
  Inspired by the [shadcn/ui](https://ui.shadcn.com/) library, the app emphasizes modular and reusable components. This approach ensures consistency and scalability.

- **Custom CV Templates:**<br>
  A highlight of the project is the CV Template Component, a reusable building block for designing CVs. This component simplifies the creation of new CV layouts using predefined primitives like `CVContainer`, `CVLayout`, and `CVColumns`.

  - Example: The Base template, located in `src/components/CV/Templates/Base`, implements a minimalist CV design based on this [Figma template](https://www.figma.com/community/file/1123475972360173966/minimal-resume-and-cover-letter-template-minimalist-minimalism) by [@Carmen Minikus](https://www.figma.com/@minikus).

- **Collapsible Elements:**<br>
  The app also introduces custom components such as `CollapsibleCard` and `CollapsibleGroups`, showcasing flexibility and design exploration in React.

- **Printable and Downloadable CV:**<br>
  Users can semalessly print or download their generated CVs, making the application practical for real-word use.

## How It's Built

- **Frontend Framework:** React (via Vite for faster development).
- **Component Design:** Reusable primitives inspired by shadcn/ui.
- **Styling:** Custom CSS Modules to mitigate style conflicts and ensure scoped styling.
- **Deployment:** Deployed using Vercel.

## Learning Journey

This project represents a deep dive into:

- Creating reusable and modular components.
- Exploring component-based design principles.
- Translating design prototypes into functional code.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shahiutsav/cv-generator.git
   cd cv-generator
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## Future Enhancements

- Additional CV templates with varied layouts and styles.
- Improved customization options for users (e.g., color schemes, font selection).
- Integration with cloud storage for saving user data.

## Acknowledgments

Special thanks to:

- [shadcn/ui](https://ui.shadcn.com/) for inspiration in component design.
- [@Carmen Minikus](https://www.figma.com/@minikus) for the minimalist CV design used in this project.
