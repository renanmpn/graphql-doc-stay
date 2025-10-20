# GraphQL Schema — Subscription & Billing API

## Overview
This repository defines the core **GraphQL schema** for the **Subscription and Billing API** within the **Belmont ecosystem** (Stay AI).  
It serves as the foundation for the new **Backend for Frontend (BFF)** layer, providing a consistent, well-documented contract between internal systems and potential merchant-facing consumers.

While stable in its structure, this schema is designed to **evolve over time** — new fields, queries, and mutations may be added as our platform expands.

---

## Purpose
This schema standardizes our key domain entities and relationships:

- **Merchants** — tenants that own customers, products, and subscriptions.  
- **Customers** — user profiles with subscriptions, preferences, and payment methods.  
- **Subscriptions** — recurring contracts including billing cadence, discounts, and gift support.  
- **Products & Variants** — catalog-level data with price configurations.  
- **Orders & Billing Attempts** — fulfillment and payment tracking linked to subscriptions.

The main goals are:
- Provide a **clear**, type-safe API surface.  
- Maintain flexibility to support both internal and external consumers.  
- Encourage **domain-driven design** and consistency across services.

---

## Design Principles

### 1. Clarity
Predictable naming conventions and type hierarchies make it easy to navigate.  
Pagination, filtering, and error handling follow a consistent pattern across the schema.

### 2. Extensibility
The schema is additive by design — new fields, enums, and nested types can be added without breaking clients.  
Future additions like `Presentment` objects (for easier frontend display) are planned.

### 3. Separation of Concerns
The schema focuses on **domain modeling**, not presentation.  
However, small conveniences for frontend integration (e.g. product/variant fallback fields) are allowed when they improve usability.

### 4. Error Transparency
Partial errors are surfaced in the `errors` field of connection results (e.g. `SubscriptionConnection.errors`), allowing partial data to be returned without breaking the full query.

---

## Running Locally

You can run this schema locally using [**GraphQL Yoga**](https://the-guild.dev/graphql/yoga-server).

### 1. Clone the project
```bash
git clone https://github.com/your-org/graphql-doc.git
cd graphql-doc
```
### 2. Install dependencies

You can use either npm or pnpm:

```bash
npm install
# or
pnpm install
```

### 3. Start the local GraphQL server

```bash
npm run dev
# or
pnpm dev
```

By default, the server starts on http://localhost:4000/graphql.

### 4. Open the Playground

Once the server is running, open your browser at: 
`http://localhost:4000/graphql`

> **Note:**  
> This local Yoga setup is intended for **schema exploration and documentation only**.  
> It does not connect to a live backend, so queries and mutations will not execute real data operations.  
> You can use it to inspect the types, relationships, and documentation of the GraphQL schema.

## Generating docs

You can generate the docs to be exported using the command:

```bash
npm run docs:generate

# or

pnpm docs:generate
```
