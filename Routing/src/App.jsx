import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Layout, Home, About, Contact, Github, User,loaderdata } from "./index";
function App() {
  // const route=createBrowserRouter([{
  //     path:"/",
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path:"about",
  //         element:<About/>
  //       },
  //       {
  //         path:"contact",
  //       element:<Contact/>
  //       },
  //       {
  //         path:"github",
  //         element:<Github/>
  //       },
  //       {
  //         path:"user/:id",
  //         element:<User/>
  //       },
  //       {
  //         path:"*",
  //         element:<h1 className="text-center text-6xl m-10">The page does not exist</h1>
  //       }
  //     ]
  //   }
  //   ])
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="github"
          element={<Github />}
          loader={loaderdata}
        />
        <Route path="user/:id" element={<User />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-6xl m-10">
              The page does not exist
            </h1>
          }
        />
      </Route>
    )
  );
  return (
    // <BrowserRouter>
    //   <Routes>
    // <Route path="/" element={<Layout />}>
    //   <Route index element={<Home />}/>
    //   <Route path="about" element={<About/>} />
    //   <Route path="contact" element={<Contact/>}/>
    //   <Route path="github" element={<Github/>}/>
    //   <Route path="user/:id" element={<User/>}/>
    //   <Route path="*" element={<h1 className="text-center text-6xl m-10">The page does not exist</h1>}/>
    // </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={route} />
  );
}

export default App;
