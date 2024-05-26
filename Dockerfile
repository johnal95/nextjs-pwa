# Base image
FROM node:20.13-slim as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts

# App builder image (ditto)
FROM base AS ditto-builder
RUN pnpm deploy --filter=ditto /usr/builder/ditto
WORKDIR /usr/builder/ditto
RUN pnpm build

# App image (ditto)
FROM node:20.13-slim AS ditto
COPY --from=ditto-builder /usr/builder/ditto/.next/standalone /prod/ditto
## Should move to CDN
COPY --from=ditto-builder /usr/builder/ditto/.next/static /prod/ditto/.next/static
## Should move to CDN
COPY --from=ditto-builder /usr/builder/ditto/public /prod/ditto/public
WORKDIR /prod/ditto
ENV PORT=8080
EXPOSE 8080
CMD [ "node", "server.js" ]
