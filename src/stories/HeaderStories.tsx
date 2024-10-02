import React from 'react';
import './header.css';
import {Header} from "../components/layout/Header/Header";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const HeaderStories = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <Header/>
);
