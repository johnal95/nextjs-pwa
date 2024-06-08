# App builder image
FROM node:20.14-slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /usr/builder
WORKDIR /usr/builder
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm run build

# App image (ditto)
FROM node:20.14-slim AS ditto
COPY --from=builder --chown=node:node /usr/builder/apps/ditto/.next/standalone /usr/runner
WORKDIR /usr/runner/apps/ditto
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
USER node
CMD [ "node", "server.js" ]
