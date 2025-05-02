import React, { useState } from 'react';
import { Moon, Sun, BookOpen, MessageSquare, LogIn, ArrowRight, Home, Book, Star, History, Library, Bookmark, Search, Plus } from 'lucide-react';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  
  const renderScreen = () => {
    switch(currentScreen) {
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('home')} />;
      case 'home':
        return <HomeScreen 
          onNavigate={(screen) => setCurrentScreen(screen)} 
        />;
      case 'create':
        return <CreateStoryScreen onBack={() => setCurrentScreen('home')} />;
      case 'chat':
        return <ChatScreen onBack={() => setCurrentScreen('home')} />;
      case 'library':
        return <LibraryScreen onBack={() => setCurrentScreen('home')} />;
      default:
        return <LoginScreen onLogin={() => setCurrentScreen('home')} />;
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-soul-lighter">
      <div className="w-full max-w-md h-screen overflow-hidden relative">
        {renderScreen()}
      </div>
    </div>
  );
};

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="flex flex-col h-full bg-soul-lighter text-soul-text p-6">
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <div className="mb-2 flex justify-center">
            <div className="relative">
              <Sun className="text-yellow-400 h-16 w-16 absolute -left-6 -top-6 opacity-70 animate-pulse" />
              <div className="bg-gradient-to-br from-soul-primary to-soul-secondary rounded-full p-4 shadow-lg shadow-soul-primary/30">
                <BookOpen className="h-14 w-14 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-4 soulstory-title font-heading lowercase">soulstory</h1>
          <p className="text-soul-subtext mt-2">Magical stories for kids</p>
        </div>
        
        <div className="w-full space-y-4 mt-8">
          <div className="space-y-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded-lg bg-white border border-soul-light text-soul-text focus:outline-none focus:ring-2 focus:ring-soul-primary shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 rounded-lg bg-white border border-soul-light text-soul-text focus:outline-none focus:ring-2 focus:ring-soul-primary shadow-sm"
            />
          </div>
          <button 
            onClick={onLogin}
            className="w-full p-3 bg-soul-primary rounded-lg font-medium text-white flex items-center justify-center gap-2 shadow-md shadow-soul-primary/30 hover:bg-soul-accent transition-colors"
          >
            <LogIn size={18} />
            Login
          </button>
        </div>
        
        <p className="text-soul-subtext text-sm mt-4">
          Don't have an account? <a href="#" className="text-soul-primary font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
};

const HomeScreen = ({ onNavigate }: { onNavigate: (screen: string) => void }) => {
  return (
    <div className="flex flex-col h-full bg-soul-lighter text-soul-text">
      <header className="p-4 border-b border-soul-light/50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-soul-primary" />
          <h1 className="text-xl font-bold soulstory-title font-heading lowercase">soulstory</h1>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-full bg-white shadow-sm">
            <History className="h-5 w-5 text-soul-secondary" />
          </button>
          <button className="p-2 rounded-full bg-white shadow-sm">
            <Sun className="h-5 w-5 text-yellow-400" />
          </button>
        </div>
      </header>
      
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-soul-text font-heading">Welcome, Parent!</h2>
          <p className="text-soul-subtext">Create magical stories for your little ones</p>
        </div>
        
        <div className="grid grid-cols-1 gap-5">
          <button 
            onClick={() => onNavigate('create')}
            className="p-6 rounded-xl bg-white border border-soul-light/30 flex items-center gap-4 hover:shadow-md transition-all shadow-sm"
          >
            <div className="p-3 bg-soul-light rounded-lg shadow-inner">
              <Plus size={24} className="text-soul-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-soul-text">Create New Story</h3>
              <p className="text-soul-subtext text-sm">Choose characters & concepts</p>
            </div>
          </button>
          
          <button 
            onClick={() => onNavigate('chat')}
            className="p-6 rounded-xl bg-white border border-soul-light/30 flex items-center gap-4 hover:shadow-md transition-all shadow-sm"
          >
            <div className="p-3 bg-soul-light rounded-lg shadow-inner">
              <MessageSquare size={24} className="text-soul-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-soul-text">Story Assistant</h3>
              <p className="text-soul-subtext text-sm">Chat for custom stories</p>
            </div>
          </button>
          
          <button 
            onClick={() => onNavigate('library')}
            className="p-6 rounded-xl bg-white border border-soul-light/30 flex items-center gap-4 hover:shadow-md transition-all shadow-sm"
          >
            <div className="p-3 bg-soul-light rounded-lg shadow-inner">
              <Library size={24} className="text-soul-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-soul-text">Story Library</h3>
              <p className="text-soul-subtext text-sm">Browse pre-made stories</p>
            </div>
          </button>
        </div>
      </div>
      
      <nav className="grid grid-cols-3 border-t border-soul-light/50 bg-white">
        <button className="p-4 flex flex-col items-center justify-center text-soul-primary">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="p-4 flex flex-col items-center justify-center text-soul-subtext">
          <Star size={20} />
          <span className="text-xs mt-1">Favorites</span>
        </button>
        <button className="p-4 flex flex-col items-center justify-center text-soul-subtext">
          <Book size={20} />
          <span className="text-xs mt-1">History</span>
        </button>
      </nav>
    </div>
  );
};

const CreateStoryScreen = ({ onBack }: { onBack: () => void }) => {
  const [solanaElement, setSolanaElement] = useState('');
  const [character, setCharacter] = useState('');
  const [childAge, setChildAge] = useState('');
  
  const solanaElements = [
    { id: 'blockchain', name: 'Magic Chain of Memory Boxes' },
    { id: 'sol', name: 'Sunshine Coins' },
    { id: 'wallet', name: 'Friendly Ghost Pouch' },
    { id: 'smart-contract', name: 'Promise Scroll' },
    { id: 'validator', name: 'Helper Heroes' },
    { id: 'nft', name: 'One-of-a-kind Treasure Cards' }
  ];
  
  const characters = [
    { id: 'princess', name: 'Princess' },
    { id: 'dragon', name: 'Dragon' },
    { id: 'spacekid', name: 'Space Explorer' },
    { id: 'pirate', name: 'Pirate' },
    { id: 'fairy', name: 'Fairy' },
    { id: 'robot', name: 'Robot' }
  ];
  
  const ageOptions = [
    { id: '5', name: '5 years' },
    { id: '6', name: '6 years' },
    { id: '7', name: '7 years' },
    { id: '8', name: '8 years' },
    { id: '9', name: '9 years' },
    { id: '10', name: '10 years' }
  ];
  
  return (
    <div className="flex flex-col h-full bg-soul-lighter text-soul-text">
      <header className="p-4 border-b border-soul-light/50 flex justify-between items-center bg-white">
        <button onClick={onBack} className="text-soul-primary">
          <ArrowRight className="h-6 w-6 rotate-180" />
        </button>
        <h1 className="text-xl font-bold text-soul-text font-heading">Create a Story</h1>
        <div className="w-6"></div>
      </header>
      
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="space-y-5">
          <div>
            <label className="block text-soul-subtext mb-2 font-medium">Child's Age</label>
            <div className="bg-white rounded-lg p-1 shadow-sm border border-soul-light/50">
              <div className="grid grid-cols-3 gap-2">
                {ageOptions.map((age) => (
                  <button 
                    key={age.id}
                    onClick={() => setChildAge(age.id)}
                    className={`p-3 rounded-lg text-center text-sm ${
                      childAge === age.id 
                        ? 'bg-soul-primary text-white shadow-sm' 
                        : 'bg-soul-light/20 text-soul-subtext'
                    }`}
                  >
                    {age.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-soul-subtext mb-2 font-medium">Select a Solana Element</label>
            <div className="bg-white rounded-lg p-1 shadow-sm border border-soul-light/50">
              <div className="grid grid-cols-2 gap-2">
                {solanaElements.map((element) => (
                  <button 
                    key={element.id}
                    onClick={() => setSolanaElement(element.id)}
                    className={`p-3 rounded-lg text-left text-sm ${
                      solanaElement === element.id 
                        ? 'bg-soul-primary text-white shadow-sm' 
                        : 'bg-soul-light/20 text-soul-subtext'
                    }`}
                  >
                    {element.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-soul-subtext mb-2 font-medium">Select a Character</label>
            <div className="bg-white rounded-lg p-1 shadow-sm border border-soul-light/50">
              <div className="grid grid-cols-2 gap-2">
                {characters.map((char) => (
                  <button 
                    key={char.id}
                    onClick={() => setCharacter(char.id)}
                    className={`p-3 rounded-lg text-left text-sm ${
                      character === char.id 
                        ? 'bg-soul-primary text-white shadow-sm' 
                        : 'bg-soul-light/20 text-soul-subtext'
                    }`}
                  >
                    {char.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <h3 className="text-soul-subtext mb-2 font-medium">Story Prompt:</h3>
            <div className="bg-white rounded-lg p-4 border border-soul-light/50 shadow-sm">
              {solanaElement && character && childAge ? (
                <p className="text-soul-text">
                  Create a story for a {childAge}-year-old about a {characters.find(c => c.id === character)?.name.toLowerCase()} 
                  who discovers the {solanaElements.find(e => e.id === solanaElement)?.name} 
                  in the magical Solana Kingdom.
                </p>
              ) : (
                <p className="text-soul-subtext italic">
                  Select age, Solana element, and character to generate your story prompt...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-soul-light/50 bg-white">
        <button 
          disabled={!solanaElement || !character || !childAge}
          className={`w-full p-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-sm ${
            solanaElement && character && childAge
              ? 'bg-soul-primary text-white shadow-soul-primary/20 hover:bg-soul-accent transition-colors'
              : 'bg-soul-light/50 text-soul-subtext'
          }`}
        >
          <BookOpen size={18} />
          Generate Story
        </button>
      </div>
    </div>
  );
};

const ChatScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col h-full bg-soul-lighter text-soul-text">
      <header className="p-4 border-b border-soul-light/50 flex justify-between items-center bg-white">
        <button onClick={onBack} className="text-soul-primary">
          <ArrowRight className="h-6 w-6 rotate-180" />
        </button>
        <h1 className="text-xl font-bold text-soul-text font-heading">Story Assistant</h1>
        <button className="p-2 rounded-full bg-soul-light/50 shadow-sm">
          <Plus className="h-5 w-5 text-soul-primary" />
        </button>
      </header>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-6">
        <div className="flex justify-center">
          <div className="bg-soul-light/50 rounded-full px-3 py-1 text-xs text-soul-subtext">
            Today, 3:45 PM
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-soul-primary h-8 w-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-sm shadow-soul-primary/20">
            <BookOpen className="h-4 w-4 text-white" />
          </div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none max-w-xs shadow-sm border border-soul-light/30">
            <p className="text-soul-text">
              Hello! I'm SoulStory, your magical storytelling assistant. 
              What kind of story would you like today?
            </p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <div className="bg-soul-primary p-4 rounded-2xl rounded-tr-none max-w-xs shadow-sm">
            <p className="text-white">
              Can you tell a story about a princess who discovers Sunshine Coins for my 7-year-old daughter?
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-soul-primary h-8 w-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-sm shadow-soul-primary/20">
            <BookOpen className="h-4 w-4 text-white" />
          </div>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-soul-light/30">
            <p className="text-soul-text">
              Once upon a time, in the magical Solana Kingdom, there lived a curious princess named Luna with flowing golden hair and bright eyes that sparkled like stars...
            </p>
            <p className="text-soul-text mt-2">
              One sunny morning, Luna discovered a glowing Sunshine Coin beneath her pillow. It wasn't like any coin she had seen before—it sparkled with magical light that seemed to dance across her room!
            </p>
            <p className="text-soul-text mt-2">
              [Story would continue with the princess learning about Sunshine Coins (SOL)]
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-soul-light/50 bg-white">
        <div className="flex items-center bg-soul-light/30 rounded-xl p-2 shadow-inner">
          <input 
            type="text" 
            placeholder="Ask for a story..." 
            className="flex-1 bg-transparent border-none p-2 focus:outline-none text-soul-text"
          />
          <button className="p-2 rounded-full bg-soul-primary shadow-sm hover:bg-soul-accent transition-colors">
            <ArrowRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const LibraryScreen = ({ onBack }: { onBack: () => void }) => {
  const storyCategories = [
    { id: 'all', name: 'All Stories' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'nft', name: 'NFTs' },
    { id: 'wallet', name: 'Wallets' }
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const libraryStories = [
    {
      id: 1,
      title: "The Dragon's Magic Chain",
      concept: "blockchain",
      preview: "A brave dragon discovers how the Magic Chain of Memory Boxes connects everyone in the kingdom...",
      image: "dragon"
    },
    {
      id: 2,
      title: "Princess Luna's Treasure Cards",
      concept: "nft",
      preview: "Princess Luna creates special Treasure Cards that can never be copied...",
      image: "princess"
    },
    {
      id: 3,
      title: "The Space Explorer's Ghost Pouch",
      concept: "wallet",
      preview: "A young space explorer finds a mysterious Ghost Pouch that keeps treasures safe...",
      image: "space"
    },
    {
      id: 4,
      title: "Pirate's Rainbow Pool",
      concept: "defi",
      preview: "Captain Redbeard discovers a magical Rainbow Pool where his coins multiply...",
      image: "pirate"
    },
    {
      id: 5,
      title: "The Fairy Helper Heroes",
      concept: "validator",
      preview: "A group of tiny fairies work together to keep the kingdom's magic running smoothly...",
      image: "fairy"
    }
  ];
  
  const storyImages = {
    dragon: "bg-soul-primary/20",
    princess: "bg-soul-primary/30",
    space: "bg-soul-primary/40",
    pirate: "bg-soul-primary/20",
    fairy: "bg-soul-primary/30"
  };
  
  const filteredStories = activeCategory === 'all' 
    ? libraryStories 
    : libraryStories.filter(story => story.concept === activeCategory);
  
  return (
    <div className="flex flex-col h-full bg-soul-lighter text-soul-text">
      <header className="p-4 border-b border-soul-light/50 flex justify-between items-center bg-white">
        <button onClick={onBack} className="text-soul-primary">
          <ArrowRight className="h-6 w-6 rotate-180" />
        </button>
        <h1 className="text-xl font-bold text-soul-text font-heading">Story Library</h1>
        <button className="p-2 rounded-full bg-soul-light/50 shadow-sm">
          <Search className="h-5 w-5 text-soul-primary" />
        </button>
      </header>
      
      <div className="p-4 border-b border-soul-light/50 overflow-x-auto bg-white">
        <div className="flex gap-2">
          {storyCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-sm ${
                activeCategory === category.id
                  ? 'bg-soul-primary text-white'
                  : 'bg-soul-light/30 text-soul-subtext'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 gap-4">
          {filteredStories.map((story) => (
            <div key={story.id} className="rounded-xl overflow-hidden border border-soul-light/30 shadow-sm bg-white">
              <div className={`h-32 ${storyImages[story.image]} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80"></div>
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-soul-text font-heading">{story.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-soul-text text-sm mb-3">{story.preview}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs px-2 py-1 rounded-full bg-soul-light/50 text-soul-subtext">
                    {story.concept.charAt(0).toUpperCase() + story.concept.slice(1)}
                  </span>
                  <button className="flex items-center gap-1 text-soul-primary text-sm">
                    <Book size={14} />
                    Read
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
