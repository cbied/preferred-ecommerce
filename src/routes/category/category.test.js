import { screen, render } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test/test.utils";
import Category from "./category.component";
import LoadingPage from "../../components/loading-page/loading-page.componet";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        category: 'womens'
    }),
}))


describe("Category component", () => {
    test("it should render products in category component if isLoaidng is false", () => {
        renderWithProviders(<Category />, {
        preloadedstate: {
                categories: {
                    isLoading: false,
                    categories: [{
                        title: 'womens',
                        items: [
                        {id: 1, name: 'product 1', imageUrl: 'url', price: 10},
                        {id: 2, name: 'product 2', imageUrl: 'url', price: 10}
                    ]}
                ]
            }
            
        }})

        const product1Element = screen.getByText(/product 1/i);
        expect(product1Element).toBeInTheDocument();
    })

    test("it should render a spinner if isLoaidng is true", async () => {
        render(<LoadingPage isLoading={true} />)

        const loadingElement = screen.getByTestId("loading-component")
        expect(loadingElement).toBeInTheDocument();
    })

    test("it should not render a spinner if isLoaidng is false", () => {
        render(<LoadingPage isLoading={false} />)

        const loadingElement = screen.queryByTestId("loading-component")
        expect(loadingElement).toBeNull();
    })


})