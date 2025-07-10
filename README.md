# Tourists Travel Bureau – Next.js Project

Welcome to the **Tourists Travel Bureau** web application. This project is built with [Next.js](https://nextjs.org), optimized for performance and deployed live at:

🔗 **Live URL:** [https://ttb.trovup.online](https://ttb.trovup.online)

---

## 🚀 Getting Started

To set up the project locally, follow the instructions below.

### 1. Clone the Repository

```bash
git clone https://github.com/mshahilt/ttb.git
cd ttb
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The page updates automatically as you edit the source files.


## 📦 Deployment

This project is deployed using **Nginx configured on an AWS EC2 instance**.

> **Live URL:** [https://ttb.trovup.online](https://ttb.trovup.online)

### To Deploy:

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

3. Configure your domain with **Nginx** and point it to your Next.js app (typically on port `3000`).

4. Ensure your **EC2 security group** allows HTTP/HTTPS traffic and your **Nginx config** includes a reverse proxy to port `3000`.

---

## 📚 Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Learn Next.js Tutorial](https://nextjs.org/learn)
* [Vercel Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)

---
