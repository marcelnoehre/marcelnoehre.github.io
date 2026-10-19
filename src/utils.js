// Resolves a path from the data files (relative to public/) against the deploy base
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
