import pickle
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

MODEL_PATH = os.path.join(os.path.dirname(__file__), "scam_model.pkl")
VECTORIZER_PATH = os.path.join(os.path.dirname(__file__), "vectorizer.pkl")

def load_model():
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)
    with open(VECTORIZER_PATH, "rb") as f:
        vectorizer = pickle.load(f)
    return model, vectorizer

def predict_job(text: str):
    model, vectorizer = load_model()
    vec = vectorizer.transform([text])
    prediction = model.predict(vec)[0]
    confidence = model.predict_proba(vec)[0][prediction] * 100

    reasons = []
    scam_keywords = [
    # Financial red flags
    "bank details", "registration fee", "processing fee", "activation fee",
    "security deposit", "training fee", "advance payment", "investment required",
    "pay to join", "refundable deposit",

    # Unrealistic promises
    "guaranteed", "100% guaranteed", "guaranteed income", "guaranteed placement",
    "earn while you sleep", "easy money", "unlimited income", "no target",
    "earn daily", "daily cash", "salary credited daily", "earn per word",

    # No qualification scams
    "no experience", "no qualification", "no skills required", "no interview",
    "no experience required", "freshers guaranteed", "any qualification",

    # Urgency tactics
    "limited slots", "limited seats", "expires in 24 hours", "act now",
    "urgent", "immediately", "asap", "hurry", "last chance",

    # Personal info requests
    "bank account", "aadhar", "aadhaar", "pan card", "passport copy",
    "send your photo", "id proof", "send otp", "personal details",
    "send selfie", "passbook",

    # Work from home scams
    "work from home kit", "copy paste work", "typing job", "data entry",
    "simple tasks online", "share links", "watching videos", "completing surveys",

    # Too good to be true
    "earn 1 lakh", "earn 50000", "earn 80000", "2 hours a day",
    "make money fast", "lottery", "you have been selected",
    "congratulations you are selected", "claim your offer",

    # Suspicious contact
    "whatsapp us", "whatsapp to confirm", "our agent will contact",
    "share your details to proceed",
]

    for keyword in scam_keywords:
        if keyword.lower() in text.lower():
            reasons.append(f'Contains suspicious phrase: "{keyword}"')

    return {
        "result": "SCAM" if prediction == 1 else "LEGIT",
        "confidence": round(confidence, 2),
        "reasons": reasons if reasons else ["No specific red flags found"]
    }

    