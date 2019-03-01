import Header from './Header'

const Layout = (props) => (
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