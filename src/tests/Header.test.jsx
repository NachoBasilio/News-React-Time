import Header from "../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
    test("Si hay un header", () => {
        render(<Header />);

        const header = screen.getByRole("heading", { name: "Noticias Saturno" });

    });
})