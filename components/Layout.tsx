import Header from './Header'
import {ReactNode} from 'react';

export interface Props {
    title: string;
    children: ReactNode[] | ReactNode;
  }

const Layout = (props: Props) => (
    <div className="mx-auto max-w-xl p-4 md:p-12">
        <Header />
        <div className="p-4 shadow rounded bg-white">
            <h1 className="text-purple leading-normal">{props.title}</h1>
            <span className="text-grey-dark">
            {props.children}
            </span>
        </div>
    </div>
)

export default Layout