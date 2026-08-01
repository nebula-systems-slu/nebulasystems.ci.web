import { describe, it, expect } from "vitest";
import { translations } from "./translations";

/**
 * Coleta os caminhos de chave de um objeto (recursivo). Para arrays, usa o
 * shape do primeiro elemento. Serve para comparar a ESTRUTURA das traduções
 * PT-BR e EN e pegar qualquer chave faltando ou sobrando em um dos idiomas.
 */
function keyPaths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return value.length ? keyPaths(value[0], `${prefix}[]`) : [`${prefix}[]`];
  }
  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      keyPaths(v, prefix ? `${prefix}.${k}` : k),
    );
  }
  return [prefix];
}

describe("i18n / translations", () => {
  it("PT-BR e EN têm exatamente a mesma estrutura de chaves", () => {
    const pt = keyPaths(translations["pt-BR"]).sort();
    const en = keyPaths(translations["en"]).sort();
    expect(en).toEqual(pt);
  });

  it("não há textos de tradução vazios", () => {
    const hasEmptyString = (obj: unknown): boolean => {
      if (typeof obj === "string") return obj.trim() === "";
      if (Array.isArray(obj)) return obj.some(hasEmptyString);
      if (obj && typeof obj === "object") return Object.values(obj).some(hasEmptyString);
      return false;
    };
    expect(hasEmptyString(translations["pt-BR"])).toBe(false);
    expect(hasEmptyString(translations["en"])).toBe(false);
  });
});
