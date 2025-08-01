import './index.css'; // Assuming you have styles for the button
import Sidebar from './components/Sidebar';
import Center from './components/Center';
import Preview from './components/Preview';
import Navbar from './components/navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen w-screen overflow-hidden font-sans">
        <Sidebar />
        <Center />
        <Preview />
      </div>
    </div>
  );
}
