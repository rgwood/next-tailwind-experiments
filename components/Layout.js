import Header from './Header'

const Layout = (props) => (
    <div>
        <Header/>
        <div className="p-4 shadow rounded bg-white">
        {props.children}
        </div>
    </div>
)

export default Layout