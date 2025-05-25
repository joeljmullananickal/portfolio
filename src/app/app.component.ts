import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Java']
    },
    {
      category: 'Database',
      items: ['SQLite', 'SQL', 'DBMS']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Shell', 'Project Management', 'Problem Solving']
    }
  ];

  projects = [
    {
      title: 'FinGpt-AI tax optimizer & smarter investment tool',
      description: 'AI-powered financial tool for tax optimization and investment strategies using machine learning techniques.',
      technologies: ['Python', 'Flask', 'OpenAI API', 'Decision Trees', 'Linear Regression'],
      accuracy: {tax: '90%', investment: '98%'}
    },
    {
      title: 'IPL-Dashboard',
      description: 'Web application displaying detailed IPL team statistics with interactive visualizations.',
      technologies: ['React.js', 'HTML/CSS', 'JavaScript', 'API Integration'],
      link: 'https://jjm-ipl-dashboard.vercel.app/'
    },
    {
      title: 'Jobby App',
      description: 'Job search platform with advanced filtering capabilities.',
      technologies: ['React.js', 'HTML/CSS', 'JavaScript', 'API Integration'],
      link: 'https://jjm-jobby-app.vercel.app/'
    }
  ];

  education = [
    {
      degree: 'MERN Stack Web Development Course-CCBP 4.0',
      institution: 'NxtWave Disruptive Technologies',
      duration: 'August 2024 – April 2025'
    },
    {
      degree: 'Bachelor of Technology (B. Tech.)-CSE',
      institution: 'Saintgits College of Engineering, Kerala',
      duration: 'July 2020 - July 2024',
      score: 'CGPA: 7.82'
    },
    {
      degree: 'XII-Kerala HSE(PCMB)',
      institution: "St. Antony's HSS, Mutholy, Kerala",
      duration: 'April 2017-April 2019',
      score: 'Percentage: 91.5'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });

    gsap.from('.hero h1', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out'
    });
  }
}