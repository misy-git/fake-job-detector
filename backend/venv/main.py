from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow React frontend to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class JobInput(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "Fake Job Detector API is running!"}


@app.post("/analyze")
def analyze(job: JobInput):
    # Temporary placeholder — real model comes in Phase 4
    return {
        "result": "SCAM",
        "confidence": 91.5,
        "reasons": ["Too good to be true salary", "Urgency in language"]
    }