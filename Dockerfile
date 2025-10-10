# ---------- Stage 1: Build ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Enable Corepack (manages Yarn versions)
RUN corepack enable
RUN corepack prepare yarn@4.9.1 --activate

# Copy dependency files
COPY package.json yarn.lock .yarnrc.yml ./

# Copy the Yarn metadata folder if present
COPY .yarn ./.yarn

# Install dependencies (no --immutable for CI)
RUN yarn install --frozen-lockfile

# Copy source and build
COPY . .
RUN yarn build

# ---------- Stage 2: Runtime ----------
FROM node:18-alpine
WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.9.1 --activate

COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["yarn", "start"]
