from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List, Optional
from pydantic import BaseModel
from . import models, database

router = APIRouter()

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Pydantic Models
class CaseCreate(BaseModel):
    customer_name: str
    amount: float
    age_days: int

class CaseResponse(BaseModel):
    id: int
    customer_name: str
    amount: float
    status: str
    recovery_probability: float
    priority_score: float
    
    class Config:
        orm_mode = True

# Mock Auth (Simplification for MVP)
@router.post("/login")
def login(username: str):
    # In real app: verify password, return JWT
    return {"token": "mock-token-for-" + username, "username": username}

# Case Management
@router.get("/cases", response_model=List[CaseResponse])
def get_cases(db: Session = Depends(get_db)):
    return db.query(models.Case).all()

@router.post("/cases/assign/{case_id}")
def assign_case(case_id: int, dca_id: int, db: Session = Depends(get_db)):
    case = db.query(models.Case).filter(models.Case.id == case_id).first()
    if not case:
        raise HTTPException(status_code=404, detail="Case not found")
    
    case.assigned_to_id = dca_id
    case.status = "ASSIGNED"
    db.commit()
    return {"message": "Case assigned successfully"}
