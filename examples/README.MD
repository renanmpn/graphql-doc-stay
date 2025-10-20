# GraphQL Examples

This folder contains minimal, copy-pasteable GraphQL examples for your schema.

## Notes
- Pagination: use `pageInfo.endCursor` to fetch the next page.
- Partial failures: check the `errors` array in connections and forecast responses.
- Money: server normalizes `Float` amounts to currency precision (e.g., 2 decimals).

## Files
- `queries/` – read operations (customers, subscriptions, merchant scope, forecast).
- `mutations/` – write operations (create subscription, swap line).
