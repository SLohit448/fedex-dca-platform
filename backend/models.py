from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String)  # 'admin' or 'dca'
    agency_name = Column(String, nullable=True) # For DCA users

    cases = relationship("Case", back_populates="assigned_agent")

class Case(Base):
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String)
    amount = Column(Float)
    age_days = Column(Integer)
    status = Column(String, default="NEW") # NEW, ASSIGNED, IN_PROGRESS, CLOSED
    recovery_probability = Column(Float, default=0.0)
    priority_score = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    assigned_to_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    assigned_agent = relationship("User", back_populates="cases")
