# ---------- Stage 1: Build ----------
FROM node:18-bullseye AS builder
WORKDIR /app

# Enable correct Yarn version
RUN corepack enable && corepack prepare yarn@4.9.1 --activate

# Copy dependency manifests and Yarn config
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies (no immutable/check-cache/frozen flags)
RUN yarn install

# Copy source and build
COPY . .
RUN yarn build

# ---------- Stage 2: Runtime ----------
FROM node:18-bullseye
WORKDIR /app

RUN corepack enable && corepack prepare yarn@4.9.1 --activate

COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["yarn", "start"]
