import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Bus, MessageSquare, Navigation, Settings, MapPin } from 'lucide-react';
import { useMessages } from '@/hooks/useMessages';
import { Badge } from '@/components/ui/badge';

const BottomNavigation = () => {
  const location = useLocation();
  const { unreadCount } = useMessages();
  const currentPath = location.pathname;

  const navItems = [
    {
      name: 'Map',
      path: '/',
      icon: Navigation,
    },
    {
      name: 'My Stops',
      path: '/my-stops',
      icon: MapPin,
    },
    {
      name: 'Messaging',
      path: '/messages',
      icon: MessageSquare,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-10">
      <div className="container mx-auto px-2">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center py-2 px-3 transition-colors",
                  isActive 
                    ? "text-bus-primary" 
                    : "text-gray-500 hover:text-bus-primary dark:text-gray-400 dark:hover:text-white"
                )}
              >
                <div className="relative">
                  <item.icon className="h-6 w-6 mb-1" />
                  {item.name === 'Messaging' && unreadCount > 0 && (
                    <Badge 
                      variant="secondary"
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs p-0 rounded-full"
                    >
                      {unreadCount}
                    </Badge>
                  )}
                </div>
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
