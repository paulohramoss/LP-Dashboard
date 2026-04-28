import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const css = `
  :root {
    --blue: #0053EF;
    --blue-dark: #0040C4;
    --blue-deep: #00287A;
    --lime: #CFF330;
    --lime-dark: #B8DC1A;
    --white: #FFF9EF;
    --off-white: #FFF9EF;
    --gray-light: #E8E4DA;
    --gray: #8A8880;
    --dark: #0A0A0A;
    --dark-card: #111111;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Inter', sans-serif;
    background: var(--dark);
    color: var(--white);
    overflow-x: hidden;
    cursor: none;
  }

  .cursor {
    position: fixed;
    width: 12px; height: 12px;
    background: var(--lime);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
    mix-blend-mode: difference;
  }
  .cursor-ring {
    position: fixed;
    width: 36px; height: 36px;
    border: 1.5px solid rgba(207,243,48,0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: all 0.15s ease;
  }
  .cursor.hover { width: 24px; height: 24px; }

  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 20px 60px;
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(11,13,17,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .nav-logo {
    font-family: 'Inter', sans-serif;
    font-size: 26px; font-weight: 800;
    letter-spacing: -0.5px;
    display: flex; align-items: center; gap: 6px;
  }
  .nav-logo span { color: var(--lime); }
  .nav-logo .dot { width: 8px; height: 8px; background: var(--lime); border-radius: 50%; display: inline-block; }
  .nav-links { display: flex; gap: 36px; }
  .nav-links a {
    text-decoration: none; color: var(--gray);
    font-size: 14px; font-weight: 400;
    transition: color 0.2s;
    letter-spacing: 0.3px;
  }
  .nav-links a:hover { color: var(--white); }
  .nav-cta {
    background: var(--lime); color: var(--dark);
    border: none; padding: 11px 24px;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700;
    letter-spacing: 0.5px; text-transform: uppercase;
    border-radius: 100px; cursor: none;
    transition: background 0.2s, transform 0.2s;
  }
  .nav-cta:hover { background: var(--lime-dark); transform: scale(1.03); }

  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 120px 60px 80px;
    position: relative;
    overflow: hidden;
    gap: 60px;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 60% at 80% 40%, rgba(0,83,239,0.18) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 20% 80%, rgba(207,243,48,0.08) 0%, transparent 60%);
  }
  .hero-grid {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%);
  }
  .hero-left { position: relative; z-index: 2; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(207,243,48,0.1);
    border: 1px solid rgba(207,243,48,0.3);
    padding: 6px 14px; border-radius: 100px;
    font-size: 12px; font-weight: 500; color: var(--lime);
    letter-spacing: 0.8px; text-transform: uppercase;
    margin-bottom: 28px;
    animation: fadeUp 0.6s ease both;
  }
  .hero-badge::before {
    content: ''; width: 6px; height: 6px;
    background: var(--lime); border-radius: 50%;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  h1 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(38px, 4.5vw, 64px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -2px;
    animation: fadeUp 0.6s 0.1s ease both;
  }
  h1 .accent { color: var(--lime); }
  h1 .stroke {
    -webkit-text-stroke: 1px rgba(255,255,255,0.4);
    color: transparent;
  }
  .hero-sub {
    margin-top: 20px;
    font-size: 18px; font-weight: 300;
    line-height: 1.6;
    color: rgba(255,255,255,0.6);
    max-width: 440px;
    animation: fadeUp 0.6s 0.2s ease both;
  }
  .hero-actions {
    margin-top: 36px;
    display: flex; align-items: center; gap: 16px;
    animation: fadeUp 0.6s 0.3s ease both;
  }
  .btn-primary {
    background: var(--lime); color: var(--dark);
    border: none; padding: 16px 32px;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700;
    border-radius: 100px; cursor: none;
    transition: all 0.25s ease;
    display: flex; align-items: center; gap: 10px;
    letter-spacing: 0.2px;
  }
  .btn-primary:hover { background: var(--lime-dark); transform: translateY(-2px); box-shadow: 0 12px 40px rgba(207,243,48,0.3); }
  .btn-primary .arrow {
    width: 20px; height: 20px;
    background: var(--dark); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px;
  }
  .btn-ghost {
    background: transparent; color: rgba(255,255,255,0.7);
    border: 1px solid rgba(255,255,255,0.15); padding: 16px 28px;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 400;
    border-radius: 100px; cursor: none;
    transition: all 0.25s ease;
  }
  .btn-ghost:hover { border-color: rgba(255,255,255,0.4); color: var(--white); }
  .hero-proof {
    margin-top: 48px;
    display: flex; align-items: center; gap: 20px;
    animation: fadeUp 0.6s 0.4s ease both;
  }
  .proof-avatars { display: flex; }
  .proof-avatars .av {
    width: 36px; height: 36px; border-radius: 50%;
    border: 2px solid var(--dark);
    margin-left: -10px;
    font-size: 14px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 600;
  }
  .proof-avatars .av:first-child { margin-left: 0; }
  .av-1 { background: linear-gradient(135deg, #FF6B6B, #FE3F80); }
  .av-2 { background: linear-gradient(135deg, #4ECDC4, #44A08D); }
  .av-3 { background: linear-gradient(135deg, #F7971E, #FFD200); }
  .av-4 { background: linear-gradient(135deg, #A8EDEA, #FED6E3); }
  .proof-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.4; }
  .proof-text strong { color: var(--white); font-weight: 500; }

  .hero-right {
    position: relative; z-index: 2;
    display: flex; justify-content: center; align-items: center;
  }
  .phone-mockup {
    width: 280px;
    background: var(--dark-card);
    border-radius: 40px;
    border: 1px solid rgba(255,255,255,0.08);
    padding: 28px 20px;
    position: relative;
    box-shadow: 0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
    animation: floatPhone 4s ease-in-out infinite;
  }
  @keyframes floatPhone {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-12px) rotate(-2deg); }
  }
  .phone-notch {
    width: 80px; height: 24px;
    background: var(--dark);
    border-radius: 100px;
    margin: 0 auto 20px;
    position: relative;
  }
  .phone-notch::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 10px; height: 10px;
    background: rgba(207,243,48,0.4);
    border-radius: 50%;
  }
  .phone-header { text-align: center; margin-bottom: 20px; }
  .phone-greeting { font-size: 12px; color: var(--gray); }
  .phone-name { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; }
  .phone-balance-card {
    background: linear-gradient(135deg, var(--blue), #0040C4);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }
  .phone-balance-card::before {
    content: '';
    position: absolute; top: -20px; right: -20px;
    width: 100px; height: 100px;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
  }
  .pbc-label { font-size: 11px; color: rgba(255,255,255,0.6); margin-bottom: 6px; }
  .pbc-amount {
    font-family: 'Inter', sans-serif;
    font-size: 28px; font-weight: 800;
    letter-spacing: -1px;
  }
  .pbc-change {
    margin-top: 8px;
    font-size: 11px;
    color: var(--lime);
    display: flex; align-items: center; gap: 4px;
  }
  .phone-cats {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 10px; margin-bottom: 16px;
  }
  .cat-item {
    background: rgba(255,255,255,0.05);
    border-radius: 14px; padding: 12px;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .cat-icon { font-size: 18px; margin-bottom: 4px; }
  .cat-name { font-size: 10px; color: var(--gray); }
  .cat-spent { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; }
  .cat-bar { margin-top: 6px; height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; }
  .cat-bar-fill { height: 100%; border-radius: 2px; }
  .phone-ask {
    background: rgba(207,243,48,0.1);
    border: 1px solid rgba(207,243,48,0.3);
    border-radius: 14px; padding: 12px;
  }
  .ask-label { font-size: 10px; color: var(--lime); margin-bottom: 4px; font-weight: 500; }
  .ask-question { font-size: 12px; color: rgba(255,255,255,0.7); margin-bottom: 8px; }
  .ask-answer { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; color: var(--lime); }

  .float-card {
    position: absolute;
    background: var(--dark-card);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 14px 18px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }
  .float-card-1 { left: -100px; top: 60px; animation: floatCard1 3.5s ease-in-out infinite; }
  .float-card-2 { right: -80px; bottom: 80px; animation: floatCard2 4s 0.5s ease-in-out infinite; }
  @keyframes floatCard1 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes floatCard2 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }
  .fc-label { font-size: 10px; color: var(--gray); margin-bottom: 2px; }
  .fc-value { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 800; color: var(--lime); }
  .fc-sub { font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 2px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  section { padding: 100px 60px; }
  .section-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: var(--lime);
    margin-bottom: 16px;
  }
  .section-label::before { content: ''; width: 24px; height: 1px; background: var(--lime); }

  .benefits { background: var(--off-white); color: var(--dark); }
  .benefits-header { text-align: center; margin-bottom: 64px; }
  .benefits-header h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(32px, 4vw, 54px); font-weight: 800;
    letter-spacing: -2px; line-height: 1.05;
    max-width: 600px; margin: 0 auto;
  }
  .benefits-header p {
    margin-top: 16px; font-size: 17px;
    color: rgba(11,13,17,0.5); max-width: 440px; margin: 16px auto 0;
    line-height: 1.6;
  }
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .benefit-card {
    background: var(--white);
    border-radius: 24px; padding: 32px 28px;
    position: relative; overflow: hidden;
    border: 1px solid rgba(0,0,0,0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: none;
  }
  .benefit-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,83,239,0.12); }
  .benefit-card:nth-child(2) { background: var(--blue); color: white; }
  .benefit-card:nth-child(2) .ben-text { color: rgba(255,255,255,0.7); }
  .benefit-card:nth-child(4) { background: var(--dark); color: white; }
  .benefit-card:nth-child(4) .ben-text { color: rgba(255,255,255,0.6); }
  .ben-num { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 2px; opacity: 0.3; margin-bottom: 20px; }
  .ben-icon { font-size: 36px; margin-bottom: 16px; }
  .ben-title { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 10px; }
  .ben-text { font-size: 14px; line-height: 1.6; opacity: 0.65; }
  .ben-tag {
    display: inline-block; margin-top: 16px;
    background: rgba(207,243,48,0.15); color: var(--lime-dark);
    font-size: 11px; font-weight: 600; letter-spacing: 1px;
    padding: 4px 12px; border-radius: 100px; text-transform: uppercase;
  }
  .benefit-card:nth-child(2) .ben-tag { background: rgba(255,255,255,0.15); color: white; }
  .benefit-card:nth-child(4) .ben-tag { background: rgba(207,243,48,0.15); color: var(--lime); }

  .features { background: var(--dark); }
  .features-header { margin-bottom: 64px; }
  .features-header h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(32px, 4vw, 54px); font-weight: 800;
    letter-spacing: -2px; line-height: 1.05;
    max-width: 560px;
  }
  .features-header h2 .accent { color: var(--lime); }
  .features-header p { margin-top: 16px; font-size: 17px; color: rgba(255,255,255,0.45); max-width: 400px; line-height: 1.6; }
  .features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .feature-card {
    background: var(--dark-card);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 24px; padding: 36px;
    position: relative; overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
    cursor: none;
  }
  .feature-card:hover { border-color: rgba(207,243,48,0.3); transform: translateY(-3px); }
  .feature-card.featured {
    background: linear-gradient(135deg, var(--blue-deep), #002080);
    border-color: rgba(0,83,239,0.3);
  }
  .feature-card.featured:hover { border-color: rgba(0,83,239,0.6); }
  .fc-number { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 3px; color: rgba(255,255,255,0.2); margin-bottom: 20px; }
  .fc-title { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 12px; }
  .fc-desc { font-size: 15px; line-height: 1.65; color: rgba(255,255,255,0.5); }
  .fc-visual {
    margin-top: 28px;
    background: rgba(255,255,255,0.04);
    border-radius: 16px; padding: 20px;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .fc-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
  .chip { padding: 6px 14px; border-radius: 100px; font-size: 12px; font-weight: 500; cursor: none; }
  .chip-active { background: var(--blue); color: white; }
  .chip-lime { background: rgba(207,243,48,0.15); color: var(--lime); border: 1px solid rgba(207,243,48,0.3); }
  .chip-ghost { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.08); }
  .limit-bar-wrap { margin-top: 10px; }
  .limit-label { display: flex; justify-content: space-between; font-size: 11px; color: rgba(255,255,255,0.4); margin-bottom: 6px; }
  .limit-bar { height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; }
  .limit-fill { height: 100%; border-radius: 3px; }
  .fill-ok { background: var(--lime); }
  .fill-warn { background: #FFB547; }
  .fill-bad { background: #FF4D4D; }
  .ask-bubble {
    background: rgba(207,243,48,0.08);
    border: 1px solid rgba(207,243,48,0.2);
    border-radius: 16px 16px 16px 4px;
    padding: 12px 16px;
    font-size: 13px; color: rgba(255,255,255,0.7);
    margin-bottom: 10px;
  }
  .answer-bubble {
    background: var(--lime);
    color: var(--dark);
    border-radius: 16px 16px 4px 16px;
    padding: 12px 16px;
    font-size: 13px; font-weight: 600;
    text-align: right;
    margin-left: 40px;
  }

  .comparison { background: var(--off-white); color: var(--dark); }
  .comparison h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(32px, 4vw, 54px); font-weight: 800;
    letter-spacing: -2px; line-height: 1.05;
    max-width: 620px; margin-bottom: 12px;
  }
  .comparison-sub { font-size: 17px; color: rgba(11,13,17,0.5); max-width: 440px; line-height: 1.6; margin-bottom: 56px; }
  .comparison-table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
    background: rgba(0,0,0,0.08);
    border-radius: 24px;
    overflow: hidden;
  }
  .ct-header {
    background: var(--dark);
    color: white;
    padding: 24px 28px;
    font-family: 'Inter', sans-serif; font-weight: 700; font-size: 15px;
  }
  .ct-header.eazy { background: var(--blue); }
  .ct-header .logo-mark { font-size: 20px; margin-bottom: 4px; }
  .ct-header .tagline { font-size: 11px; opacity: 0.6; font-family: 'Inter', sans-serif; font-weight: 400; }
  .ct-cell {
    background: var(--white);
    padding: 20px 28px;
    font-size: 14px; color: rgba(11,13,17,0.7);
    border-top: 1px solid rgba(0,0,0,0.05);
    display: flex; align-items: center; gap: 10px;
  }
  .ct-cell.eazy { background: #EFF4FF; }
  .ct-cell .icon { font-size: 16px; width: 24px; text-align: center; }

  .testimonials { background: var(--dark); }
  .testimonials h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(30px, 3.5vw, 48px); font-weight: 800;
    letter-spacing: -1.5px; line-height: 1.1;
    max-width: 480px; margin-bottom: 56px;
  }
  .testimonials h2 .accent { color: var(--lime); }
  .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .testi-card {
    background: var(--dark-card);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 24px; padding: 32px;
    cursor: none;
    transition: border-color 0.3s, transform 0.3s;
  }
  .testi-card:hover { border-color: rgba(207,243,48,0.2); transform: translateY(-3px); }
  .testi-stars { color: #FFD700; font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
  .testi-quote { font-size: 16px; line-height: 1.65; color: rgba(255,255,255,0.75); margin-bottom: 24px; font-style: italic; }
  .testi-quote strong { color: var(--white); font-style: normal; }
  .testi-author { display: flex; align-items: center; gap: 12px; }
  .testi-av {
    width: 40px; height: 40px; border-radius: 50%;
    font-size: 16px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 600; flex-shrink: 0;
  }
  .testi-name { font-weight: 600; font-size: 14px; }
  .testi-role { font-size: 12px; color: var(--gray); }

  .faq { background: var(--off-white); color: var(--dark); }
  .faq-wrap { max-width: 720px; margin: 0 auto; }
  .faq h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(30px, 3.5vw, 48px); font-weight: 800;
    letter-spacing: -1.5px; line-height: 1.1;
    margin-bottom: 48px; text-align: center;
  }
  .faq-item { border-bottom: 1px solid rgba(0,0,0,0.1); cursor: none; }
  .faq-q {
    padding: 24px 0;
    display: flex; align-items: center; justify-content: space-between;
    gap: 20px;
    font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 600;
    letter-spacing: -0.3px;
    transition: color 0.2s;
    cursor: none;
  }
  .faq-q:hover { color: var(--blue); }
  .faq-toggle {
    width: 32px; height: 32px; border-radius: 50%;
    background: rgba(0,0,0,0.06);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
    transition: transform 0.3s, background 0.2s;
  }
  .faq-item.open .faq-toggle { transform: rotate(45deg); background: var(--blue); color: white; }
  .faq-a {
    max-height: 0; overflow: hidden;
    font-size: 15px; line-height: 1.7; color: rgba(11,13,17,0.6);
    transition: max-height 0.4s ease, padding 0.3s;
  }
  .faq-item.open .faq-a { max-height: 300px; padding-bottom: 24px; }

  .final-cta {
    background: var(--dark);
    text-align: center;
    padding: 120px 60px;
    position: relative; overflow: hidden;
  }
  .final-cta-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,83,239,0.2) 0%, transparent 70%);
  }
  .final-cta h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(36px, 5vw, 72px); font-weight: 800;
    letter-spacing: -2.5px; line-height: 1.02;
    max-width: 800px; margin: 0 auto 20px;
    position: relative; z-index: 1;
  }
  .final-cta h2 .accent { color: var(--lime); }
  .final-cta h2 .stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent; }
  .final-cta p { font-size: 18px; color: rgba(255,255,255,0.5); max-width: 460px; margin: 0 auto 40px; line-height: 1.6; position: relative; z-index: 1; }
  .final-cta .actions { position: relative; z-index: 1; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .final-cta .small-note { margin-top: 20px; font-size: 13px; color: rgba(255,255,255,0.3); position: relative; z-index: 1; }

  footer {
    background: var(--dark-card);
    padding: 40px 60px;
    display: flex; align-items: center; justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.06);
    flex-wrap: wrap; gap: 16px;
  }
  .footer-logo { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 800; color: white; }
  .footer-logo span { color: var(--lime); }
  .footer-links { display: flex; gap: 28px; }
  .footer-links a { text-decoration: none; color: rgba(255,255,255,0.4); font-size: 13px; transition: color 0.2s; }
  .footer-links a:hover { color: var(--white); }
  .footer-copy { font-size: 12px; color: rgba(255,255,255,0.25); }

  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(10px);
    z-index: 1000;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s;
  }
  .modal-overlay.open { opacity: 1; pointer-events: all; }
  .modal {
    background: var(--dark-card);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 28px; padding: 48px;
    max-width: 460px; width: 90%;
    position: relative;
    transform: translateY(20px);
    transition: transform 0.3s;
  }
  .modal-overlay.open .modal { transform: translateY(0); }
  .modal-close {
    position: absolute; top: 20px; right: 20px;
    background: rgba(255,255,255,0.08);
    border: none; border-radius: 50%;
    width: 32px; height: 32px;
    color: white; font-size: 16px;
    cursor: none;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .modal-close:hover { background: rgba(255,255,255,0.16); }
  .modal-tag {
    display: inline-block;
    background: rgba(207,243,48,0.1); color: var(--lime);
    border: 1px solid rgba(207,243,48,0.3);
    font-size: 11px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; padding: 5px 12px; border-radius: 100px;
    margin-bottom: 20px;
  }
  .modal h3 { font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 800; letter-spacing: -1px; line-height: 1.15; margin-bottom: 10px; }
  .modal p { font-size: 15px; color: rgba(255,255,255,0.5); margin-bottom: 28px; line-height: 1.6; }
  .modal-form { display: flex; flex-direction: column; gap: 12px; }
  .modal-input {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 14px; padding: 14px 18px;
    color: white; font-family: 'Inter', sans-serif; font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
  }
  .modal-input:focus { border-color: var(--blue); }
  .modal-input::placeholder { color: rgba(255,255,255,0.3); }
  .modal-input.error { border-color: #FF4D4D; }
  .modal-submit {
    background: var(--lime); color: var(--dark);
    border: none; border-radius: 14px; padding: 16px;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700;
    cursor: none; transition: background 0.2s, transform 0.2s;
    letter-spacing: 0.3px;
  }
  .modal-submit:hover { background: var(--lime-dark); transform: scale(1.01); }
  .modal-note { font-size: 12px; color: rgba(255,255,255,0.3); text-align: center; }
  .modal-success { text-align: center; padding: 20px 0; }
  .modal-success .check { font-size: 48px; margin-bottom: 16px; }
  .modal-success h4 { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 8px; }
  .modal-success p { font-size: 15px; color: rgba(255,255,255,0.5); }

  .reveal {
    opacity: 0; transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* Override any global font/cursor conflicts */
  .lp-page h1, .lp-page h2, .lp-page h3, .lp-page h4, .lp-page h5, .lp-page h6 {
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 900px) {
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; gap: 40px; }
    .hero-right { display: none; }
    section { padding: 80px 24px; }
    .benefits-grid { grid-template-columns: 1fr 1fr; }
    .features-grid { grid-template-columns: 1fr; }
    .comparison-table { grid-template-columns: 1fr 1fr; }
    .ct-header:first-child, .ct-cell:nth-child(3n+1) { display: none; }
    .testi-grid { grid-template-columns: 1fr; }
    footer { flex-direction: column; padding: 32px 24px; text-align: center; }
    .footer-links { justify-content: center; }
  }
`;


const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [wlName, setWlName] = useState("");
  const [wlEmail, setWlEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mxRef = useRef(0);
  const myRef = useRef(0);
  const rxRef = useRef(0);
  const ryRef = useRef(0);
  const animRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
    setModalSuccess(false);
    setWlName("");
    setWlEmail("");
    setEmailError(false);
  };

  const closeModal = () => setModalOpen(false);

  const submitWaitlist = () => {
    if (!wlName || !wlEmail) {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 2000);
      return;
    }
    setModalSuccess(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    const animateRing = () => {
      rxRef.current += (mxRef.current - rxRef.current) * 0.12;
      ryRef.current += (myRef.current - ryRef.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rxRef.current + "px";
        ringRef.current.style.top = ryRef.current + "px";
      }
      animRef.current = requestAnimationFrame(animateRing);
    };
    animateRing();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => {
    const addHover = () => cursorRef.current?.classList.add("hover");
    const removeHover = () => cursorRef.current?.classList.remove("hover");
    const els = document.querySelectorAll("button, a, .faq-q, .benefit-card, .feature-card, .testi-card");
    els.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });
    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  });

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => { document.body.style.cursor = ""; };
  }, []);

  return (
    <div className="lp-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{css}</style>

      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      {/* MODAL */}
      <div className={`modal-overlay${modalOpen ? " open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>✕</button>
          {!modalSuccess ? (
            <>
              <div className="modal-tag">✦ Lista de espera</div>
              <h3>Você na frente da fila.</h3>
              <p>Cadastre seu e-mail e seja um dos primeiros a ter acesso ao EAZY. Sem spam. Zero enrolação.</p>
              <div className="modal-form">
                <input
                  className="modal-input"
                  type="text"
                  placeholder="Seu nome"
                  value={wlName}
                  onChange={(e) => setWlName(e.target.value)}
                />
                <input
                  className={`modal-input${emailError ? " error" : ""}`}
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={wlEmail}
                  onChange={(e) => setWlEmail(e.target.value)}
                />
                <button className="modal-submit" onClick={submitWaitlist}>Quero entrar na lista →</button>
                <p className="modal-note">Sem cartão de crédito · Cancele quando quiser</p>
              </div>
            </>
          ) : (
            <div className="modal-success">
              <div className="check">🎉</div>
              <h4>Você está na lista!</h4>
              <p>Avisaremos assim que o EAZY abrir as portas. Prepare-se pra mudar sua relação com dinheiro.</p>
            </div>
          )}
        </div>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-logo">EAZ<span>Y</span><div className="dot"></div></div>
        <div className="nav-links">
          <a href="#beneficios">Benefícios</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#funcionalidades">Funcionalidades</a>
        </div>
        <button className="nav-cta" onClick={openModal}>Entrar na lista</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-left">
          <div className="hero-badge">✦ Em breve</div>
          <h1>
            Até quando você vai<br />
            esperar suas <span className="accent">finanças</span><br />
            se organizarem<br />
            <span className="stroke">sozinhas?</span>
          </h1>
          <p className="hero-sub">Você tem muito pra conquistar pra continuar perdido com dinheiro. O EAZY é simples, inteligente — e feito pra quem não aguenta mais planilha.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={openModal}>
              Entrar na lista de espera
              <div className="arrow">→</div>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("funcionalidades")}>Ver como funciona</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="float-card float-card-1">
            <div className="fc-label">Saldo livre este mês</div>
            <div className="fc-value">R$ 847</div>
            <div className="fc-sub">↑ 12% vs. mês passado</div>
          </div>
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-header">
              <div className="phone-greeting">Boa tarde ✌️</div>
              <div className="phone-name">Ana Lima</div>
            </div>
            <div className="phone-balance-card">
              <div className="pbc-label">Saldo restante do mês</div>
              <div className="pbc-amount">R$ 1.240</div>
              <div className="pbc-change">✦ 18 dias restantes · no controle</div>
            </div>
            <div className="phone-cats">
              <div className="cat-item">
                <div className="cat-icon">🍔</div>
                <div className="cat-name">Alimentação</div>
                <div className="cat-spent">R$ 320</div>
                <div className="cat-bar"><div className="cat-bar-fill fill-ok" style={{ width: "64%" }}></div></div>
              </div>
              <div className="cat-item">
                <div className="cat-icon">🎮</div>
                <div className="cat-name">Lazer</div>
                <div className="cat-spent">R$ 180</div>
                <div className="cat-bar"><div className="cat-bar-fill fill-warn" style={{ width: "90%" }}></div></div>
              </div>
            </div>
            <div className="phone-ask">
              <div className="ask-label">✦ Posso gastar?</div>
              <div className="ask-question">"Posso comprar um tênis de R$ 290 hoje?"</div>
              <div className="ask-answer">✅ Sim! Você está no controle.</div>
            </div>
          </div>
          <div className="float-card float-card-2">
            <div className="fc-label">Ansiedade financeira</div>
            <div className="fc-value" style={{ color: "#FF6B6B", textDecoration: "line-through" }}>Alta</div>
            <div className="fc-sub" style={{ color: "var(--lime)" }}>→ Agora: Zero 🎉</div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits" id="beneficios">
        <div className="benefits-header reveal">
          <div className="section-label" style={{ color: "var(--blue)" }}>✦ Por que o EAZY</div>
          <h2>Organizar suas finanças não deveria ser um sofrimento.</h2>
          <p>A gente sabe que você já tentou. Planilha, outro app, caderninho. O problema nunca foi você — foi a ferramenta errada.</p>
        </div>
        <div className="benefits-grid">
          {[
            { num: "01", icon: "🧘", title: "Paz mental de verdade", text: "Sem planilhas, sem aquela dor de cabeça. Abriu o app, já sabe onde você está. Fim da ansiedade do fim do mês.", tag: "Paz mental" },
            { num: "02", icon: "🔍", title: "Clareza total", text: 'Chega de "cadê meu dinheiro?". Com o EAZY, você vê exatamente onde cada centavo foi — sem julgamento, só fatos.', tag: "Clareza" },
            { num: "03", icon: "🎯", title: "Controle simples", text: "Limite por categoria, painel limpo, alertas inteligentes. Você no controle — sem precisar ser especialista em finanças.", tag: "Controle" },
            { num: "04", icon: "✨", title: "Gaste sem culpa", text: "Sabe aquela sensação de comprar algo e não saber se podia? Acabou. O EAZY te diz quando você está no controle pra gastar de boa.", tag: "Liberdade" },
          ].map((b, i) => (
            <div key={i} className={`benefit-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}>
              <div className="ben-num">{b.num}</div>
              <div className="ben-icon">{b.icon}</div>
              <div className="ben-title">{b.title}</div>
              <div className="ben-text">{b.text}</div>
              <span className="ben-tag">{b.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="funcionalidades">
        <div className="features-header reveal">
          <div className="section-label">✦ Funcionalidades</div>
          <h2>Tudo que você precisa,<br />nada que você <span className="accent">não</span> precisa.</h2>
          <p>Desenhado pra quem procrastina, se perde, e precisa de clareza — não de mais complexidade.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card reveal">
            <div className="fc-number">01</div>
            <div className="fc-title">Categorias do seu jeito</div>
            <div className="fc-desc">Nada de categorias genéricas que não fazem sentido pra sua vida. Crie, renomeie, personalize — o EAZY se adapta a você, não o contrário.</div>
            <div className="fc-visual">
              <div className="fc-chips">
                <span className="chip chip-active">🍔 Comida</span>
                <span className="chip chip-lime">💅 Beleza</span>
                <span className="chip chip-ghost">🎮 Games</span>
                <span className="chip chip-ghost">🚗 Transporte</span>
                <span className="chip chip-lime">+ Criar</span>
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Suas categorias · sempre do seu jeito</div>
            </div>
          </div>

          <div className="feature-card featured reveal reveal-delay-1">
            <div className="fc-number">02</div>
            <div className="fc-title">Limites mensais inteligentes</div>
            <div className="fc-desc">Defina quanto quer gastar em cada categoria. O EAZY monitora em tempo real e te avisa antes que você ultrapasse — sem surpresas.</div>
            <div className="fc-visual">
              <div className="limit-bar-wrap">
                <div className="limit-label"><span>🍔 Alimentação</span><span>R$320 / R$500</span></div>
                <div className="limit-bar"><div className="limit-fill fill-ok" style={{ width: "64%" }}></div></div>
              </div>
              <div className="limit-bar-wrap" style={{ marginTop: "12px" }}>
                <div className="limit-label"><span>🎭 Lazer</span><span>R$180 / R$200</span></div>
                <div className="limit-bar"><div className="limit-fill fill-warn" style={{ width: "90%" }}></div></div>
              </div>
              <div className="limit-bar-wrap" style={{ marginTop: "12px" }}>
                <div className="limit-label"><span>👗 Roupas</span><span>R$0 / R$300</span></div>
                <div className="limit-bar"><div className="limit-fill fill-ok" style={{ width: "0%" }}></div></div>
              </div>
            </div>
          </div>

          <div className="feature-card reveal reveal-delay-2">
            <div className="fc-number">03</div>
            <div className="fc-title">Painel que faz sentido</div>
            <div className="fc-desc">Um número principal: quanto sobrou do mês. Sem gráficos confusos, sem dados que você nunca vai usar. Clareza na primeira tela.</div>
            <div className="fc-visual" style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>Restante este mês</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "42px", fontWeight: 800, color: "var(--lime)", letterSpacing: "-2px" }}>R$ 847</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>18 dias restantes · você está no controle ✓</div>
            </div>
          </div>

          <div className="feature-card reveal reveal-delay-3">
            <div className="fc-number">04</div>
            <div className="fc-title">"Posso gastar isso?"</div>
            <div className="fc-desc">A feature mais querida. Pergunte pro EAZY se você pode fazer aquela compra — e ele responde com base no seu saldo e histórico. Sem achismo.</div>
            <div className="fc-visual">
              <div className="ask-bubble">💬 Posso comprar um tênis de R$ 290 essa semana?</div>
              <div className="answer-bubble">✅ Sim! Você tem R$ 847 livres e ainda está no ritmo certo pro mês. Vai lá!</div>
            </div>
          </div>

          <div className="feature-card reveal">
            <div className="fc-number">05</div>
            <div className="fc-title">Gerenciamento de assinaturas</div>
            <div className="fc-desc">Veja todas as suas assinaturas em um só lugar. Spotify, Netflix, academia — o EAZY mapeia tudo e te avisa quando uma renovação está chegando.</div>
            <div className="fc-visual">
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { icon: "🎵", name: "Spotify", value: "R$ 21,90", color: "var(--lime)" },
                  { icon: "🎬", name: "Netflix", value: "R$ 44,90", color: "#FFB547" },
                  { icon: "🏋️", name: "Academia", value: "R$ 89,90", color: "var(--lime)" },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "10px 14px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: "14px" }}>{s.icon} {s.name}</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: s.color }}>{s.value}</span>
                  </div>
                ))}
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>Total mensal: R$ 156,70</div>
              </div>
            </div>
          </div>

          <div className="feature-card reveal reveal-delay-1">
            <div className="fc-number">06</div>
            <div className="fc-title">Gestão de dívidas</div>
            <div className="fc-desc">Parcelas, empréstimos, cartão — tudo organizado. Saiba exatamente quanto deve, pra quem, e quando você quita cada dívida.</div>
            <div className="fc-visual">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Total em dívidas</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", fontWeight: 800, color: "#FF6B6B" }}>R$ 3.200</span>
              </div>
              <div className="limit-bar-wrap">
                <div className="limit-label"><span>💳 Cartão Nubank</span><span>R$ 1.200</span></div>
                <div className="limit-bar"><div className="limit-fill fill-warn" style={{ width: "60%" }}></div></div>
              </div>
              <div className="limit-bar-wrap" style={{ marginTop: "12px" }}>
                <div className="limit-label"><span>🏦 Empréstimo</span><span>R$ 2.000</span></div>
                <div className="limit-bar"><div className="limit-fill fill-bad" style={{ width: "30%" }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison">
        <div className="section-label" style={{ color: "var(--blue)" }}>✦ Comparação</div>
        <h2 className="reveal">Outros apps complicam.<br />O EAZY resolve.</h2>
        <p className="comparison-sub reveal">Chega de apps que parecem mais um trabalho do que uma solução. Você merece algo que funciona sem manual de instrução.</p>
        <div className="comparison-table reveal">
          <div className="ct-header"><div className="logo-mark">📊</div><div>Outros apps</div><div className="tagline">Planilhas digitais complicadas</div></div>
          <div className="ct-header eazy"><div className="logo-mark">⚡</div><div>EAZY</div><div className="tagline">Simples. Inteligente. Seu.</div></div>
          <div className="ct-header" style={{ background: "#1a1a2e" }}><div className="logo-mark">📝</div><div>Planilhas</div><div className="tagline">A tortura clássica</div></div>
          <div className="ct-cell"><span className="icon">❌</span> Curva de aprendizado enorme</div>
          <div className="ct-cell eazy"><span className="icon">✅</span> Zero a zero em 2 minutos</div>
          <div className="ct-cell"><span className="icon">❌</span> Precisa de fórmulas e macros</div>
          <div className="ct-cell"><span className="icon">❌</span> Categorias fixas e genéricas</div>
          <div className="ct-cell eazy"><span className="icon">✅</span> Categorias 100% personalizadas</div>
          <div className="ct-cell"><span className="icon">❌</span> Você que cria e mantém tudo</div>
          <div className="ct-cell"><span className="icon">❌</span> Dados confusos, gráficos demais</div>
          <div className="ct-cell eazy"><span className="icon">✅</span> Um número: quanto sobrou</div>
          <div className="ct-cell"><span className="icon">❌</span> Você perde horas por mês</div>
          <div className="ct-cell"><span className="icon">❌</span> Sem inteligência, só registro</div>
          <div className="ct-cell eazy"><span className="icon">✅</span> "Posso gastar?" com IA</div>
          <div className="ct-cell"><span className="icon">❌</span> Impossível</div>
          <div className="ct-cell"><span className="icon">❌</span> Mais ansiedade financeira</div>
          <div className="ct-cell eazy"><span className="icon">✅</span> Paz mental garantida</div>
          <div className="ct-cell"><span className="icon">❌</span> Sofrimento todo mês</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-bg"></div>
        <h2 className="reveal">
          Organize sua vida<br />
          financeira do<br />
          jeito <span className="accent">fácil.</span>
        </h2>
        <p className="reveal">Chega de adiar. Você merece clareza, paz mental e controle — sem precisar virar especialista em finanças. O EAZY chegou pra isso.</p>
        <div className="actions reveal">
          <button className="btn-primary" onClick={openModal} style={{ fontSize: "16px", padding: "18px 36px" }}>
            Entrar na lista de espera
            <div className="arrow">→</div>
          </button>
        </div>
        <p className="small-note reveal">Gratuito · Sem cartão de crédito · Cancele quando quiser</p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">EAZ<span>Y</span></div>
        <div className="footer-links">
          <Link to="/politica-de-privacidade">Privacidade</Link>
          <Link to="/termos-de-uso">Termos</Link>
          <a href="mailto:contato@eazyfinancas.com.br">Contato</a>
          <a href="https://www.instagram.com/eazy.app/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer-copy">© 2025 EAZY Finanças. Feito com ♥ no Brasil.</div>
      </footer>
    </div>
  );
};

export default LandingPage;
