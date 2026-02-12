// Fix: Added React import to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detailedInfo?: string;
  features: string[];
}

export interface Industry {
  id: string;
  name: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'IoT' | 'ELV' | 'Fire & Safety' | 'Networking' | 'Security';
  image: string;
  scope: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}