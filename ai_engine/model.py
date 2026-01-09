from sklearn.linear_model import LogisticRegression
import pandas as pd
import numpy as np
import pickle

class RecoveryModel:
    def __init__(self):
        self.model = LogisticRegression()
        self.is_trained = False

    def train(self, data: pd.DataFrame):
        """
        Train the model with historical data.
        Features: Amount, Age, PreviousPaymentHistory
        Target: Recovered (0/1)
        """
        X = data[['amount', 'age_days', 'interaction_count']]
        y = data['recovered']
        self.model.fit(X, y)
        self.is_trained = True
        print("Model trained successfully.")

    def predict_recovery_probability(self, amount, age_days, interaction_count):
        if not self.is_trained:
            # Return dummy probability if not trained
            return 0.5 
        
        features = np.array([[amount, age_days, interaction_count]])
        prob = self.model.predict_proba(features)[0][1]
        return prob
