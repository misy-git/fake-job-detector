# 🚨 Fake Job Offer Detector

> AI-powered web app that instantly analyzes job offers and recruitment emails to detect scams in real time.

![Project Banner](./screenshots/banner.png)

## 🌐 Live Demo
🔗 [fake-job-detector.vercel.app](https://fake-job-detector.vercel.app)

---

## 📸 Screenshots

### Home Page
![Home](./screenshots/home.png)

### Scam Detected
![Scam Result](./screenshots/scam-result.png)
![Scam Result](./screenshots/scam1-result.png)

### Legit Job Offer
![Legit Result](./screenshots/legit-result.png)

---

## 🧠 How It Works

```
User pastes job offer text
        ↓
React frontend sends to FastAPI backend
        ↓
TF-IDF vectorizer converts text to features
        ↓
Logistic Regression model predicts SCAM / LEGIT
        ↓
Keyword engine detects specific red flags
        ↓
Result shown with confidence % + detailed reasons
```

---

## ✨ Features

- 🔍 **Instant AI Analysis** — Results in under a second
- 📊 **Confidence Score** — Shows how certain the AI is
- 🚩 **Red Flag Detection** — Identifies specific scam patterns with explanations
- 💡 **Load Sample** — Built-in test cases to try instantly
- 📝 **Source Text Viewer** — See exactly what was analyzed
- 🌙 **Dark Theme UI** — Clean cybersecurity-inspired design
- ⚡ **Real-time Char Counter** — Minimum character validation

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js 18, Tailwind CSS, Axios |
| Backend | Python 3.12, FastAPI, Uvicorn |
| ML Model | Scikit-learn, TF-IDF Vectorizer |
| Algorithm | Logistic Regression |
| NLP | Keyword-based red flag engine |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📁 Project Structure

```
fake-job-detector/
│
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # Top navigation bar
│   │   │   ├── InputBox.jsx   # Text input + scan button
│   │   │   └── ResultCard.jsx # AI result display
│   │   ├── App.jsx            # Main app component
│   │   └── index.css          # Global styles + Tailwind
│   └── package.json
│
├── backend/                   # FastAPI server
│   ├── main.py                # API endpoints
│   ├── model/
│   │   ├── train.py           # Model training script
│   │   ├── predict.py         # Prediction + red flag logic
│   │   ├── scam_model.pkl     # Trained ML model
│   │   └── vectorizer.pkl     # TF-IDF vectorizer
│   ├── data/
│   │   └── dataset.csv        # Labeled training dataset
│   └── requirements.txt
│
├── screenshots/               # App screenshots
├── .gitignore
└── README.md
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js v18+
- Python 3.9+
- npm

### 1. Clone the repo
```bash
git clone https://github.com/misy-git/fake-job-detector.git
cd fake-job-detector
```

### 2. Backend setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux
pip install -r requirements.txt
python model/train.py        # Train the model
uvicorn main:app --reload
```

### 3. Frontend setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🤖 ML Model Details

| Property | Value |
|---|---|
| Algorithm | Logistic Regression |
| Vectorizer | TF-IDF (Term Frequency-Inverse Document Frequency) |
| Dataset Size | 110+ labeled samples |
| Classes | SCAM (1) / LEGIT (0) |
| Accuracy | ~92% on test split |

### Red Flag Categories Detected

| Category | Examples |
|---|---|
| 💰 Upfront Fee Demands | Registration fee, activation fee, processing fee |
| 🏦 Banking Info Requests | Bank account, Aadhaar, PAN card |
| 🎯 Unrealistic Income | Earn 1 lakh/month, 1000/hour, unlimited income |
| ⏰ Urgency Tactics | Limited slots, expires in 24 hours, act now |
| 📄 Document Requests | Passport copy, ID proof, send selfie |
| 📱 Unofficial Channels | WhatsApp confirmation, personal numbers |
| 🎰 Lottery Scams | You have been selected, claim your offer |
| 📋 Fake Task Jobs | Copy paste work, typing jobs, survey jobs |

---

## 🔮 Future Improvements

- [ ] BERT/transformer-based model for higher accuracy
- [ ] Browser extension for real-time email scanning
- [ ] Multi-language support (Hindi, Tamil)
- [ ] Bulk URL/email scanning
- [ ] User feedback loop to improve model over time
- [ ] Mobile app (React Native)

---

## 👩‍💻 Author

**Misbah Fathima**
- 💼 Frontend Developer & AI/ML Enthusiast
- 🔗 [GitHub](https://github.com/misy-git)
- 🔗 [LinkedIn](https://linkedin.com/in/your-profile)
- 🌐 [Portfolio](https://your-portfolio.vercel.app)

---

> ⚠️ *AI analysis can make mistakes. Always verify job offers independently through official company websites.*
