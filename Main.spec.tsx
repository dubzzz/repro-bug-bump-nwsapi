import styled from "styled-components";
import { render } from "@testing-library/react";
import { test } from "vitest";
import React from "react";

const Name = styled.span``;
const Compo = styled.div`
  &:focus-within:not(:has(${Name}:focus)) {
  }
`;

test("attempt", () => {
  render(<Compo />);
});
