import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '@src/pages/NotFoundPage';
import { HostPage } from '@src/pages/HostPage';

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<HostPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
