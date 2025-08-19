
# 📌 Plan VIP App

Application Next.js (React) pour gérer un plan de tables VIP interactif.

## 🚀 Fonctionnalités
- Cliquer sur une table → change de couleur (vert = dispo, rouge = réservé)
- Si réservé → demande **Nom du client** et **Nombre de personnes**
- Affiche les infos sous la table
- 100% sans base de données (mémoire locale).

## 📂 Structure
```
plan-vip-app/
 ├─ public/
 │   └─ plan-salle.jpg
 ├─ pages/
 │   └─ index.jsx
 ├─ package.json
 └─ README.md
```

## ▶️ Lancer en local
```bash
npm install
npm run dev
```
Puis ouvre http://localhost:3000

## 🌍 Déploiement (Vercel)
1. Push ce dossier sur GitHub
2. Sur https://vercel.com → **New Project** → importe le repo
3. **Deploy** → tu obtiens une URL publique

## 🖼️ Image du plan
Remplace `public/plan-salle.jpg` par ton plan réel si besoin.
