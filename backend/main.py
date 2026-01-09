from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, database, api

# Create Tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(
    title="FedEx IDCAP API",
    description="Intelligent DCA Management Platform Backend",
    version="1.0.0"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to FedEx IDCAP API", "status": "running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
