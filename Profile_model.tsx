import React from 'react';
import { X, User, Settings, Heart, Download, LogOut, Crown } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: User, label: 'My Profile', action: () => console.log('Profile clicked') },
    { icon: Heart, label: 'Favorites', action: () => console.log('Favorites clicked') },
    { icon: Download, label: 'Downloads', action: () => console.log('Downloads clicked') },
    { icon: Crown, label: 'Premium', action: () => console.log('Premium clicked') },
    { icon: Settings, label: 'Settings', action: () => console.log('Settings clicked') },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Profile</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">SuryaVinyak</h3>
              <p className="text-sm text-gray-600">Premium Member</p>
              <div className="flex items-center mt-1">
                <Crown className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-xs text-yellow-600 font-medium">VIP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-900">{item.label}</span>
            </button>
          ))}
          
          <hr className="my-4" />
          
          <button
            onClick={() => console.log('Logout clicked')}
            className="w-full flex items-center space-x-3 p-3 hover:bg-red-50 rounded-lg transition-colors text-left text-red-600"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
