import React, { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import MobileBottomBar from './MobileBottomBar';
import AppointmentModal from '../modals/AppointmentModal';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openModal = () => setIsAppointmentModalOpen(true);
  const closeModal = () => setIsAppointmentModalOpen(false);

  return (
    <div className="layout-wrapper">
      <Header onOpenAppointment={openModal} />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
      <MobileBottomBar 
        onOpenAppointment={openModal} 
        isAppointmentModalOpen={isAppointmentModalOpen} 
      />
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Layout;
