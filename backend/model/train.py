import pandas as pd
import pickle
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load dataset
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
data_path = os.path.join(BASE_DIR, "data", "dataset.csv")
df = pd.read_csv(data_path)

X = df["text"]
y = df["label"]

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Vectorize
vectorizer = TfidfVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train
model = LogisticRegression()
model.fit(X_train_vec, y_train)

# Accuracy
preds = model.predict(X_test_vec)
print(f"Model Accuracy: {accuracy_score(y_test, preds) * 100:.2f}%")

# Save
model_dir = os.path.dirname(__file__)
with open(os.path.join(model_dir, "scam_model.pkl"), "wb") as f:
    pickle.dump(model, f)
with open(os.path.join(model_dir, "vectorizer.pkl"), "wb") as f:
    pickle.dump(vectorizer, f)

print("Model saved successfully!")