# ---------- Build Stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Enable corepack to manage Yarn versions
RUN corepack enable

# Copy config files first
COPY package.json yarn.lock .yarnrc.yml ./

# Copy Yarn directory if exists (important for Yarn 4)
COPY .yarn ./.yarn

# Ensure correct Yarn version (Yarn 4.9.1)
RUN corepack prepare yarn@4.9.1 --activate

# Install dependencies
# If you have .yarn/cache → use immutable; otherwise fallback
RUN if [ -d ".yarn/cache" ]; then yarn install --immutable; else yarn install; fi

# Copy rest of app and build
COPY . .
RUN yarn build

# ---------- Runtime Stage ----------
FROM node:18-alpine
WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.9.1 --activate

# Copy built app from builder
COPY --from=builder /app ./

# Set environment for production
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port Azure will map
EXPOSE 3000

# Start Next.js app
CMD ["yarn", "start"]
