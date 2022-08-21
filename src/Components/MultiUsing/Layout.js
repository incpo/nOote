import { Columns } from "react-bulma-components";

export const Layout = ({children}) => {
    return(
        <Columns centered breakpoint='tablet'>
            <Columns.Column mobile={{size: '10'}} style={{margin: '0 auto'}} desktop={{size: '10'}}>
                {children}
            </Columns.Column>
        </Columns>
    )
}