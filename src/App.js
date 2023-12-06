import React from 'react' ;
import {Experience, Blogs, Header, Skills, Projects} from './container/index' ;
import {Navbar} from './components/index' ;
import './App.scss' ;
const App = () => {

    return (
        <div className='app'>
            <Navbar />
            <Header />
            <Skills />
            <Experience />
            <Projects />
            <Blogs />
            {/* <Footer /> */}
        </div>
    )
}

export default App ;