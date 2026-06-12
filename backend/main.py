from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model.predict import predict_job

import uvicorn

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000)
app = FastAPI()

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
    result = predict_job(job.text)
    return result