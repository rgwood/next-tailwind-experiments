import '../styles/index.css'
import Layout from '../components/Layout'
import RecentArticles from '../components/RecentArticles';
import Search from '../components/Search';
import { withRouter } from 'next/router';

function searchInputMirror(input: string) {
  return <div className="text-purple">input</div>
}

export default withRouter((props) => { 
  if(!props.router) {
    throw new Error("Router not defined. Something's up with Next.js");
  }
  return <Layout title="Home Page">
      <p>Made with Tailwind CSS and Next.js</p>
      {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      value={searchInput} onChange={e => setSearchInput(e.target.value)}/> */}
      <Search router={props.router}/>
       <div/>
      {/* <button className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow" 
      onClick={() => props.router ? props.router.push("/about") : console.log("router not defined") }>Click Me</button>
      <div/> */}
      <div className="mt-4">
        <RecentArticles/>
      </div>
    </Layout>}
)
