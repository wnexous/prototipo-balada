import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Splash } from './screens/Splash';
import { CreateAccount } from './screens/CreateAccount';
import { VerifyIdentity } from './screens/VerifyIdentity';
import { ProfileSetup } from './screens/ProfileSetup';
import { Login } from './screens/Login';
import { ForgotPassword } from './screens/ForgotPassword';
import { EventFeed } from './screens/EventFeed';
import { MapView } from './screens/MapView';
import { EventDetail } from './screens/EventDetail';
import { TicketPurchase } from './screens/TicketPurchase';
import { MyTicket } from './screens/MyTicket';
import { WhoIsHere } from './screens/WhoIsHere';
import { Match } from './screens/Match';
import { Chat } from './screens/Chat';
import { Matches } from './screens/Matches';
import { Crew } from './screens/Crew';
import { SOS } from './screens/SOS';
import { Notifications } from './screens/Notifications';
import { Settings } from './screens/Settings';
import { EmergencyContacts } from './screens/EmergencyContacts';
import { SearchExpanded } from './screens/SearchExpanded';
import { PersonProfile } from './screens/PersonProfile';
import { EventRating } from './screens/EventRating';

export default function App() {
  return (
    <HashRouter>
      <div
        className="size-full flex items-center justify-center"
        style={{
          minHeight: '100vh',
          background:
            'radial-gradient(120% 120% at 50% 0%, #14141a 0%, #0a0a0c 45%, #000000 100%)',
          padding: 24,
        }}
      >
        {/* Phone device frame */}
        <div
          className="relative"
          style={{
            padding: 12,
            borderRadius: 58,
            background: 'linear-gradient(145deg, #2a2a30, #0c0c0e)',
            boxShadow:
              '0 0 0 2px #000, 0 30px 80px -20px rgba(0,0,0,0.9), 0 0 120px -30px #e8ff4733',
          }}
        >
          {/* side buttons */}
          <div style={{ position: 'absolute', left: -2, top: 150, width: 3, height: 34, borderRadius: 4, background: '#1a1a1d' }} />
          <div style={{ position: 'absolute', left: -2, top: 200, width: 3, height: 58, borderRadius: 4, background: '#1a1a1d' }} />
          <div style={{ position: 'absolute', left: -2, top: 272, width: 3, height: 58, borderRadius: 4, background: '#1a1a1d' }} />
          <div style={{ position: 'absolute', right: -2, top: 220, width: 3, height: 80, borderRadius: 4, background: '#1a1a1d' }} />

          <div
            className="relative w-[390px] h-[844px] overflow-hidden bg-[#080808]"
            style={{ borderRadius: 46 }}
          >
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/verify" element={<VerifyIdentity />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/home" element={<EventFeed />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/event/:id/ticket" element={<TicketPurchase />} />
            <Route path="/my-ticket" element={<MyTicket />} />
            <Route path="/who-is-here" element={<WhoIsHere />} />
            <Route path="/match/:personName" element={<Match />} />
            <Route path="/chat/:personName" element={<Chat />} />
            <Route path="/messages" element={<Matches />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/sos" element={<SOS />} />
            <Route path="/people" element={<Crew />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/emergency-contacts" element={<EmergencyContacts />} />
            <Route path="/search" element={<SearchExpanded />} />
            <Route path="/profile/:personName" element={<PersonProfile />} />
            <Route path="/event-rating" element={<EventRating />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1e1e1e',
                border: '1px solid #2a2a2a',
                borderRadius: 14,
                color: '#f5f5f5',
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                maxWidth: 358,
              },
            }}
          />
        </div>
        </div>
      </div>
    </HashRouter>
  );
}
