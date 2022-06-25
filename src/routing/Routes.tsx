import React, { ReactElement, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Layout = React.lazy(() => import('./../components/Layout/Layout'))

const RoutesContainer: React.FC = (): ReactElement => {
  // React.useEffect(() => {
  //   if (!isAuth) {
  //     navigate('/auth', { replace: true });
  //   }
  // }, []);

  return (
    // <Suspense
    //   fallback={
    //     <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
    //       <Loader />
    //     </div>
    //   }
    // >
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route element={<></>} />
    </Routes>
    // </Suspense>
  )
}

export default RoutesContainer
