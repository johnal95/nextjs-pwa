# Base image
FROM node:20.13-slim as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# App builder image
FROM base AS builder
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm run build
RUN pnpm deploy --filter=ditto --prod /prod/ditto

# App image (ditto)
FROM base AS ditto
COPY --from=builder /prod/ditto /prod/ditto
WORKDIR /prod/ditto
RUN corepack install
EXPOSE 8080
CMD [ "pnpm", "start", "--port=8080" ]
