import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("links visitors to the home and discovery pages", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "映界" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "探索" })).toHaveAttribute("href", "/search");
  });
});
