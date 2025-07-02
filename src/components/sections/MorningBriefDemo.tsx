
import { useState, useEffect } from 'react';
import { MessageCircle, Calendar, User } from 'lucide-react';
import PhoneHeader from './morning-brief-demo/PhoneHeader';
import ChatMessage from './morning-brief-demo/ChatMessage';
import ScheduleCard from './morning-brief-demo/ScheduleCard';
import BirthdayCard from './morning-brief-demo/BirthdayCard';
import TypingIndicator from './morning-brief-demo/TypingIndicator';

const MorningBriefDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const messages = [
    { type: 'user', text: 'Good morning Asmi', delay: 600 },
    { type: 'typing', delay: 500 },
    { type: 'asmi', text: 'Good morning! Here\'s your day:', delay: 700 },
    { type: 'typing', delay: 400 },
    { 
      type: 'schedule', 
      items: [
        { icon: Calendar, text: '9 AM: Board meeting prep', color: 'text-blue-400' },
        { icon: User, text: '2 PM: 1:1 with Sarah', color: 'text-green-400' },
        { icon: Calendar, text: '4 PM: Investor call', color: 'text-purple-400' }
      ],
      delay: 600
    },
    { type: 'typing', delay: 500 },
    { 
      type: 'birthday', 
      text: 'Also, it\'s Ria\'s birthday today! 🎂',
      delay: 700
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentElement = document.getElementById('morning-brief-demo');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    const timer = setTimeout(() => {
      if (currentMessage < messages.length) {
        const currentMsg = messages[currentMessage];
        
        if (currentMsg.type === 'typing') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentMessage(prev => prev + 1);
          }, 600);
        } else {
          setCurrentMessage(prev => prev + 1);
        }
      } else {
        setIsComplete(true);
      }
    }, messages[currentMessage]?.delay || 500);

    return () => clearTimeout(timer);
  }, [currentMessage, hasStarted, isComplete]);

  return (
    <div id="morning-brief-demo" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-yellow-400 mx-auto mb-4 text-4xl">☀️</div>
          <h2 className="text-2xl font-light text-white mb-2">Start your day smart.</h2>
        </div>

        {/* Phone mockup */}
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl border border-green-400/30 overflow-hidden shadow-2xl relative">
          <PhoneHeader isTyping={isTyping} />

          {/* Messages */}
          <div className="p-4 space-y-4 bg-gradient-to-b from-gray-900 to-black min-h-[450px] relative">
            <ChatMessage 
              type="user" 
              text={messages[0].text} 
              isVisible={currentMessage >= 1} 
            />

            <TypingIndicator isVisible={isTyping} />

            <ChatMessage 
              type="asmi" 
              text={messages[2].text} 
              isVisible={currentMessage >= 3} 
            />

            <ScheduleCard 
              items={messages[4].items} 
              isVisible={currentMessage >= 5} 
            />

            <BirthdayCard 
              text={messages[6].text} 
              isVisible={currentMessage >= 7} 
            />

            {/* Floating action indicators */}
            {currentMessage >= 3 && (
              <div className="absolute bottom-4 right-4 space-y-2">
                <div className="bg-green-500/20 border border-green-400/40 rounded-full p-2">
                  <MessageCircle size={12} className="text-green-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm font-light">
            Asmi remembered Ria's birthday from last month's conversation
          </span>
        </div>
      </div>
    </div>
  );
};

export default MorningBriefDemo;
