import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageToggle } from "./LanguageToggle";

describe("LanguageToggle", () => {
  it("mostra o idioma atual (PT por padrão)", () => {
    render(<LanguageToggle />);
    expect(screen.getByText("PT")).toBeInTheDocument();
  });

  it("expõe um rótulo acessível para troca de idioma", () => {
    render(<LanguageToggle />);
    expect(
      screen.getByRole("button", { name: /switch to/i }),
    ).toBeInTheDocument();
  });
});
