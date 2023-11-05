import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import Router from './components/Router';

export default function App() {
  return (
    <>
        <RecoilRoot>
            <Suspense>
              <RouterProvider router={Router} />
            </Suspense>
        </RecoilRoot>
    </>
  );
}
