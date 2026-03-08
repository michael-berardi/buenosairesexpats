export type FactOverride<T = unknown> = {
  reviewDate: string;
  sourceUrls: readonly string[];
  patch: T;
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge<T>(base: T, patch: unknown): T {
  if (patch === undefined) {
    return base;
  }

  if (Array.isArray(patch)) {
    return patch as T;
  }

  if (!isPlainObject(base) || !isPlainObject(patch)) {
    return patch as T;
  }

  const output: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(patch)) {
    output[key] = isPlainObject(output[key]) && isPlainObject(value) ? deepMerge(output[key], value) : value;
  }

  return output as T;
}

export function applyFactOverridesBySlug<T extends { slug: string }>(
  value: readonly T[],
  overrides: Record<string, FactOverride>
): T[] {
  return value.map((entry) => {
    const override = overrides[entry.slug];
    return override ? deepMerge(entry, override.patch) : entry;
  });
}
