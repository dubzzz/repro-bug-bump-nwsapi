import styled from "styled-components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test } from "vitest";
import React from "react";

const Name = styled.span``;
const Compo = styled.div`
  &:focus-within:not(:has(${Name}:focus)) {
    border: 1px;
  }
`;

test("attempt", async () => {
  render(
    <Compo data-testid="plip">
      <Name data-testid="plop" />
    </Compo>
  );
  await userEvent.click(await screen.findByTestId("plip"));
  await userEvent.click(await screen.findByTestId("plop"));
});
