import React from 'react';
import { BookOpenIcon, UserGroupIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">About Bookstte</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your literary journey begins here. Discover, explore, and fall in love with books all over again.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-6">Our Story</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Born from a passion for literature and technology, Bookstte emerged as a sanctuary for book lovers 
            worldwide. We believe every book holds a universe waiting to be explored, and every reader deserves 
            a personalized journey through these worlds.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 hover:bg-purple-50 rounded-xl transition-all">
              <BookOpenIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">250k+ Books</h3>
              <p className="text-slate-600">Curated collection spanning all genres</p>
            </div>
            <div className="text-center p-6 hover:bg-purple-50 rounded-xl transition-all">
              <UserGroupIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1M+ Readers</h3>
              <p className="text-slate-600">Join our vibrant community</p>
            </div>
            <div className="text-center p-6 hover:bg-purple-50 rounded-xl transition-all">
              <AcademicCapIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p className="text-slate-600">Professional insights & recommendations</p>
            </div>
          </div>
        </div>

  

        {/* CTA Section */}
        <div className="bg-purple-600 text-white rounded-2xl p-8 text-center">
          <HeartIcon className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Reading Community</h2>
          <p className="text-lg mb-6">Start your literary adventure today</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};